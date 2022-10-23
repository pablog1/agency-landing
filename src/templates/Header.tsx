import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import Link from 'next/link';

import Sidebar from '../components/sidebar';
import { Meta } from '../layout/Meta';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

type HeaderProps = {
  logo: string;
  siteName: string;
  topBar: string;
};

const Header = (props: HeaderProps) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };

    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />

      <Sidebar logo={props.logo} siteName={props.siteName}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#case-studies">
            <a>Our Work</a>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/#footerContactForm">
            <a>Contact</a>
          </Link>
        </li>
      </Sidebar>
      <section className="test">
        <div className="bg-white text-black relative z-30 topbar">
          <div className="c-container text-center z-20 ">{props.topBar}</div>
        </div>
        <div
          className={classNames(
            'transition duration-300  w-full hidden md:block fixed top-0 z-10',
            {
              'header-padding-small': offset > 2,
              'header-padding-big': offset <= 2,
            }
          )}
        >
          <style jsx>
            {`
              .header-padding-big {
                padding: 2rem 0 1rem;
                transition: 300ms ease;
                background-color: #000000;
              }
              .header-padding-small {
                padding: 0;
                transition: 300ms ease, background-color 1s ease;
                background-color: #ffffff;
              }
            `}
          </style>
          <div className="c-container desktop-header">
            <NavbarTwoColumns
              offset={offset}
              logo={
                <Logo
                  xl
                  textColor="text-black"
                  iconColor="text-black"
                  logo={props.logo}
                  siteName={props.siteName}
                />
              }
            >
              <li className="z-10 hover:bg-red-500 hover:text-white duration-1000 p-1 rounded-md">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="z-10 hover:bg-blue-500 hover:text-white duration-1000 p-1 rounded-md">
                <Link href="/#case-studies">
                  <a>Our Work</a>
                </Link>
              </li>
              <li className="z-10 hover:bg-orange-500 hover:text-white duration-1000 p-1 rounded-md">
                <Link href="/#about">
                  <a>About</a>
                </Link>
              </li>
              <li className="z-10 hover:bg-yellow-500 hover:text-white duration-1000 p-1 rounded-md">
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li className="z-10 hover:bg-green-500 hover:text-white duration-1000 p-1 rounded-md">
                <Link href="/#footerContactForm">
                  <a>Contact</a>
                </Link>
              </li>
            </NavbarTwoColumns>
          </div>
        </div>
      </section>
    </>
  );
};

export { Header };
