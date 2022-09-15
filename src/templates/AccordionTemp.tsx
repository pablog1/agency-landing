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
      <section className="c-container mt-12">
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
      </section>
    </>
  );
};
export { AccordionTemp };
