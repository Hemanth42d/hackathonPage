import { useState, useEffect } from "react";
import HackathonCard from "../components/HackathonCard";

const HackathonListing = () => {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const res = await fetch("/api/hackathons");
        if (!res.ok) throw new Error("Failed to fetch hackathons");
        const data = await res.json();
        setHackathons(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchHackathons();
  }, []);

  if (loading) return <p>Loading hackathons...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upcoming Hackathons</h1>
      <input
        type="text"
        placeholder="Search for hackathons..."
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg"
      />
      <div className="grid md:grid-cols-3 gap-6">
        {hackathons.map((hackathon) => (
          <HackathonCard key={hackathon._id} {...hackathon} showButton={true} />
        ))}
      </div>
    </div>
  );
};

export default HackathonListing;
