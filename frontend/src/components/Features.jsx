import { FaTruckFast, FaHeadphonesSimple } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const featuresContent = [
  {
    title: "Free and fast delivery",
    desc: "Free delivery for all orders over $140",
    Icon: FaTruckFast,
  },
  {
    title: "24/7 Customer service",
    desc: "Friendly 24/7 customer support",
    Icon: FaHeadphonesSimple,
  },
  {
    title: "Money back guarantee",
    desc: "We return money within 30 days",
    Icon: IoShieldCheckmarkOutline,
  },
];

export default function Features() {
  return (
    <section className="mt-5 mb-10 py-5">
      <div className="tb-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuresContent.map(({ title, desc, Icon }, i) => (
            <div
              key={i}
              className="flex text-center items-center flex-col gap-4"
            >
              <div className="size-20 flex items-center justify-center rounded-full bg-black border-[10px] border-[#C1C0C1] text-white">
                <Icon className="size-10" />
              </div>
              <div>
                <h4 className="font-bold capitalize text-xl mb-2">{title}</h4>
                <p className="text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
