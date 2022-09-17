import Image from 'next/image';
import Link from 'next/link';

import Sidebar from '../components/sidebar';
import { Meta } from '../layout/Meta';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Header = () => (
  <>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Sidebar>
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
    <section className="fixed top-0 z-10 w-full bg-white pb-6 background">
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
      <div className="bg-black text-white relative z-10">
        <div className="c-container text-center">TopBar</div>
      </div>
      <div className="c-container pt-6">
        <NavbarTwoColumns
          logo={<Logo xl textColor="text-black" iconColor="text-black" />}
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
    <section className="mt-[122px]"></section>
    <style jsx>
      {`
        background {
          flex: 0 0 290px;
          height: 190px;
          position: relative;
          background-size: cover;
          background-repeat: repeat;
          background-position: center center;
        }
      `}
    </style>
  </>
);

export { Header };
