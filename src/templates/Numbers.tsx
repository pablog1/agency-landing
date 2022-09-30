import { Number } from '../components/number';

const Numbers = ({ content }: any) => {
  console.log(content);
  return (
    <section className="relative c-container mt-16">
      <div className="flex flex-col md:flex-row items-center justify-center relative text-black">
        {Object.keys(content.benefits).map((keyName, i) => (
          <Number key={i} alt="xxxx" />
        ))}
      </div>
    </section>
  );
};

export { Numbers };
