import { TeamMember } from '../components/teammember';

const Team = ({ team }: any) => {
  return (
    <section className="relative c-container mb-16">
      <div className="h2 text-center mt-6 mb-4 p-5">Our Team</div>
      <div className="grid grid-cols-4 gap-12 relative text-black max-w-4xl mx-auto">
        {team.map((member: any, index: number) => {
          return (
            <TeamMember
              key={index}
              name={member.name}
              src={member.src}
              role={member.role}
            />
          );
        })}
      </div>
    </section>
  );
};

export { Team };
