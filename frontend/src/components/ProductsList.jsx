import { FaRegStar, FaStar } from "react-icons/fa";
import product1 from "../assets/images/product-10.png";
import product2 from "../assets/images/product-11.png";
import product3 from "../assets/images/product-12.png";
import product4 from "../assets/images/product-13.png";
import product5 from "../assets/images/product-14.png";
import product6 from "../assets/images/product-15.png";
import product7 from "../assets/images/product-16.png";
import ProductCard from "./ProductCard";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const products = [
  {
    id: "1",
    title: "Breed Dry Dog Food",
    img: product1,
    price: "260",
    oldPrice: "360",
    sale: "",
    reviewsCount: "65",
    rating: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
  },
  {
    id: "2",
    title: "CANON EOS DSLR Camera",
    img: product2,
    price: "960",
    oldPrice: "1160",
    sale: "",
    reviewsCount: "75",
    rating: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
  },
  {
    id: "3",
    title: "ASUS FHD Gaming Laptop",
    img: product3,
    price: "370",
    oldPrice: "400",
    sale: "",
    reviewsCount: "99",
    rating: [FaStar, FaStar, FaStar, FaStar, FaStar],
  },
  {
    id: "4",
    title: "Kids Electric Car",
    img: product4,
    price: "375",
    oldPrice: "400",
    sale: "",
    reviewsCount: "99",
    rating: [FaStar, FaStar, FaStar, FaStar, FaRegStarHalfStroke],
  },
  {
    id: "5",
    title: "Jr. Zoom Soccer Cleats",
    img: product5,
    price: "375",
    oldPrice: "400",
    sale: "",
    reviewsCount: "99",
    rating: [FaStar, FaStar, FaStar, FaStar, FaRegStarHalfStroke],
  },
  {
    id: "6",
    title: "GP11 Shooter USB Gamepad",
    img: product6,
    price: "375",
    oldPrice: "400",
    sale: "",
    reviewsCount: "99",
    rating: [FaStar, FaStar, FaStar, FaStar, FaRegStarHalfStroke],
  },
  {
    id: "7",
    title: "Quilted Satin Jacket",
    img: product7,
    price: "375",
    oldPrice: "400",
    sale: "",
    reviewsCount: "99",
    rating: [FaStar, FaStar, FaStar, FaStar, FaRegStarHalfStroke],
  },
  {
    id: "8",
    title: "Breed Dry Dog Food",
    img: product1,
    price: "260",
    oldPrice: "360",
    sale: "",
    reviewsCount: "65",
    rating: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
  },
];
export default function ProductsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}
