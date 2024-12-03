import React from 'react';

const timelineEvents = [
  {
    time: "09:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address and introduction to ROCS"
  },
  {
    time: "10:00 AM",
    title: "Keynote Session",
    description: "AI in Modern Research by Dr. Sarah Mitchell"
  },
  {
    time: "11:30 AM",
    title: "Panel Discussion",
    description: "Future of Computer Science Research"
  },
  {
    time: "02:00 PM",
    title: "Workshop Sessions",
    description: "Hands-on research methodology workshop"
  },
  {
    time: "04:00 PM",
    title: "Networking Session",
    description: "Connect with speakers and fellow researchers"
  }
];

export default function Timeline() {
  return (
    <section className="py-24 bg-white" id="agenda">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Event Timeline</h2>
        <div className="max-w-3xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-8 pb-8 group">
              <div className="absolute left-0 top-0 w-1 h-full bg-blue-200 group-last:h-0">
                <div className="absolute w-4 h-4 rounded-full bg-blue-500 -left-1.5 group-hover:scale-125 transition-transform" />
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <span className="text-blue-600 font-semibold">{event.time}</span>
                <h3 className="text-xl font-bold mt-1">{event.title}</h3>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}