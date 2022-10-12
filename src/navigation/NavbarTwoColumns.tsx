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
      className={classNames('pl-20 md:pl-0 z-10 hidden md:block logo', {
        'logo-small': props.offset > 0,
      })}
    >
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul
        className={classNames(
          'navbar hidden md:flex items-center font-bold text-base text-white z-20',
          {
            c_invert: props.offset > 0,
          }
        )}
      >
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .logo {
          filter: invert(1) brightness(100);
        }
        .c_invert {
          filter: invert(0) brightness(0);
        }
        .logo-small {
          filter: invert(0) brightness(0);
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
