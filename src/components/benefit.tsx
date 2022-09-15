type BenefitProps = {
  title: string;
};

const Benefit = (props: BenefitProps) => (
  <div className="text-center py-8 border-2 border-black rounded-md">
    {props.title}
  </div>
);

export { Benefit };
