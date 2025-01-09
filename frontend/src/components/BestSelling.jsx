import { FaRegStar, FaStar } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

import product1 from "../assets/images/product-5.png";
import product2 from "../assets/images/product-6.png";
import product3 from "../assets/images/product-7.png";
import product4 from "../assets/images/product-8.png";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    title: "The north coat",
    img: product1,
    price: "260",
    oldPrice: "360",
    sale: "",
    reviewsCount: "65",
    rating: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
  },
  {
    id: "2",
    title: "Gucci duffle bag",
    img: product2,
    price: "960",
    oldPrice: "1160",
    sale: "",
    reviewsCount: "75",
    rating: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
  },
  {
    id: "3",
    title: "RGB liquid CPU Cooler",
    img: product3,
    price: "370",
    oldPrice: "400",
    sale: "",
    reviewsCount: "99",
    rating: [FaStar, FaStar, FaStar, FaStar, FaStar],
  },
  {
    id: "4",
    title: "Small BookSelf",
    img: product4,
    price: "375",
    oldPrice: "400",
    sale: "",
    reviewsCount: "99",
    rating: [FaStar, FaStar, FaStar, FaStar, FaRegStarHalfStroke],
  },
];
export default function BestSelling() {
  return (
    <section className="my-5 py-5">
      <div className="tb-container">
        <SectionHeader
          header={"This Month"}
          title={"Best Selling Products"}
          path={""}
        />

        <div className="flex flex-wrap gap-5 mt-10">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
