import React from 'react';

import { Button } from '@material-tailwind/react';
import Image from 'next/image';

/*
u=568090c8f03bb2376ff3c4b73
id=d414d8b3dd
https://digital.us21.list-manage.com/subscribe/post

         type="email"
              name="MERGE0"
              id="MERGE0"
*/

const NewsletterSignup = () => {
  return (
    <section className="flex flex-col justify-center items-center  p-6 bg-black">
      <div className="pb-2 ">
        <Image
          className="object-center invert"
          src="/img/newsletter.svg"
          alt="Newsletter"
          height={40}
          width={40}
        />
      </div>

      <p className="font-bold text-center !text-white mb-4 lg:mt-3 lg:px-6 ">
        Subscribe to our Newsletter
      </p>
      <div>
        <div className="newsletter flex flex-row justify-center ">
          <form
            action="https://digital.us21.list-manage.com/subscribe/post"
            method="POST"
          >
            <input type="hidden" name="u" value="568090c8f03bb2376ff3c4b73" />
            <input type="hidden" name="id" value="d414d8b3dd"></input>
            <input
              placeholder="Enter your email"
              type="email"
              name="MERGE0"
              id="MERGE0"
              className="h-full rounded-md mr-2 outline-none placeholder:text-gray-600 pl-4 md:min-w-[300px]"
            />
            <Button type="submit" className="bg-primary-500  text-base">
              Join mailchimp
            </Button>
          </form>
        </div>
        <div className="news-feedback text-white font-bold mt-4 text-center ">
          We will only send you good stuff!
        </div>
      </div>
    </section>
  );
};

export { NewsletterSignup };
