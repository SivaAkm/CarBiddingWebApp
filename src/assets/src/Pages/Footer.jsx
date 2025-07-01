import "../css/Footer.css";
const Footer = () => {
  return (
    <footer className="bg-[#494C4C] text-white py-8 px-4 overflow-hidden Footer_main">


      <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-6">
        <div className="Footer_col">
          <h4 className="font-bold mb-2 w-[148px] h-[26px]">Get to Know Us</h4>
          <ul className="space-y-1">
            <li className="Footer_link">About Us</li>
            <li className="Footer_link">Our History</li>
            <li className="Footer_link">Galaxy Global</li>
            <li className="Footer_link">How VB3 Works</li>
            <li className="Footer_link">Community</li>
            <li className="Footer_link">Member News</li>
            <li className="Footer_link">Galaxy Reviews</li>
            <li className="Footer_link">Careers</li>
            <li className="Footer_link">Press Releases</li>
            <li className="Footer_link">Investor Relations</li>
          </ul>
        </div>

        <div className="Footer_col">


          <h4 className="font-bold mb-2 w-[135px] h-[26px]">Find a Vehicle</h4>
          <ul className="space-y-1">
            <li className="Footer_link">Vehicle Finder</li>
            <li className="Footer_link">Sales List</li>
            <li className="Footer_link">Watchlist</li>
            <li className="Footer_link">Saved Searches</li>
            <li className="Footer_link">Vehicle Alerts</li>
            <li className="Footer_link">Search by Make & Model</li>
          </ul>
        </div>

        <div className="Footer_col">
          <h4 className="font-bold mb-2 w-[87px] h-[26px]">Auctions</h4>
          <ul className="space-y-1">
            <li className="Footer_link">Today's Auctions</li>
            <li className="Footer_link">Auctions Calendar</li>
            <li className="Footer_link">Join Auction</li>
            <li className="Footer_link">Night Cap Sales</li>
            <li className="Footer_link">Rental Auctions</li>
            <li className="Footer_link">Bank-Repo Auctions</li>
            <li className="Footer_link">Select Auctions</li>
          </ul>
        </div>

        <div className="Footer_col">
          <h4 className="font-bold mb-2 w-[83px] h-[26px]">Services</h4>
          <ul className="space-y-1">
            <li className="Footer_link">Brokers</li>
            <li className="Footer_link">Inspectors</li>
            <li className="Footer_link">Vehicle Reports</li>
            <li className="Footer_link">Industry Links</li>
            <li className="Footer_link">Shipping</li>
            <li className="Footer_link">Tow Providers</li>
            <li className="Footer_link">International Buyers</li>
          </ul>
        </div>

        <div className="Footer_col">
          <h4 className="font-bold mb-2 w-[130px] h-[26px]">Support</h4>
          <ul className="space-y-1">
            <li className="Footer_link">How to Buy</li>
            <li className="Footer_link">Common Questions</li>
            <li className="Footer_link">Glossary of Terms</li>
            <li className="Footer_link">Resource Center</li>
            <li className="Footer_link">Help With Licensing</li>
            <li className="Footer_link">Videos</li>
            <li className="Footer_link">Member Fees</li>
            <li className="Footer_link">Member Mobile</li>
            <li className="Footer_link">Seller Mobile</li>
          </ul>
        </div>

        <div className="Footer_col">
          <h4 className="font-bold mb-2">Connect with us</h4>
          <div className="flex space-x-2 mb-2">
            <img src="Facebook.png" alt="fb" className="Footer_icon" />
            <img src="Linkedin.png" alt="li" className="Footer_icon" />
            <img src="Instagram.png" alt="ig" className="Footer_icon" />
             
          </div>
          <div className="flex space-x-2">
            <img src="Youtube.png" alt="yt" className="Footer_icon" />
            <img src="Blog.png" alt="blog" className="Footer_icon" /></div>
          <h4 className="font-bold mb-0 py-6">Download the App</h4>
          <div className="flex space-x-2 ">
            <img src="AppStore.png" alt="appstore" className="Footer_appicon" />
            <img src="GooglePlay.png" alt="playstore" className="Footer_appicon" />
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-xs text-gray-300 Footer_bottom">
     
        <p className="copyright">
          <span className="">Copyright @ 2024 Galaxy Inc. All Rights Reserved </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
          <a href="#">Site Map</a> &nbsp;  <a href="#">Contact Us</a>  &nbsp; <a href="#">Sell a Vehicle</a>
           <a href="#">Terms of Service</a>   &nbsp; <a href="#">Privacy Policy</a>   &nbsp; <a href="#">Copyright</a>    &nbsp; 
           <a href="#">Terms & Conditions</a>  &nbsp; <a href="#">Cookie Policy</a>        
        </p>
      </div>
    </footer>
  );
};

export default Footer;
