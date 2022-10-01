import { useState, ReactNode, useEffect } from 'react';

import classNames from 'classnames';
import Image from 'next/image';

type INavbarProps = {
  children: ReactNode;
  logo: string;
  siteName: string;
  backgroundColor: string;
};
const Sidebar = (props: INavbarProps) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <nav
        className={`${
          offset > 0 ? `header-small` : `header-big`
        }  c-container bg-[#ffffff80] w-full fixed z-30 flex md:hidden mobile`}
      >
        <button
          id="nav-icon"
          className={isActive ? 'open' : ''}
          onClick={toggleClass}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="logo relative w-[172px] h-[62px]">
          <Image
            src={`/${props.logo}`}
            objectFit="fill"
            layout="fill"
            alt="Logo"
            className=""
          />
        </div>
      </nav>

      <div
        className={classNames(
          'left-[-160vw] w-[80vw] bg-gray-200  p-10 pl-6 text-white fixed h-full z-40 ease-in-out duration-300',
          {
            'header-small-menu': offset > 0,
            'header-big-menu': offset === 0,
            'translate-x-[160vw]': showSidebar === true,
            'translate-x-full': showSidebar === false,
          }
        )}
      >
        <ul
          className="text-2xl font-semibold text-black"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {props.children}
        </ul>
      </div>
      <style jsx>
        {`
          #nav-icon {
            width: 40px;
            height: 30px;
            position: relative;
            margin: 10px 10px 0 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: 0.5s ease-in-out;
            -moz-transition: 0.5s ease-in-out;
            -o-transition: 0.5s ease-in-out;
            transition: 0.5s ease-in-out;
            cursor: pointer;
          }

          #nav-icon span {
            display: block;
            position: absolute;
            height: 6px;
            width: 100%;
            background: #000;
            border-radius: 6px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: 0.25s ease-in-out;
            -moz-transition: 0.25s ease-in-out;
            -o-transition: 0.25s ease-in-out;
            transition: 0.25s ease-in-out;
          }

          #nav-icon span:nth-child(1) {
            top: 0px;
            -webkit-transform-origin: left center;
            -moz-transform-origin: left center;
            -o-transform-origin: left center;
            transform-origin: left center;
          }

          #nav-icon span:nth-child(2) {
            top: 12px;
            -webkit-transform-origin: left center;
            -moz-transform-origin: left center;
            -o-transform-origin: left center;
            transform-origin: left center;
          }

          #nav-icon span:nth-child(3) {
            top: 24px;
            -webkit-transform-origin: left center;
            -moz-transform-origin: left center;
            -o-transform-origin: left center;
            transform-origin: left center;
          }

          #nav-icon.open span:nth-child(1) {
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
            top: -3px;
            left: 8px;
          }

          #nav-icon.open span:nth-child(2) {
            width: 0%;
            opacity: 0;
          }

          #nav-icon.open span:nth-child(3) {
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
            top: 24px;
            left: 8px;
          }

          .header-big {
            padding-top: 1.8rem;
            transition: 150ms ease;
          }
          .header-small {
            padding-top: 0.5rem;
            transition: 150ms ease;
            background-color: ${props.backgroundColor};
            transition: background-color 1s ease;
          }

          nav {
          }

          .header-big-menu {
            top: 5.2rem;
            transition: 150ms ease;
          }
          .header-small-menu {
            top: 3.9rem;
            transition: 150ms ease;
          }
          ul {
            @apply list-none;
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;
