
import Link from "next/link";

const plans = [
  {
    name: "STANDARD",
    price: "40$ Per Year",
    benefits: [
      "Add unlimited members",
      "Dashboard",
      "WhatsApp integration",
      "Data Backup every day",
      "Gym revenue report",
      "Email support",
    ],
  },
  {
    name: "PREMIUM",
    price: "50$ Per Year",
    benefits: [
      "All Features in STANDARD",
      "Workout Video page",
      "Diet Plan Page",
    ],
  },
  {
    name: "GOLDEN",
    price: "60$ Per Year",
    benefits: [
      "All Features in STANDARD",
      "All Features in PREMIUM",
      "Facebook integration",
      "Instagram marketing page integration",
      "Shop Page (you can sell supplement & Protein)",
      "Email support",
    ],
  },
];

export default function SelectPlanPage() {
  return (
    <main className="min-h-screen bg-black flex justify-center text-white">
      <div className="w-full max-w-[390px] bg-black px-5 py-8">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🏋️</div>

          <h1 className="text-[#9bd900] text-xl">
            Select Your Plan
          </h1>

          <p className="text-[#9bd900] text-sm mt-2">
            7 Days Free Trial
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {plans.map((plan) => (
            <section
              key={plan.name}
              className="border border-[#9bd900] rounded-xl p-4"
            >
              <h2 className="text-center text-[#9bd900] font-bold">
                {plan.name}
              </h2>

              <p className="text-center text-[#9bd900] text-xs mb-3">
                {plan.price}
              </p>

              <ul className="space-y-1 text-xs">
                {plan.benefits.map((benefit) => (
                  <li key={benefit}>★ {benefit}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <Link
          href="/members"
          className="block text-center bg-[#9bd900] text-black font-bold rounded-lg py-3 mt-8"
        >
          Continue
        </Link>
      </div>
    </main>
  );
}
