import { useState } from "react";

const CreateTeam = () => {
  const currentUser = {
    name: "Priya Sharma",
    email: "priya@example.com",
  };

  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState([currentUser]);
  const [teamLeadEmail, setTeamLeadEmail] = useState(currentUser.email);
  const [newMemberEmail, setNewMemberEmail] = useState("");

  const handleAddMember = () => {
    if (!newMemberEmail || members.length >= 3) return;

    const isDuplicate = members.some((m) => m.email === newMemberEmail);
    if (isDuplicate) return alert("Member already added");

    const newMember = {
      name: newMemberEmail.split("@")[0],
      email: newMemberEmail,
    };

    setMembers([...members, newMember]);
    setNewMemberEmail("");
  };

  const handleRemoveMember = (email) => {
    const updated = members.filter((m) => m.email !== email);
    setMembers(updated);

    if (email === teamLeadEmail && updated.length > 0) {
      setTeamLeadEmail(updated[0].email);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (members.length < 1 || !teamName) {
      return alert("Please fill all required fields.");
    }
    console.log({
      teamName,
      teamLead: teamLeadEmail,
      members,
    });
    alert("Team created successfully!");
    // Here, post to backend
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Create a Team</h1>

      <div className="bg-white rounded-2xl shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Add member by email"
              value={newMemberEmail}
              onChange={(e) => setNewMemberEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              disabled={members.length >= 3}
            />
            <button
              type="button"
              onClick={handleAddMember}
              disabled={members.length >= 3}
              className="bg-blue-400 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Add
            </button>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Team Members</h2>
            <ul className="space-y-3">
              {members.map((member) => (
                <li
                  key={member.email}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-medium">
                      {member.name}{" "}
                      {member.email === teamLeadEmail && (
                        <span className="text-sm text-blue-600">(Lead)</span>
                      )}
                    </p>
                    <p className="text-sm text-gray-500">{member.email}</p>
                  </div>
                  {member.email !== currentUser.email && (
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => handleRemoveMember(member.email)}
                        className="text-sm text-white bg-red-400 px-3 py-1 rounded-md cursor-pointer"
                      >
                        Remove
                      </button>
                      {member.email !== teamLeadEmail ? (
                        <button
                          type="button"
                          onClick={() => setTeamLeadEmail(member.email)}
                          className="text-sm text-black bg-amber-200 rounded-md p-1 cursor-pointer"
                        >
                          Make Lead
                        </button>
                      ) : members.length > 1 ? (
                        <button
                          type="button"
                          onClick={() => {
                            const otherMember = members.find(
                              (m) => m.email !== member.email
                            );
                            if (otherMember)
                              setTeamLeadEmail(otherMember.email);
                          }}
                          className="text-sm text-black bg-amber-200 cursor-pointer p-1 rounded-md"
                        >
                          Remove Lead
                        </button>
                      ) : null}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md w-full cursor-pointer"
          >
            Create Team
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTeam;
