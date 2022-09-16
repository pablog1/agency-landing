import React, { useEffect, useState } from 'react';

import Image from 'next/image';

// function to detect if an alement is on the viewport
const isInViewport: any = (elem: any) => {
  const bounding = elem.getBoundingClientRect();

  return (
    bounding.top >= 0 - elem.offsetHeight &&
    bounding.bottom <= window.innerHeight + elem.offsetHeight * 2
  );
};

const OurClients = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(offset + window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  if (typeof window !== 'undefined') {
    // Client-side-only code
    const scrollElement =
      document.querySelector<HTMLElement>('.scroll-animation')!;
    if (isInViewport(scrollElement)) {
      // Do something...
      const bounding = scrollElement.getBoundingClientRect();
      const offset2 = bounding.top;
      scrollElement.style.marginLeft = `${offset2 - window.innerHeight}px`;
    }
  }

  return (
    <section className="relative bg-primary-400 p-8">
      <div className="c-container h2 text-center mt-6 mb-4 p-5 !text-white">
        Our Clients
      </div>
      <div className="w-full relative text-black overflow-hidden whitespace-nowrap ">
        <ul className=" whitespace-nowrap w-full scroll-animation">
          <li className="w-80 inline mx-4">
            <Image
              layout="fixed"
              className="object-center object-cover pointer-events-none"
              src="/assets/images/team_member.jpg"
              alt="pp"
              width="300px"
              height="300px"
            />
          </li>
          <li className="w-80 inline mx-4">
            <Image
              layout="fixed"
              className="object-center object-cover pointer-events-none"
              src="/assets/images/team_member.jpg"
              alt="pp"
              width="300px"
              height="300px"
            />
          </li>
          <li className="w-80 inline mx-4">
            <Image
              layout="fixed"
              className="object-center object-cover pointer-events-none"
              src="/assets/images/team_member.jpg"
              alt="pp"
              width="300px"
              height="300px"
            />
          </li>
          <li className="w-80 inline mx-4">
            <Image
              layout="fixed"
              className="object-center object-cover pointer-events-none"
              src="/assets/images/team_member.jpg"
              alt="pp"
              width="300px"
              height="300px"
            />
          </li>
          <li className="w-80 inline mx-4">
            <Image
              layout="fixed"
              className="object-center object-cover pointer-events-none"
              src="/assets/images/team_member.jpg"
              alt="pp"
              width="300px"
              height="300px"
            />
          </li>
          <li className="w-80 inline mx-4">
            <Image
              layout="fixed"
              className="object-center object-cover pointer-events-none"
              src="/assets/images/team_member.jpg"
              alt="pp"
              width="300px"
              height="300px"
            />
          </li>
          <li className="w-80 inline mx-4">
            <Image
              layout="fixed"
              className="object-center object-cover pointer-events-none"
              src="/assets/images/team_member.jpg"
              alt="pp"
              width="300px"
              height="300px"
            />
          </li>
          <li className="w-80 inline mx-4">
            <Image
              layout="fixed"
              className="object-center object-cover pointer-events-none"
              src="/assets/images/team_member.jpg"
              alt="pp"
              width="300px"
              height="300px"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export { OurClients };
