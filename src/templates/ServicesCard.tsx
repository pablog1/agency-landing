import { ServiceCard } from '../components/serviceCard';

const Services = ({ content }: any) => {
  const { service } = content;
  return (
    <section className="relative c-container">
      <div className="flex flex-col xl:flex-row justify-center items-center relative text-black mt-28">
        {Object.keys(service).map((keyName, i) => (
          <li key={i} className="w-11/12 inline mx-4">
            <ServiceCard
              title={service[keyName].heading}
              subtitle={service[keyName].subheading}
              src={`/${service[keyName].image}`}
              alt={service[keyName].alt_text}
            />
          </li>
        ))}
      </div>
    </section>
  );
};

export { Services };
