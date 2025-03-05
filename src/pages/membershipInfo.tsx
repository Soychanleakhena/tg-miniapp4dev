export default function Checkout() {
  // Set a static plan for display
  const selectedPlan = [
    {
      id: 1,
      name: "HULK STARTER",
      price: 20,
    },
    {
      id: 2,
      name: "HULK BOOST",
      price: 40,
    },
    {
      id: 3,
      name: "HULK PRO",
      price: 60,
    },
    {
      id: 4,
      name: "HULK ELITE",
      price: 99,
    },
  ];

  // Choose which plan to display (for example, the third plan)
  const plan = selectedPlan[2]; // HULK PRO

  return (
    <div className="flex items-center justify-center bg-white px-4 py-8">
      <div className="rounded-2xl p-6 w-full max-w-sm border border-gray-200">
        <div className="text-center mb-6 p-4 rounded-lg">
          <h1 className="text-3xl font-extrabold text-purple-900">
            Secure Your Membership
          </h1>
          <p className="text-gray-600 mt-2 text-base">
            Get started on your fitness journey today! 💪
          </p>
        </div>

        {/* Plan Details Box */}
        <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            🔥 {plan.name} Plan
          </h2>
          <p className="text-xl text-purple-800 font-bold mt-1">
            ${plan.price} / month
          </p>
        </div>

        {/* User Information Form */}
        <form className="mt-6 space-y-4">
          <div>
            <label className="flex mb-2 text-gray-700 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-black bg-purple-100 text-lg"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="flex mb-2 text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-black bg-purple-100 text-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-9">
            <button
              type="button"
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 text-lg"
              // onClick={() => alert(`Payment for ${plan.name} is Successful! 🎉`)}
            >
          Branch
            </button>

            <button
              type="button"
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105 text-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
