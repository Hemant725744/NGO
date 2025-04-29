import React from "react";
import "../styles/People.css";

const team = [
  {
    name: "Sarah Johnson",
    role: "Executive Director",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    description:
      "With over 15 years in international development, Sarah brings strategic vision and passionate leadership.",
  },
  {
    name: "Michael Chen",
    role: "Program Director",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    description:
      "Michael specializes in developing innovative solutions for complex humanitarian challenges.",
  },
  {
    name: "Amara Okafor",
    role: "Community Engagement Manager",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    description:
      "Amara's expertise in community-led development ensures our projects are truly responsive to local needs.",
  },
];

const People = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
        <p className="text-base text-purple-primary font-semibold tracking-wide uppercase">
            Our Team
          </p>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The People Behind Our Mission
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our diverse team brings expertise, passion, and dedication to every project.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={person.image}
                  alt={person.role}
                />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">{person.name}</h3>
              <p className="text-[#7E69AB]">{person.role}</p>
              <p className="mt-2 text-base text-gray-500">{person.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default People;