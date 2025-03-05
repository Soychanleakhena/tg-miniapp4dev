import { CheckIcon, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const planData = [
  {
    id: 1, // ✅ Added ID
    name: "HULK STARTER",
    subtitle: "For Beginners Ready to Transform!",
    price: 20,
    features: [
      "Access to gym facilities (off-peak hours)",
      "1 free fitness consultation",
      "Basic strength & cardio equipment",
      "Locker & shower access",
    ],
  },
  {
    id: 2, // ✅ Added ID
    name: "HULK BOOST",
    subtitle: "Train Harder, Get Stronger!",
    price: 40,
    features: [
      "24/7 Gym Access",
      "2 free personal training sessions per month",
      "Group workout classes (Yoga, HIIT, Strength Training)",
      "Nutrition guidance & meal planning tips",
    ],
  },
  {
    id: 3, // ✅ Added ID
    name: "HULK PRO",
    subtitle: "For Dedicated Warriors!",
    price: 60,
    features: [
      "Everything in HULK BOOST",
      "Unlimited group workout classes",
      "Monthly body composition analysis",
      "Sauna & recovery zone access",
    ],
  },
  {
    id: 4, // ✅ Added ID
    name: "HULK ELITE",
    subtitle: "The Ultimate Fitness Experience!",
    price: 99,
    features: [
      "All benefits from HULK PRO",
      "4 personal training sessions per month",
      "VIP access to premium equipment & private workout zones",
      "Free protein shakes after workouts",
      "Priority booking for special gym events",
    ],
  },
];

const planColors = [
  {
    title: "text-black",
    priceBg: "bg-gradient-to-r from-purple-900 to-purple-900",
    featureBg: "bg-gray-900",
    check: "text-purple-200",
    shadow: "shadow-purple-300",
  },
  {
    title: "text-black",
    priceBg: "bg-gradient-to-r from-purple-900 to-purple-900",
    featureBg: "bg-gray-900",
    check: "text-purple-200",
    shadow: "shadow-purple-300",
  },
  {
    title: "text-black",
    priceBg: "bg-gradient-to-r from-purple-900 to-purple-900",
    featureBg: "bg-gray-900",
    check: "text-purple-200",
    shadow: "shadow-purple-300",
  },
  {
    title: "text-black",
    priceBg: "bg-gradient-to-r from-purple-900 to-purple-900",
    featureBg: "bg-gray-900",
    check: "text-purple-200",
    shadow: "shadow-purple-300",
  },
];

export default function MembershipPlan() {
  return (
    <div className="p-6 pt-2">
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold text-black">Membership Plans</h1>
        <p className="text-sm text-purple-800 mt-1">
          Choose your fitness journey
        </p>
        <div className="flex justify-center mt-2">
          <ChevronDown className="animate-bounce w-6 h-6 text-purple-800" />
        </div>
      </div>

      {planData.map((plan, index) => (
        <div key={plan.id} className="mb-10">
          <div className="text-center mb-4">
            <h2 className={`text-xl font-bold uppercase ${planColors[index].title}`}>
              {plan.name}
            </h2>
            <p className="text-sm text-purple-800 italic mt-1">{plan.subtitle}</p>
          </div>

          <div className={`text-center mb-6 ${planColors[index].priceBg} rounded-lg py-3 shadow-md`}>
            <p className="text-3xl font-bold flex items-center justify-center gap-2 text-white">
              <span className="text-purple-800">💰</span>${plan.price}
              <span className="text-lg font-normal">/month</span>
            </p>
          </div>

          <div className={`${planColors[index].featureBg} ${planColors[index].shadow} rounded-lg p-6 mb-8 transform hover:scale-105 transition-transform duration-300`}>
            <p className="text-white font-semibold mb-4 flex items-center">
              <span className="text-2xl mr-2">🔥</span> Features:
            </p>
            <div className="space-y-3">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start">
                  <div className="bg-purple-700 rounded-full p-1 mr-3 mt-1">
                    <CheckIcon className={`h-3 w-3 ${planColors[index].check}`} />
                  </div>
                  <p className="text-white">{feature}</p>
                </div>
              ))}
            </div>

            {/* Button inside the plan box */}
            <div className="text-center mt-6">
              <Link to={`/membership-info`}>
                <button
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
                >
                  Start Your Fitness Journey
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
