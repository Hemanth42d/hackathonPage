import React, { useState } from "react";

const ProjectSubmission = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: "",
    repoLink: "",
    demoLink: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation or API logic here
    console.log("Submitted Project:", form);
    alert("Project submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#333]">
        Submit Your Project 🚀
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium">
            Project Title
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows="5"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Tech Stack</label>
          <input
            type="text"
            name="techStack"
            placeholder="e.g. React, Node.js, MongoDB"
            value={form.techStack}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">
              GitHub Repo Link
            </label>
            <input
              type="url"
              name="repoLink"
              value={form.repoLink}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Live Demo Link (optional)
            </label>
            <input
              type="url"
              name="demoLink"
              value={form.demoLink}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Upload Files (PDF, Images)
          </label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="w-full p-2 bg-white border border-gray-300 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="bg-[#f9d59f] text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-200 cursor-pointer"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default ProjectSubmission;
