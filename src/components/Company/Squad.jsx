// import React from "react";
// import GM from "../../Assets/gm_bw.jpg";
// import Lawyer from "../../Assets/lawyer.jpg";
// import cto from "../../Assets/cto_bw.jpg";
// import dev from "../../Assets/marcus2.jpg";

// function Squad() {
//   return (
//     <>
//       <div className="w-full py-16 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//               Our Leadership Team
//             </h2>
//           </div>

//           {/* Cards Grid */}
//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {/* GM Card */}
//             <div
//               className="group relative h-96 bg-cover bg-center p-12 shadow-sm border border-blue-500 hover:shadow-xl transition-all duration-500 overflow-hidden"
//               style={{ backgroundImage: `url(${GM})` }}
//             >
//               {/* Hover effect - desktop only */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-[#43BAFF]/50 w-full relative top-44 h-1/2 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-6 rounded-lg md:opacity-0"></div>
//               </div>

//               {/* Mobile content - always visible */}
//               <div className="md:hidden absolute bottom-0 left-0 right-0 bg-[#43BAFF]/50 p-4 text-center">
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   RRIAN AGWARI
//                 </h3>
//                 <p className="text-white text-m">General Manager</p>
//               </div>

//               {/* Desktop content - visible on hover */}
//               <div className="hidden md:block absolute inset-0  items-center justify-center">
//                 <div className="w-full relative top-56 h-1/2 flex flex-col items-center justify-center p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <h3 className="text-xl font-bold text-center text-white mb-2">
//                     RRIAN AGWARI
//                   </h3>
//                   <p className="text-center leading-relaxed text-white text-m">
//                     General Manager
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* CTO Card */}
//             <div
//               className="group relative h-96 bg-cover bg-center p-12 shadow-sm border border-blue-500 hover:shadow-xl transition-all duration-500 overflow-hidden"
//               style={{ backgroundImage: `url(${cto})` }}
//             >
//               {/* Hover effect - desktop only */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-[#43BAFF]/50 w-full relative top-44 h-1/2 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-6 rounded-lg md:opacity-0"></div>
//               </div>

//               {/* Mobile content - always visible */}
//               <div className="md:hidden absolute bottom-0 left-0 right-0 bg-[#43BAFF]/50 p-4 text-center">
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   GRIFFINS OSERO
//                 </h3>
//                 <p className="text-white text-m">Chief Technology Officer</p>
//               </div>

//               {/* Desktop content - visible on hover */}
//               <div className="hidden md:block absolute inset-0  items-center justify-center">
//                 <div className="w-full relative top-56 h-1/2 flex flex-col items-center justify-center p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <h3 className="text-xl font-bold text-center text-white mb-2">
//                     GRIFFINS OSERO
//                   </h3>
//                   <p className="text-center leading-relaxed text-white text-m">
//                     Chief Technology Officer
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Lawyer Card */}
//             <div
//               className="group relative h-96 bg-cover bg-center p-12 shadow-sm border border-blue-500 hover:shadow-xl transition-all duration-500 overflow-hidden"
//               style={{ backgroundImage: `url(${Lawyer})` }}
//             >
//               {/* Hover effect - desktop only */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-[#43BAFF]/50 w-full relative top-44 h-1/2 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-6 rounded-lg md:opacity-0"></div>
//               </div>

//               {/* Mobile content - always visible */}
//               <div className="md:hidden absolute bottom-0 left-0 right-0 bg-[#43BAFF]/50 p-4 text-center">
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   PETER O. OTIENO
//                 </h3>
//                 <p className="text-white text-m">Advocate</p>
//               </div>

//               {/* Desktop content - visible on hover */}
//               <div className="hidden md:block absolute inset-0 items-center justify-center">
//                 <div className="w-full relative top-56 h-1/2 flex flex-col items-center justify-center p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <h3 className="text-xl font-bold text-center text-white mb-2">
//                     PETER O. OTIENO
//                   </h3>
//                   <p className="text-center leading-relaxed text-white text-m">
//                     Advocate
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Dev Card */}
//             <div
//               className="group relative h-96 bg-cover bg-center p-12 shadow-sm border border-blue-500 hover:shadow-xl transition-all duration-500 overflow-hidden md:col-start-2"
//               style={{ backgroundImage: `url(${dev})` }}
//             >
//               {/* Background Image on Hover - now reduced in size */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-[#43BAFF]/50 w-full relative top-44 h-1/2 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-6 rounded-lg md:opacity-0"></div>
//               </div>

//               {/* Content - Always visible on mobile, hidden on desktop until hover */}
//               <div className="md:hidden absolute bottom-0 left-0 right-0 bg-[#43BAFF]/50 p-4 text-center">
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   MARCUS EZRA
//                 </h3>
//                 <p className="text-white text-m">Director of Creative Design</p>
//               </div>

//               {/* Content - Hidden on mobile, visible on desktop hover */}
//               <div className="hidden md:block absolute inset-0 items-center justify-center">
//                 <div className="w-full relative top-56 h-1/2 flex flex-col items-center justify-center p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <h3 className="text-xl font-bold text-center text-white mb-2">
//                     MARCUS EZRA
//                   </h3>
//                   <p className="text-center leading-relaxed text-white text-m">
//                     Director of Creative Design
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Squad;
import React, { useState, useEffect } from "react";
import axios from "axios";

function Squad() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          "https://kangaroobackend.onrender.com/api/team"
        );
        setTeam(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team data:", error);
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            Our Leadership Team
          </h2>
          <p>Loading team members...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Our Leadership Team
          </h2>
          <h3>
            Meet the leadership team from KSL that help Government agencies and
            private businesses elevate their value through custom software
            development, product design, QA and consultancy services.
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => {
            // Determine if this is the last item and needs centering
            const isLastItem = index === team.length - 1;
            const shouldCenter = isLastItem && team.length % 3 !== 0;

            return (
              <div
                key={index}
                className={`group relative h-96 bg-cover bg-center p-12 shadow-sm border border-blue-500 hover:shadow-xl transition-all duration-500 overflow-hidden ${
                  shouldCenter ? "md:col-start-2 lg:col-start-auto" : ""
                }`}
                style={{ backgroundImage: `url(${member.image_url})` }}
              >
                {/* Hover effect - desktop only */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#43BAFF]/50 w-full relative top-44 h-1/2 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-6 rounded-lg md:opacity-0"></div>
                </div>

                {/* Mobile content - always visible */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 bg-[#43BAFF]/50 p-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-white text-m">{member.position}</p>
                </div>

                {/* Desktop content - visible on hover */}
                <div className="hidden md:block absolute inset-0 items-center justify-center">
                  <div className="w-full relative top-56 h-1/2 flex flex-col items-center justify-center p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-xl font-bold text-center text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-center leading-relaxed text-white text-m">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Squad;
