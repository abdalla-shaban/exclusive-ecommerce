import { FaApple, FaArrowRight } from "react-icons/fa";
import heroProduct from "../assets/images/hero-product.png";
export default function Hero() {
  return (
    <div className="hero text-white py-4">
      <div className="hero-content bg-black flex-col lg:flex-row-reverse">
        <img src={heroProduct} alt="Iphone 14" className="max-w-full" />
        <div className="px-2 py-10 sm:px-10">
          <h1 className="text-lg font-normal flex items-center gap-3">
            <FaApple className="text-5xl" /> iPhone 14 Series
          </h1>
          <p className="py-4 !leading-[1.5] text-5xl sm:text-6xl font-bold ">
            Up to 10% <br /> off Voucher
          </p>
          <button className="flex items-center gap-4 ">
            <a href="" className="border-b-2 pb-1">
              Shop Now!
            </a>
            <FaArrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
