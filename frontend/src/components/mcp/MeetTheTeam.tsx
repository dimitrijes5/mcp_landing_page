import { cn } from '@/lib/utils';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio?: string;
}

interface MeetTheTeamProps {
  members: TeamMember[];
}

export function MeetTheTeam({ members }: MeetTheTeamProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                {member.bio && (
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 