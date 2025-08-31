import React from "react";

const customers = [
  {
    name: "Donald Jackman",
    role: "Graphic Designer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    review:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "Richard Nelson",
    role: "Content Creator",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    review:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "James Washington",
    role: "Co-founder",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    review:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
];

const StarIcon = () => (
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
      fill="#FF532E"
    />
  </svg>
);

const HappyCustomer = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
        OUR HAPPY CUSTOMERS
      </h1>
      <div className="flex md:flex-row flex-col items-center justify-center gap-8">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="w-80 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center border border-gray-200 p-8 rounded-2xl"
          >
            <img
              className="h-20 w-20 rounded-full border-4 border-gray-100 shadow-sm"
              src={customer.image}
              alt={customer.name}
            />
            <h2 className="text-lg text-gray-900 font-semibold mt-4">
              {customer.name}
            </h2>
            <p className="text-sm text-gray-500">{customer.role}</p>

            <div className="flex items-center justify-center mt-3 gap-1">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} />
                ))}
            </div>

            <p className="text-center text-[15px] mt-4 text-gray-600 leading-relaxed">
              {customer.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyCustomer;


