import KARE_ACM_Logo from "../assets/KARE_ACM_LOGO.png";
import ACM_India_Logo from "../assets/ACM_India.png";
import KARE from "../assets/Kalasalingam_Academy_of_Research_and_Education_logo.png";
const organizers = [
  {
    name: "KARE ACM Student Chapter",
    logo: KARE_ACM_Logo,
    type: "organizer"
  },
  {
    name: "ACM India",
    logo: ACM_India_Logo,
    type: "organizer"
  },
  {
    name: "Kalasalingam Academy of Research and Education",
    logo: KARE,
    type: "organizer"
  }
];

// const sponsors = [
//   {
//     name: "TechCorp",
//     logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=400",
//     type: "sponsor"
//   },
//   {
//     name: "InnovateAI",
//     logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=400",
//     type: "sponsor"
//   },
//   {
//     name: "DataSystems",
//     logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=400",
//     type: "sponsor"
//   }
// ];

export default function Sponsors() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">Organized By</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {organizers.map((org) => (
                <div 
                  key={org.name}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <img 
                    src={org.logo} 
                    alt={org.name} 
                    className="h-24 w-auto mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{org.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* <div>
            <h2 className="text-4xl font-bold text-center mb-12">Our Sponsors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sponsors.map((sponsor) => (
                <div 
                  key={sponsor.name}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="h-24 w-auto mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{sponsor.name}</h3>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}