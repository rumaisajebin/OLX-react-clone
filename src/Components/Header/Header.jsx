import React from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo.jsx';
import Search from '../../assets/Search.jsx';
import Arrow from '../../assets/Arrow.jsx';
import SellButton from '../../assets/SellButton.jsx';
import SellButtonPlus from '../../assets/SellButtonPlus.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../store/FirebaseContext.jsx';

function Header() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv px-5">
        <div className="brandName cursor-pointer">
          <Link to='/'>
            <OlxLogo></OlxLogo>
          </Link>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" className='ml-3 font-semibold' defaultValue="Tapu Basti, Bambooflat" />
          <div className='cursor-pointer'>
            <Arrow></Arrow>
          </div>
        </div>
        <div className="productSearch border border-gray-900 focus:border-teal-500">
          <div className="input mx-3">
            <input
              className='h-[30px] mt-2'
              type="text"
              placeholder="Find Cars, Mobile Phones and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language cursor-pointer">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        {user?.email ? (
          <div>
            <div onClick={handleLogout} className="loginPage">
              <span>Log Out</span>
              <hr />
            </div>
          </div>
        ) : (
          <div>
            <div className="loginPage">
              <Link to='/signin'>
                <span>Sign In</span>
                <hr />
              </Link>
            </div>
          </div>
        )}

        <div className="sellMenu mr-4">
          <Link to='/create'>
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span className='-mt-1'>SELL</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
