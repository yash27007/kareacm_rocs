

interface SpeakerProps {
  name: string;
  role?: string;
  organization: string;
  image:string;
  topic: string;
}

export default function SpeakerCard({ name, role, organization, image, topic }: SpeakerProps) {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-blue-600 mb-2">{role}</p>
        <p className="text-gray-600 text-sm mb-4">{organization}</p>
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-800 font-medium">Speaking on:</p>
          <p className="text-gray-700">{topic}</p>
        </div>
      </div>
    </div>
  );
}