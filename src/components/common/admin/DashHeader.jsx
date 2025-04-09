
const DashHeader = () => {
  return (
    <header className="flex items-center justify-between gap-5">
      <label id="search-bar" className="border border-gray-700 grow rounded-2xl flex items-center gap-2 px-4" htmlFor="search">
        <box-icon name='search'></box-icon>
        <input id="search" type="text" placeholder="Search" className="py-2 w-full rounded-2xl outline-none bg-transparent"/>
      </label>

      <div className="account">
        Account
      </div>
    </header>
  )
};

export default DashHeader;
