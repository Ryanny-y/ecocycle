// pages/EcoSwapPage.jsx
import { useContext, useState } from "react";
import ProductCategory from "../../components/ui/main/ProductCategory";
import useScrollTop from "../../utils/hooks/useScrollTop";
import { ProductContext } from '../../utils/contexts/ProductProvider';

const agricultureItems = [
  {
    id: "agri-1",
    image: "imgStore/okra.jpg",
    title: "Okra",
    description: "A green pod vegetable that is rich in vitamins and minerals.",
    points: 25,
  },
  {
    id: "agri-2",
    image: "imgStore/cabbage.jpg",
    title: "Cabbage",
    description: "A leafy green vegetable that is low in calories",
    points: 25,
  },
  {
    id: "agri-3",
    image: "imgStore/eggplant.jpg",
    title: "Eggplant",
    description: "A purple vegetable that is rich in fiber and antioxidants.",
    points: 25,
  },
  {
    id: "agri-4",
    image: "imgStore/squash.jpg",
    title: "Pumpkin",
    description:
      "A round orange vegetable that is rich in vitamins and minerals.",
    points: 25,
  },
];

const nonAgricultureItems = [
  {
    id: "nonagri-1",
    image: "imgStore/rag.jpg",
    title: "Rag",
    description: "A piece of cloth that is used for cleaning",
    points: 25,
  },
  {
    id: "nonagri-2",
    image: "imgStore/glassjar.jpg",
    title: "Glass jar",
    description: "A container made of glass that is used for storing food.",
    points: 25,
  },
  {
    id: "nonagri-3",
    image: "imgStore/container.jpg",
    title: "Container",
    description: "A receptacle for holding liquids or solids.",
    points: 25,
  },
  {
    id: "nonagri-4",
    image: "imgStore/clothbag.jpg",
    title: "Cloth bag",
    description: "A bag made of cloth that is used for carrying items.",
    points: 25,
  },
];

const MainEcoswap = () => {


  useScrollTop();

  const { products } = useContext(ProductContext)
  
  const agriCultureProducts = products.filter(product => product.category === 'crops');
  const nonAgriCultureProducts = products.filter(product => product.category === 'non_agriculture');

  return (
    <main className="flex flex-col w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full mt-3 mb-3">
          <img
            src="/logos/ecoswap.png"
            alt="eco-swap background"
            className="h-auto w-40"
          />
          <p className="text-center text-[#4a814e] text-md px-2.5 sm:text-xl md:text-2xl lg:text-2xl">
            One person's past is another's future.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start justify-center w-full md:flex-row gap-10 mb-3">
          <ProductCategory
            title="Agriculture"
            bgColor="bg-[#4a814e]"
            items={agriCultureProducts}
          />
          <ProductCategory
            title="Non-agriculture"
            bgColor="bg-[#695223]"
            items={nonAgriCultureProducts}
          />
        </div>
      </div>
    </main>
  );
};

export default MainEcoswap;
