import Image from 'next/image';

type LogoProps = {
  src: string;
  alt: string;
};

const Logo = (props: LogoProps) => (
  <div className="text-center p-4 border-2 border-black rounded-md relative">
    <Image
      className="object-center object-contain pointer-events-none"
      src={props.src}
      alt={props.alt}
      width="400"
      height="200"
    />
  </div>
);

export { Logo };
