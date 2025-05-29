import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
  FaList,
  FaUserFriends,
  FaUpload,
  FaChartLine,
  FaPlus,
} from "react-icons/fa";

const Sidebar = () => {
  const links = [
    { to: "/", label: "Hackathon Listing", icon: <FaList /> },
    { to: "/my-hackathons", label: "My Hackathons", icon: <FaUserFriends /> },
    { to: "/teams", label: "Teams", icon: <FaUserFriends /> },
    {
      to: "/project-submission",
      label: "Project Submission",
      icon: <FaUpload />,
    },
    { to: "/post-hackathon", label: "Past Hackathon" },
  ];

  return (
    <div className="w-64 bg-[#0f172a] text-white min-h-screen p-4">
      <h2 className="text-lg font-semibold mb-4">
        <NavLink to="/" className="flex justify-start items-center gap-4">
          <IoMdArrowRoundBack />
          Back to dashboard
        </NavLink>
      </h2>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-3 my-1 rounded-lg ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >
          {link.icon}
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
