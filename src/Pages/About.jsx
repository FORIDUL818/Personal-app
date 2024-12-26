import React from "react";

const About = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          I am a passionate full-stack developer with expertise in the MERN stack. I love solving complex problems and crafting clean, maintainable code.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <p>2+ years working on web development projects, focusing on delivering scalable solutions.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <p>JavaScript, React, Node.js, Express, MongoDB, Tailwind CSS, Git, and more.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
            <p>Exploring new technologies, blogging, and contributing to open-source projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
