
const services = [
  {
    title: "Web Development",
    description: "Building modern, responsive websites and applications.",
    icon: "🌐",
  },
  {
    title: "API Integration",
    description: "Seamlessly connecting systems using secure APIs.",
    icon: "🔗",
  },
  {
    title: "Database Management",
    description: "Designing and managing efficient, scalable databases.",
    icon: "🗄️",
  },
];

const ServicePage = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">My Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
