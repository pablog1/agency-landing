import { useState, ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};
const Sidebar = (props: INavbarProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-5xl  text-primary-400 items-center cursor-pointer fixed left-[23px] top-[32px] z-50 "
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fill-primary-400 md:hidden fixed z-30 flex items-center cursor-pointer left-4 top-14"
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
        <style jsx>
          {`
            ul {
              @apply list-none;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Sidebar;
