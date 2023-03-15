import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AiOutlineLeft, AiFillSetting } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { changeCat } from '../redux/slices/categorySlice';

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ category: false, search: false });
  const activeLink = location.pathname === '/'
    ? '/'
    : location.pathname.split('').slice(1).join('');

  const geerHandler = (e) => {
    if (e.target.value.toLowerCase() === 'all') dispatch(changeCat({ all: true, country: false }));
    else dispatch(changeCat({ country: true, all: false }));
  };

  const searchHandler = (e) => {
    console.log(e.target.value);
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

  return (
    <header className="w-full border-b bg-[#210479]">

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
        {activeLink !== '/'
            && (
            <>
              <Link to="/">
                <AiOutlineLeft />
              </Link>
              <h3> town/city Temp</h3>
            </>
            )}
        <div className="flex items-center">
          {filter.category && (activeLink === '/') && (
          <input
            type="text"
            onChange={searchHandler}
            className="text-black w-28"
            placeholder="Search..."
          />
          )}
          <Link to="/">
            <FaSearch
              className="mr-4 ml-2 cursor-pointer scale-100 hover:scale-125 ease-in duration-500"
              onClick={() => setFilter((pre) => ({ search: pre.search, category: !pre.category }))}
            />
          </Link>
          {filter.search && (activeLink === '/') && (
            <select
              onChange={geerHandler}
              className="text-black"
              data-te-select-init
              data-te-select-placeholder="Select category"
            >
              <option selected>Select category</option>
              {['All', 'Country'].map((c) => <option className="text-sm" id={`${c}`} value={c} key={c}>{c}</option>)}
            </select>
          )}
          {activeLink === '/' && (
            <AiFillSetting role="tab" className="ml-1 cursor-pointer hover:animate-spin" onClick={() => setFilter((pre) => ({ search: !pre.search, category: pre.category }))} />
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
