import { Button } from '@material-tailwind/react';
import Image from 'next/image';

const NewsletterSignup = () => (
  <section className="flex flex-col lg:flex-row justify-center items-center p-4 bg-black">
    <div className="pb-2">
      <Image
        className="object-center invert"
        src="/img/newsletter.svg"
        alt="Newsletter"
        height={40}
        width={40}
      />
    </div>

    <p className="font-bold text-center !text-white mb-4 lg:mb-0 lg:px-6 ">
      Subscribe to our Newsletter
    </p>
    <div className="flex flex-row justify-center ">
      <form>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="h-full rounded-md mr-2 outline-none placeholder:text-gray-600 pl-4 md:min-w-[300px]"
        ></input>
      </form>
      <Button className="bg-primary-500  text-base">Join</Button>
    </div>
  </section>
);

export { NewsletterSignup };
