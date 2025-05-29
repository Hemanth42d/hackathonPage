import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HackathonListing from "./Pages/HackathonListing";
import HackathonDetails from "./Pages/HackathonDetails";
import MyHackathons from "./Pages/MyHackathons";
import ProjectSubmission from "./Pages/ProjectSubmission";
import Teams from "./Pages/Teams";
import PostHackathons from "./Pages/PostHackathon";
import CreateTeam from "./Pages/CreateTeam";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<HackathonListing />} />
            <Route path="/hackathon/:id" element={<HackathonDetails />} />
            <Route
              path="/my-hackathons"
              element={<MyHackathons userId={"6837d42415efdaa63c48e2f3"} />}
            />
            <Route path="/project-submission" element={<ProjectSubmission />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/create-team" element={<CreateTeam />} />
            <Route path="/post-hackathon" element={<PostHackathons />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
