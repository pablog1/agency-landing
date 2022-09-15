import Image from 'next/image';

type TemMemberProps = {
  src: string;
  name: string;
  role: string;
};

const TeamMember = (props: TemMemberProps) => (
  <>
    <div className="text-center py-4 relative flex flex-col items-center bg-blue-gray-50">
      <div className="relative w-32 h-32  border-2 border-black rounded-full mb-4">
        <Image
          layout="fill"
          className="object-center object-cover  rounded-full "
          src={props.src}
          alt={props.name}
          role={props.role}
        />
      </div>
      <h3>{props.name}</h3>
      <h5>{props.role}</h5>
    </div>
  </>
);

export { TeamMember };
