import React, { useEffect, useState } from 'react';

import Image from 'next/image';

// function to detect if an alement is on the viewport
const isInViewport: any = (elem: any) => {
  if (elem != null) {
    const bounding = elem.getBoundingClientRect();

    return (
      bounding.top >= 0 - elem.offsetHeight &&
      bounding.bottom <= window.innerHeight + elem.offsetHeight * 2
    );
  }
  return null;
};

const OurClients = ({ content }: any) => {
  const { clients } = content;
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
    <section className="relative bg-primary-400 mt-16 pt-6 pb-12">
      <div className="c-container h2 text-center mt-6 mb-4 p-5 pb-8 !text-white">
        {content.heading}
      </div>
      <div className="w-full relative text-black overflow-hidden whitespace-nowrap ">
        <ul className=" whitespace-nowrap w-full scroll-animation">
          {Object.keys(clients).map((keyName, i) => (
            <li key={i} className="w-40 md:w-80 inline mx-4">
              <Image
                className="object-center object-cover pointer-events-none"
                src={`/${clients[keyName].image}`}
                alt={clients[keyName].alt_text}
                width="300"
                height="300"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { OurClients };
