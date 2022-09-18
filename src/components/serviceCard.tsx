import Image from 'next/image';

type ServiceCardProps = {
  title: string;
  subtitle: string;
  src: string;
  alt: string;
};

const ServiceCard = (props: ServiceCardProps) => (
  <div className="text-center py-8 w-10/12 w-xl:w-80 mx-8 mb-20 shadow-md shadow-primary-400 relative flex justify-center bg-gray-100">
    <div className="mx-auto h-16 w-60 flex justify-center absolute -top-10">
      <Image
        layout="fill"
        className="object-center object-contain pointer-events-none"
        src={props.src}
        alt={props.alt}
      />
    </div>
    <div className="px-3">
      <p className="font-bold">{props.title}</p>
      <p>{props.subtitle}</p>
    </div>
  </div>
);

export { ServiceCard };
