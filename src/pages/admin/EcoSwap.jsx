import { useContext, useState } from "react";
import { ProductContext } from "../../utils/contexts/ProductProvider";
import { authContext } from "../../utils/contexts/AuthProvider";
import formatName from '../../utils/formatters/formatName';

const EcoSwap = () => {

  const { accessToken } = useContext(authContext);
  const { products } = useContext(ProductContext);
  const url = import.meta.env.VITE_API_URL;
  
  const [ recordData, setRecordData] = useState(null);
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [ confirmRecord, setConfirmRecord ] = useState(false);

  const [ quantityInputs, setQuantityinputs ] = useState({})
  const [ formField, setFormField ] = useState({
    record_id: '',
    last_name: ''
  });
  
  const handleFindRecord = async () => {
    const { record_id, last_name } = formField;
    
    if(!record_id || !last_name) {
      alert('Record Id and Last Name are required!');
      return;
    }
    
    try {
      const response = await fetch(`${url}/records/${record_id}?last_name=${last_name}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${accessToken}`
        },
        credentials: 'include'
      });

      

      if(!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setRecordData(data);
    } catch (error) {
      alert(error)
    }
  }

  const handleQuantityInputs = (productId, value) => {
    const parsedValue = parseInt(value, 10);
    
    setQuantityinputs(prev => ({
      ...prev,
      [productId]: parsedValue
    }));
  }

  const handleRedeem = async (product) => {
    const quantity = quantityInputs[product._id] || 0;

    const totalRequiredPoints = quantity * product.required_points;
    
    if(totalRequiredPoints > recordData.points) {
      alert('Not Enough Points to Redeem Product');
      return;
    }

    const reqBody = {
      record_id: recordData._id,
      last_name: recordData.last_name,
      product_id: product._id,
      points_cost: totalRequiredPoints
    }
    
    try {
      const response = await fetch(`${url}/swap`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(reqBody),
        credentials: 'include'
      })

      if(!response.ok) {
        const errData = await response.json();
        throw new Error(`${response.status}: ${response.statusText} ${errData.error}`);
      }

      const data = await response.json();
      alert(`${data.message}: Current Points: ${recordData.points - totalRequiredPoints}`);
      handleFindRecord();
      setQuantityinputs(prev => ({
        ...prev,
        [product._id]: 0
      }))
    } catch (error) {
      alert(error)
    }
  }

  return (
    <section className="flex flex-col gap-3">
      <div>
        <h1 className="font-bold text-2xl tracking-wide">Swap Items</h1>
      </div>

      <form 
        className="flex flex-col gap-3 items-start justify-start"
        onSubmit={(e) => {
          e.preventDefault();
          handleFindRecord();
        }}
      >
        <p>Enter informations</p>

        <div className="flex flex-col gap-5 w-full">
          <input
            type="text"
            name="record_id"
            placeholder="Record ID"
            required
            className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md"
            value={formField.record_id}
            onChange={(e) => {
              setFormField(prev => ({
                ...prev,
                record_id: e.target.value
              }))
            }}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            className="p-2 bg-gray-1 placeholder:text-gray-2 rounded-md"
            value={formField.last_name}
            onChange={(e) => {
              setFormField(prev => ({
                ...prev,
                last_name: e.target.value
              }))
            }}
          />
        </div>

        <button className="bg-forest text-white py-2 w-3/5 px-3 self-center sm:self-start sm:w-2/5 sm:max-w-44 rounded-md hover:bg-forest-hover">
          Find Record
        </button>
      </form>
      
      {recordData && <div className="flex flex-col gap-5">
        <div id="record_information" className="px-5 py-8 bg-white rounded-md shadow-lg sm:self-start">
          <h1 className="font-bold text-xl mb-3">Record Information</h1>

          <section className="flex flex-col sm:flex-row justify-between sm:justify-start items-start gap-5 sm:gap-20">
            <div className="flex flex-col gap-1 font-medium">
              <p>Record ID: <span>{recordData?._id}</span></p>
              <p>Name: <span>{formatName(recordData)}</span></p>
              <p>Address: <span>{recordData?.address}</span></p>
              <p>Contact: <span>{recordData?.contact}</span></p>
            </div>

            <div className="flex flex-col gap-2 w-full sm:w-auto text-white bg-forest rounded-md p-3 items-center">
              <p>Available Points:</p>
              <p className="font-bold">{recordData.points}</p>
            </div>
          </section>
        </div>

        <button className="bg-forest text-white py-2 w-3/5 px-3 self-center sm:self-start sm:w-2/5 sm:max-w-44 rounded-md hover:bg-forest-hover" onClick={(e) => {
          setFilteredProducts(products.filter(product => product.required_points < recordData.points));
          setConfirmRecord(true)
          }}>Confirm Record</button>
      </div>}

      {confirmRecord && <div id="available_products" className="bg-white p-5 rounded-md shadow-lg flex flex-col">
        <h1 className="font-bold text-base sm:text-xl mb-3">{filteredProducts.length <=0 && 'No '}Available Products for Points: </h1>

        <section id="product_container" className="grid grid-cols-1 start justify-items-center sm:justify-items-start sm:grid-cols-2 gap-5">
          {filteredProducts.map(product => (
            <div className="bg-forest px-4 py-4 xs:max-w-[300px] sm:max-w-[450px] rounded-md w-full" key={product._id}>
              <div className="flex xs:flex-row gap-3 mb-2">
                <div className="bg-white shrink-0 p-2 rounded-md">
                  <img src={`${url}/images/${product.image}`} alt="product img" className="h-16 w-20 sm:h-20 sm:w-24 p-2 bg-gray-1 rounded-md"/>
                </div>

                <div className="flex flex-col justify-start gap-0.5 h-full text-xs md:text-sm text-white grow">
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-sm md:text-base">
                <label htmlFor="quantity" className="flex items-center gap-2 font-medium grow mt-auto text-white">
                  <span>Quantity: </span>
                  <input 
                    type="number" 
                    placeholder="0" 
                    min="0"
                    className="w-14 placeholder:text-center bg-transparent border-b border-b-white text-center outline-none background-none" 
                    value={quantityInputs[product._id] || ''}
                    onChange={(e) => {
                      handleQuantityInputs(product._id, e.target.value)
                    }}
                  />
                </label>

                <div className="flex items-center text-white justify-between text-xs md:text-base">
                  <p className="">{product.required_points} points</p>
                  <button className="font-medium py-0.5 px-4 rounded-md bg-white text-forest self-end" onClick={() => handleRedeem(product)}>Redeem</button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>}
    </section>
  )
};

export default EcoSwap;
