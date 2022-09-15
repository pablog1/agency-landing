import { Benefit } from '../components/benefit';

const Benefits = () => {
  return (
    <section className="relative c-container">
      <div className="h2 text-center mt-6 mb-4 p-5">Our benefits</div>
      <div className="grid grid-cols-5 gap-4 relative text-black">
        <Benefit title="First benefit" />
        <Benefit title="Second benefit" />
        <Benefit title="More benefits" />
        <Benefit title="More benefits.." />
        <Benefit title="Last benefit" />
      </div>
    </section>
  );
};

export { Benefits };
