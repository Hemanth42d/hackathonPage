import React, { useEffect, useState } from "react";
import HackathonCard from "../components/HackathonCard";

const MyHackathons = ({ userId }) => {
  const [registeredHackathons, setRegisteredHackathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRegisteredHackathons() {
      try {
        const response = await fetch(`/user/${userId}/registered-hackathons`);
        if (!response.ok)
          throw new Error("Failed to fetch registered hackathons");
        const data = await response.json();
        setRegisteredHackathons(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchRegisteredHackathons();
  }, [userId]);

  if (loading) return <div>Loading registered hackathons...</div>;

  if (registeredHackathons.length === 0)
    return <div>No registered hackathons found.</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Registered Hackathons</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {registeredHackathons.length > 0 ? (
          registeredHackathons.map((hackathon) => (
            <HackathonCard
              key={hackathon._id}
              title={hackathon.title}
              date={hackathon.date}
              location={hackathon.location}
              image={hackathon.image}
              showButton={true}
            />
          ))
        ) : (
          <div>No registered hackathons found.</div>
        )}
      </div>
    </div>
  );
};

export default MyHackathons;
