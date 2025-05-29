import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Teams = () => {
  const navigate = useNavigate();

  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Code Crusaders",
      hackathon: "AI Innovation Challenge 2025",
      leader: "Priya Sharma",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Bug Smashers",
      hackathon: "Future Web Hack 2025",
      leader: "Amit Patel",
      status: "Recruiting",
    },
    {
      id: 3,
      name: "Syntax Ninjas",
      hackathon: "NextGen DevFest",
      leader: "Fatima Noor",
      status: "Full",
    },
  ]);

  const handleJoinTeam = (teamId) => {
    alert(`Request sent to join team ID ${teamId}`);
  };

  const handleNavigateToCreateTeam = () => {
    navigate("/create-team");
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Hackathon Teams</h1>
        <button
          onClick={handleNavigateToCreateTeam}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          + Create Team
        </button>
      </div>
      <div className="space-y-6">
        {teams.map((team) => (
          <div
            key={team.id}
            className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{team.name}</h2>
              <p className="text-gray-600 mb-1">Hackathon: {team.hackathon}</p>
              <p className="text-gray-600 mb-1">Team Lead: {team.leader}</p>
              <p className="text-gray-600 mb-4">
                Status:{" "}
                <span
                  className={`font-semibold ${
                    team.status === "In Progress"
                      ? "text-green-600"
                      : team.status === "Full"
                      ? "text-gray-500"
                      : "text-yellow-500"
                  }`}
                >
                  {team.status}
                </span>
              </p>
            </div>
            <button
              onClick={() => handleJoinTeam(team.id)}
              className={`bg-blue-400 text-white p-2 rounded-md cursor-pointer ${
                team.status === "Full" ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={team.status === "Full"}
            >
              {team.status === "Full" ? "Team Full" : "Join Team"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
