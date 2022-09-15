import Image from 'next/image';

type LogoProps = {
  src: string;
  alt: string;
};

const Logo = (props: LogoProps) => (
  <div className="text-center py-12 border-2 border-black rounded-md relative">
    <Image
      layout="fill"
      className="object-center object-contain pointer-events-none"
      src={props.src}
      alt={props.alt}
    />
  </div>
);

export { Logo };
