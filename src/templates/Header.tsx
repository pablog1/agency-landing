import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import Image from 'next/image';
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
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />

      <Sidebar>
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
      <section className="bg-black text-white relative z-10">
        <div className="c-container text-center">TopBar</div>
      </section>
      <section
        className={classNames(
          'transition duration-300  sticky top-0 w-full bg-white background z-10',
          {
            'header-padding-small': offset > 0,
            'header-padding-big': offset === 0,
          }
        )}
      >
        <style jsx>
          {`
            .header-padding-big {
              padding: 1rem 0;
              transition: 300ms ease;
            }
            .header-padding-small {
              padding: 0.3rem 0;
              transition: 300ms ease;
            }
          `}
        </style>
        <div className="">
          <Image
            src="/assets/images/pixelated_background.png"
            objectFit="cover"
            layout="fill"
            quality={65}
            alt=""
            className="background"
          />
        </div>

        <div className="c-container">
          <NavbarTwoColumns
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
                <a>New page</a>
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
      </section>
    </>
  );
};

export { Header };
