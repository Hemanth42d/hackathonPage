import img from "../../public/display.jpg";
const postHackathons = [
  {
    title: "AI Innovation Challenge",
    banner: img,
    dates: "April 1 - April 5, 2025",
    participants: 180,
    teams: 45,
    winners: [
      { place: 1, team: "Neural Ninjas", prize: "$3000" },
      { place: 2, team: "SmartCoders", prize: "$2000" },
      { place: 3, team: "DataStorm", prize: "$1000" },
    ],
    status: "Completed",
  },
  {
    title: "Blockchain Build-Off",
    banner: img,
    dates: "Feb 15 - Feb 20, 2025",
    participants: 120,
    teams: 30,
    winners: [
      { place: 1, team: "BlockBeats", prize: "$2500" },
      { place: 2, team: "CryptoWizards", prize: "$1500" },
      { place: 3, team: "ChainHackers", prize: "$800" },
    ],
    status: "Completed",
  },
];

const PostHackathonsPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-10">Past Hackathons</h1>

      <div className="grid gap-8">
        {postHackathons.map((hackathon, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow overflow-hidden"
          >
            <img
              src={hackathon.banner}
              alt={hackathon.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-semibold">{hackathon.title}</h2>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                  {hackathon.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{hackathon.dates}</p>
              <div className="flex flex-wrap gap-6 mb-6">
                <div>
                  <p className="text-gray-500 text-sm">Participants</p>
                  <p className="font-bold text-lg">{hackathon.participants}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Teams</p>
                  <p className="font-bold text-lg">{hackathon.teams}</p>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">🏆 Winners</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {hackathon.winners.map((winner) => (
                    <div
                      key={winner.place}
                      className="bg-gray-100 p-4 rounded-lg text-center"
                    >
                      <p className="text-yellow-500 text-xl font-bold">
                        {winner.place === 1
                          ? "🥇"
                          : winner.place === 2
                          ? "🥈"
                          : "🥉"}
                      </p>
                      <p className="font-semibold mt-1">{winner.team}</p>
                      <p className="text-sm text-gray-600">{winner.prize}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button className="bg-[#f9d59f] mt-4 p-2 rounded-md text-black cursor-pointer">
                View Project Gallery
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostHackathonsPage;
