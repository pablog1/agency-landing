import { SetStateAction, useState } from 'react';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

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
      <section className="c-container mt-12 bg-primary-400">
        <div className="max-w-3xl mx-auto flex flex-row">
          <div className="bg-red-100 h-36 w-2/5 mr-20 mt-20">
            images images images
          </div>
          <div className="w-3/5">
            {stories.map((story: any, index: number) => {
              return (
                <Accordion open={open === index} key={index}>
                  <AccordionHeader onClick={() => handleOpen(index)}>
                    {story.title}
                  </AccordionHeader>
                  <AccordionBody>{story.content}</AccordionBody>
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
