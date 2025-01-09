import product9 from "../assets/images/product-9.png";
import Counter from "./Counter";

export default function CatAd() {
  return (
    <section className="my-10 ">
      <div className="tb-container flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-10 bg-black text-white p-6 md:py-12 md:px-16 overflow-hidden">
        <div>
          <h2 className="text-lg font-semibold text-[#00FF66] mb-3">
            Categories
          </h2>
          <p className="text-5xl leading-[1.5]">
            Enhance Your
            <br />
            Music Experience
          </p>
          <div className="my-3">
            <Counter />
          </div>
          <button className="btn bg-[#23a356] text-white hover:text-[#00FF66] font-medium px-8 mt-5">
            Buy Now!
          </button>
        </div>
        <div className="relative">
          <img
            src={product9}
            alt="jbl boom box"
            className="max-w-full z-10 relative"
          />
          <div className="absolute size-[500px] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#D9D9D9]/30 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
