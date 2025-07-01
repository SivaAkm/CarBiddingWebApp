import "../css/Header.css";

const Header = () => {
  return (
    <header>
      <div className="flex flex-wrap items-center justify-between md:justify-around px-4 sm:px-8 md:px-16 lg:px-32 py-4 gap-4 md:gap-8 lg:gap-16 shadow-sm bg-white">
        {/* Search section */}
        <div className="flex flex-wrap flex-auto justify-end gap-2 sm:flex-row">
          <input
            type="text"
            className="Search_box text-sm w-auto sm:w-auto md:w-auto "
            placeholder="Search Inventory by Make, Model, VIN, and More..."
          />
          <button className="Search_btn flex items-center justify-center">
            <img src="image.png" alt="search" className="Search_img w-4 h-4" />
          </button>
        </div>

        {/* Header details */}
        <ul className="headerDetails flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5 text-sm text-gray-800">
          <li className="flex items-center gap-1">
            <img src="XMLID_5691_.png" className="usa_img w-6 h-6" alt="USA flag" />
            <span>USA</span>
          </li>
          <img src="RecLine.png" alt="|" className="recline hidden sm:inline" />
          <li className="flex items-center gap-1">
            <select className="vector_img"><option>English</option></select>
            {/* <span>English</span>
            <img src="Vector.png" className="vector_img w-2" alt="dropdown" /> */}
          </li>
          <img src="RecLine.png" alt="|" className="recline hidden sm:inline" />
          <li className="flex items-center gap-1">
            <button className="flex flex-row gap-2">
            <span>REGISTER</span>
            <img src="Register.png" className="register_img w-4 h-3" alt="register icon" /></button>
          </li>
          <li className="flex items-center gap-1 text-[#E2952D] font-medium">
            <button className="flex flex-row gap-2">
            <span>SIGN IN</span>
            <img src="Login.png" className="login_img w-4 h-4" alt="login icon" /></button>
          </li>
        </ul>
      </div>

      <nav className="navbar bg-[#01AA45] px-2 sm:px-4 md:px-8 py-2 sm:py-3 text-white text-xs sm:text-sm flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6">
          <a href="#" className="hover:underline cursor-pointer">HOW IT WORKS</a>
          <a href="#" className="hover:underline cursor-pointer">INVENTORY ▾</a>
          <a href="#" className="hover:underline cursor-pointer">AUCTIONS ▾</a>
          <a href="#" className="hover:underline cursor-pointer">LOCATIONS</a>
          <a href="#" className="hover:underline cursor-pointer">SERVICES & SUPPORT ▾</a>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
          <button className="text-[#FFFFFF] border border-white px-2 sm:px-3 py-1 w-auto sm:w-[138px] h-[36px] rounded-[4px]">
            HELP CENTER
          </button>
          <button className="bg-[#E2952D] text-[#FFFFFF] px-2 sm:px-3 py-1 w-auto sm:w-[138px] h-[36px] rounded-[4px]">
            SELL YOUR CAR ▾
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
