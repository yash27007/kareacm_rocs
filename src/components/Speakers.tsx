import SpeakerCard from './SpeakerCard';
import Speaker1 from '../assets/Speaker1.jpg';
import Speaker2 from '../assets/Speaker2.jpg';
import Speaker3 from '../assets/Speaker3.jpg';

const speakers = [
  {
    name: "Dr. Krithika Ramaswamy",
    // role: "Research Director",
    organization: "IIT Palakad",
    image: Speaker1,  
    topic: "AI in Modern Research: Opportunities and Challenges"
  },
  {
    name: "Dr. Sandeep Charan",
    // role: "Research Director",
    organization: "IIT Madras",
    image: Speaker2,  
    topic: "AI in Modern Research: Opportunities and Challenges"
  },
  {
    name: "Dr. Chandrashekar Lakshminarayanan",
    // role: "Research Director",
    organization: "IIT Palakad",
    image: Speaker3,  
    topic: "AI in Modern Research: Opportunities and Challenges"
  },
];

export default function Speakers() {
  return (
    <section className="py-24 bg-gray-50" id="speakers">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}
