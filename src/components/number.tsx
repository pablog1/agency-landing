import Image from 'next/image';

type NumberProps = {
  title: string;
  src: string;
  alt: string;
};

const Number = (props: NumberProps) => (
  <div className="text-center py-8 w-60 mx-8 text-5xl font-bold text-primary-400">
    {props.title}
    <div className="text-center py-12 relative">
      <Image
        layout="fill"
        className="object-center object-contain pointer-events-none"
        src={props.src}
        alt={props.alt}
      />
    </div>
  </div>
);

export { Number };
