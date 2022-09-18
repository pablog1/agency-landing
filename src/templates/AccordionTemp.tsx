import { SetStateAction, useState } from 'react';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import Image from 'next/image';

/*
let stories: {
  title: string;
  content: string;
};
*/
const AccordionTemp = ({ stories }: any) => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <section className="c-container mt-12 py-8 bg-primary-500">
        <div className="mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-2/5 lg:mr-20 relative">
            <Image
              className="object-center object-conver pointer-events-none"
              src="/assets/images/box.jpg"
              alt="FAQ"
              width="800"
              height="600"
            />
          </div>
          <div className="w-full lg:w-3/5">
            {stories.map((story: any, index: number) => {
              return (
                <Accordion open={open === index} key={index}>
                  <AccordionHeader
                    onClick={() => handleOpen(index)}
                    className="text-white hover:text-white text-left"
                  >
                    {story.title}
                  </AccordionHeader>
                  <AccordionBody className="text-white">
                    <p> {story.content}</p>
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export { AccordionTemp };
