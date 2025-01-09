import { useRef, useState } from "react";
import { FaStar, FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
import product4 from "../assets/images/product-4.png";
import SliderContainer from "./SliderContainer";
import SectionHeader from "./SectionHeader";

const products = [
  {
    id: "1",
    title: "HAVIT HV-G92 Gamepad",
    img: product1,
    price: "120",
    oldPrice: "160",
    sale: "40",
    reviewsCount: "88",
    rating: [FaStar, FaStar, FaStar, FaStar, FaStar],
  },
  {
    id: "2",
    title: "AK-900 Wired Keyboard",
    img: product2,
    price: "960",
    oldPrice: "1160",
    sale: "35",
    reviewsCount: "75",
    rating: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
  },
  {
    id: "3",
    title: "IPS LCD Gaming Monitor",
    img: product3,
    price: "370",
    oldPrice: "400",
    sale: "30",
    reviewsCount: "99",
    rating: [FaStar, FaStar, FaStar, FaStar, FaStar],
  },
  {
    id: "4",
    title: "S-Series Comfort Chair ",
    img: product4,
    price: "375",
    oldPrice: "400",
    sale: "25",
    reviewsCount: "99",
    rating: [FaStar, FaStar, FaStar, FaStar, FaRegStarHalfStroke],
  },
  {
    id: "5",
    title: "HAVIT HV-G92 Gamepad",
    img: product1,
    price: "120",
    oldPrice: "160",
    sale: "40",
    reviewsCount: "88",
    rating: [FaStar, FaStar, FaStar, FaStar, FaStar],
  },
  {
    id: "6",
    title: "AK-900 Wired Keyboard",
    img: product2,
    price: "960",
    oldPrice: "1160",
    sale: "35",
    reviewsCount: "75",
    rating: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
  },
  {
    id: "7",
    title: "IPS LCD Gaming Monitor",
    img: product3,
    price: "370",
    oldPrice: "400",
    sale: "30",
    reviewsCount: "99",
    rating: [FaStar, FaStar, FaStar, FaStar, FaStar],
  },
  {
    id: "8",
    title: "S-Series Comfort Chair ",
    img: product4,
    price: "375",
    oldPrice: "400",
    sale: "25",
    reviewsCount: "99",
    rating: [FaStar, FaStar, FaStar, FaStar, FaRegStarHalfStroke],
  },
];

export default function TodayDeals() {
  let sliderRef = useRef(null);
  const [controllerRef, setControllerRef] = useState(sliderRef);

  return (
    <section className="my-5 py-5">
      <div className="tb-container">
        <SectionHeader
          header={"Today's"}
          title={"Flash Sales"}
          controllerRef={controllerRef}
          withCounter
          withController
        />
        <SliderContainer
          ref={(slider) => {
            sliderRef = slider;
            setControllerRef(sliderRef);
          }}
          items={products}
        />
        <div className="flex items-center justify-center my-10">
          <a className="btn bg-[#DB4444] text-white hover:text-[#DB4444]">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
