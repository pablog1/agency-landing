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
};

const Header = (props: HeaderProps) => {
  const [offset, setOffset] = useState(0);
  const [offsetColors, setOffsetColors] = useState(0);
  const [headerBackground, setHeaderBackground] = useState('#ffffff20');

  function generateRandomIntegerInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const headerBackgroundJsx = '#ffffff90';

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
      // random background color
      if (Math.abs(offsetColors - offset) > 400) {
        setOffsetColors(window.pageYOffset);
        const value = generateRandomIntegerInRange(1, 4);

        switch (value) {
          case 1:
            setHeaderBackground('#d9d9fdf0');
            break;
          case 2:
            setHeaderBackground('#f4d9fdf0');
            break;
          case 3:
            setHeaderBackground('#d9fdf3f0');
            break;
          case 4:
            setHeaderBackground('#fdead9f0');
            break;

          default:
            setHeaderBackground('#ffffff20');
        }
      }
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

      <Sidebar
        logo={props.logo}
        siteName={props.siteName}
        backgroundColor={headerBackground}
      >
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/newpage">
            <a>New page</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </Sidebar>
      <section className="">
        <div className="bg-black text-white relative z-30">
          <div className="c-container text-center z-20 ">
            Shopify Custom Development
          </div>
        </div>
        <div
          className={classNames(
            'transition duration-300  w-full bg-[#ffffff80] hidden md:block fixed top-0 z-10',
            {
              'header-padding-small': offset > 0,
              'header-padding-big': offset === 0,
            }
          )}
        >
          <style jsx>
            {`
              .header-padding-big {
                padding: 2rem 0 1rem;
                transition: 300ms ease;
                background-color: #ffffff90;
              }
              .header-padding-small {
                padding: 0;
                transition: 300ms ease;
                background-color: ${headerBackgroundJsx};
                transition: background-color 1s ease;
              }
            `}
          </style>
          <div className="c-container">
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
              <li className="z-10">
                <Link href="/newpage">
                  <a>New page - {headerBackground};</a>
                </Link>
              </li>
              <li className="z-10">
                <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
                  <a>GitHub</a>
                </Link>
              </li>
              <li className="z-10">
                <Link href="/">
                  <a>Sign in</a>
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
