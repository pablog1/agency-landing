import { useState, ReactNode, useEffect } from 'react';

type INavbarProps = {
  children: ReactNode;
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
  return (
    <>
      {showSidebar ? (
        <button
          className={`${
            offset > 30 ? `header-small` : `header-big`
          } transition duration-300  flex text-5xl  text-primary-400 items-center cursor-pointer fixed left-[23px] z-50 `}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className={`${
            offset > 30 ? `header-small` : `header-big`
          } fill-primary-400 md:hidden fixed z-30 flex items-center cursor-pointer left-4 top-14`}
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 left-[-160vw] w-[80vw] bg-gray-200  p-10 pl-6 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? 'translate-x-[160vw] ' : 'translate-x-full'
        }`}
      >
        <ul className="mt-20 text-2xl font-semibold text-black">
          {props.children}
        </ul>
      </div>
      <style jsx>
        {`
          .header-big {
            top: 2.8rem;
            transition: 150ms ease;
          }
          .header-small {
            top: 0.5rem;
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
