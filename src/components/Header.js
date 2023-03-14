import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AiOutlineLeft, AiFillAudio, AiFillSetting } from 'react-icons/ai';
import { countyName } from './data';
import { changeCat } from '../redux/slices/categorySlice';

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // const { categories } = useSelector((state) => state.categories);
  const [search, setSearch] = useState('false');
  const geerHandler = (e) => {
    if (e.target.value.toLowerCase() !== 'all') dispatch(changeCat({ all: true, country: false }));
    else dispatch(changeCat({ country: true, all: false }));
  };

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
    <header className="w-full border-b bg-[#6e44eb]">

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
              <h3 className="whitespace-nowrap"> average Temps </h3>
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
        <div className="flex items-center">
          <Link to="/">
            <AiFillAudio className="mr-4" />
          </Link>
          <div>
            <AiFillSetting onClick={() => setSearch((prev) => !prev)} />
          </div>
          {search && (
            <select
              onChange={geerHandler}
              className="text-black"
            >
              <option value="" className="w-2 text-sm">Select category</option>
              {countyName.map((c) => <option value={c} key={c}>{c}</option>)}
            </select>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
