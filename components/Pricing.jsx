import React from "react";

const plans = [
  {
    name: "Free",
    price: "$0/mo",
    description: "Basic features included",
    features: ["Basic video uploads", "Limited analytics", "Community support"],
    isPopular: false,
  },
  {
    name: "Start",
    price: "$19/mo",
    description: "More power for growing projects",
    features: [
      "Unlimited video uploads",
      "Advanced analytics",
      "Priority support",
      "Monetization options",
    ],
    isPopular: true,
  },
  {
    name: "Pro",
    price: "$49/mo",
    description: "Full access with advanced features",
    features: [
      "All Start features",
      "AI-powered recommendations",
      "Custom branding",
      "API access",
    ],
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-screen bg-gray-100 px-4 py-12">
      <h2 className="text-3xl font-bold">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200 ring-2 ring-blue-200 hover:ring-blue-500 transition-all duration-300"
          >
            {plan.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-md shadow-md">
                Popular
              </div>
            )}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-gray-600 mt-2">{plan.description}</p>
            <p className="text-2xl font-bold mt-4">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
