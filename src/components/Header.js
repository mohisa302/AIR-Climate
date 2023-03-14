import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AiOutlineLeft, AiFillAudio, AiFillSetting } from 'react-icons/ai';

const Header = () => {
  const location = useLocation();
  // const dispatch = useDispatch();
  // const menu = useSelector((state) => state.menu.menuBar);

  const navLinks = [
    {
      id: 1,
      name: 'Home',
      link: '/',
    },
    {
      id: 2,
      name: 'Details',
      link: '/Details',
    },
  ];

  const activeLink = location.pathname === '/'
    ? '/'
    : location.pathname.split('').slice(1).join('');

  return (
    <header className="w-full border-b bg-[#ec4c8b]">

      <div className="gap-x-4 text-blue-500 sm:flex">
        {navLinks.map((link) => (
          <NavLink
            to={link.link}
            key={link.id}
          />
        ))}
      </div>
      <div className="flex items-center py-3 text-white justify-between gap-x-2 mx-1">
        {activeLink === '/'
            && (
              <h3 className="ml-[9rem] whitespace-nowrap"> average Temps </h3>
            )}
        {activeLink === 'Details'
            && (
            <>
              <Link to="/">
                <AiOutlineLeft />
              </Link>
              <h3> town/city Temp</h3>
            </>
            )}
        <div className="flex">
          <Link to="/">
            <AiFillAudio className="mr-4" />
          </Link>
          <Link to="/Details">
            <AiFillSetting />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
