import { NavLink, useLocation, useParams } from "react-router-dom";
import HackathonCard from "../components/HackathonCard";
import { IoMdArrowRoundBack } from "react-icons/io";

const formatDate = (dateStr) => {
  if (!dateStr) return "N/A";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "N/A";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

const HackathonDetails = () => {
  const location = useLocation();
  const { title } = useParams();
  const hackathon = location.state;

  if (!hackathon) {
    return (
      <p className="text-center mt-10 text-red-500">No hackathon data found.</p>
    );
  }

  return (
    <div className="p-6">
      <NavLink to="/">
        <div className="flex items-center gap-2 bg-blue-500 w-fit px-4 py-2 rounded-md text-white font-medium cursor-pointer">
          <IoMdArrowRoundBack />
          Back
        </div>
      </NavLink>

      <h1 className="text-3xl font-bold my-6">{hackathon.title || "N/A"}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <HackathonCard {...hackathon} showButton={false} />
          {hackathon.description && (
            <p className="mt-4 text-gray-700">{hackathon.description}</p>
          )}
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Info</h2>
          <ul className="text-sm text-gray-800 space-y-1">
            <li>
              <strong>Start Date:</strong> {formatDate(hackathon.startDate)}
            </li>
            <li>
              <strong>End Date:</strong> {formatDate(hackathon.endDate)}
            </li>
            <li>
              <strong>Location:</strong> {hackathon.location || "N/A"}
            </li>
            <li>
              <strong>Organizer:</strong> {hackathon.organizer?.name || "N/A"}
            </li>
            <li>
              <strong>Contact:</strong> {hackathon.organizer?.email || "N/A"}
            </li>
            <li>
              <strong>Registration Deadline:</strong>{" "}
              {formatDate(hackathon.registrationDeadline)}
            </li>
            <li>
              <strong>Announcement Date:</strong>{" "}
              {formatDate(hackathon.announcementDate)}
            </li>
          </ul>
          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
            Register
          </button>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
        <div className="space-y-4">
          {[
            [
              "Registrations Open",
              hackathon.registrationDeadline + " (Deadline)",
            ],
            ["Hackathon Start", hackathon.startDate],
            ["Hackathon End", hackathon.endDate],
            ["Winners Announced", hackathon.announcementDate],
          ].map(([label, date], idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-blue-600 mt-1" />
              <div>
                <p className="font-medium">{label}</p>
                <p className="text-sm text-gray-500">{formatDate(date)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {hackathon.eligibility && hackathon.eligibility.length > 0 ? (
            hackathon.eligibility.map((item, idx) => <li key={idx}>{item}</li>)
          ) : (
            <li>No eligibility criteria provided.</li>
          )}
        </ul>
      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Prizes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {hackathon.prizes && hackathon.prizes.length > 0 ? (
            hackathon.prizes.map((prize, idx) => (
              <div
                key={idx}
                className="bg-yellow-100 p-4 rounded-lg text-center shadow"
              >
                <h3 className="text-xl font-bold text-yellow-600">
                  {prize.title}
                </h3>
                <p className="text-lg mt-2 font-semibold">${prize.amount}</p>
                <p className="text-sm mt-1">{prize.description}</p>
              </div>
            ))
          ) : (
            <p>No prizes listed.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HackathonDetails;
