
const Home = () => {
    const posts = [
        {
          title: "Understanding React Hooks",
          description: "An introduction to hooks in React with examples.",
          date: "December 20, 2024",
        },
        {
          title: "JavaScript ES2024 Features",
          description: "Explore the latest features in modern JavaScript.",
          date: "December 15, 2024",
        },
        {
          title: "Tailwind CSS Tips",
          description: "Tips to maximize productivity using Tailwind CSS.",
          date: "December 10, 2024",
        },
      ];
      
    return (
        <div>
         <section className="py-20 bg-gray-100 dark:bg-gray-900 text-[#fff]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Blog</h2>
        <p className="text-lg mb-6">
          Sharing insights, ideas, and experiences on web development, programming, and technology.
        </p>
        <button className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded">
          Read More
        </button>
      </div>
    </section>

    <section className="py-12" id="posts">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">Recent Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            >
              <h4 className="text-xl font-bold mb-2">{post.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {post.date}
              </p>
              <p className="mb-4">{post.description}</p>
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default Home;