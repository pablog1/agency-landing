import Image from 'next/image';

type LogoProps = {
  src: string;
  alt: string;
};

const Logo = (props: LogoProps) => (
  <div className="text-center p-2  rounded-md relative bg-white">
    <Image
      className="object-center object-contain pointer-events-none"
      src={props.src}
      alt={props.alt}
      objectFit="contain"
      width="207"
      height="75"
    />
  </div>
);

export { Logo };
