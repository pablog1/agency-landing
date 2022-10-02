import Image from 'next/image';

type IBackgroundProps = {
  src: string;
  alt: string;
};

const BackgroundImage = (props: IBackgroundProps) => (
  <Image
    layout="fill"
    className="object-center object-cover pointer-events-none brightness-[0.4]"
    src={props.src}
    alt={props.alt}
  />
);

export { BackgroundImage };
