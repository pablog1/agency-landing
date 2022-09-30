import { Number } from '../components/number';

const Numbers = ({ content }: any) => {
  return (
    <section className="relative c-container mt-16">
      <div className="flex flex-col md:flex-row items-center justify-center relative text-black">
        {Object.keys(content.numbers).map((keyName, i) => (
          <Number
            key={i}
            title={`+${content.numbers[keyName].number}`}
            src={`/${content.numbers[keyName].image}`}
            alt={content.numbers[keyName].name}
          />
        ))}
      </div>
    </section>
  );
};

export { Numbers };
