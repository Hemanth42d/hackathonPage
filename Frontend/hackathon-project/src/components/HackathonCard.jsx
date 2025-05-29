import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HackathonCard = (hackathon) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/hackathon/${encodeURIComponent(hackathon.title)}`, {
      state: hackathon,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {" "}
      <img
        src={hackathon.image}
        alt={hackathon.title}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h2 className="text-lg font-semibold">{hackathon.title}</h2>     {" "}
      <p className="text-sm text-gray-600">
        {new Date(hackathon.startDate).toLocaleDateString()} •{" "}
        {hackathon.location}{" "}
      </p>{" "}
      {hackathon.showButton && (
        <button
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
          onClick={handleViewDetails}
        >
          View Details{" "}
        </button>
      )}{" "}
    </div>
  );
};

export default HackathonCard;
