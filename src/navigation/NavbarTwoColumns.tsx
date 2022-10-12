import { ReactNode } from 'react';

import classNames from 'classnames';
import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
  offset: number;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center min-h[80px]">
    <div
      className={classNames(
        'pl-20 md:pl-0 z-10 hidden md:block brightness-0 invert logo',
        {
          'logo-small': props.offset > 0,
        }
      )}
    >
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul className="navbar hidden md:flex items-center font-bold text-base text-gray-800 z-20">
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .logo-small {
          transform: scale(0.5);
          -webkit-transform-origin-x: left;
        }
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
