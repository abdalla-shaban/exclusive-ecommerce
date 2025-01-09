import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

export default function ProductCard({
  title,
  img,
  sale,
  price,
  oldPrice,
  rating,
  reviewsCount,
}) {
  return (
    <div className="flex me-4 flex-1 flex-col gap-3 shadow-xl pt-2">
      <div className="flex-1 flex items-center justify-center relative py-6 bg-[#f5f5f5] rounded-b-none rounded-xl overflow-hidden">
        <img src={img} alt={title} className="max-w-full mx-auto" />
        <div className="absolute start-0 top-0 w-full h-full flex items-start justify-between p-3">
          {sale !== "" && (
            <div className="py-1 px-2 rounded bg-[#DB4444] text-white text-xs">
              {`-${sale}%`}
            </div>
          )}
          <div className="flex flex-col gap-2 ms-auto">
            <button className="flex items-center justify-center size-8 rounded-full bg-white text-black">
              <FaRegHeart />
            </button>
            <a
              href=""
              className="flex items-center justify-center size-8 rounded-full bg-white text-black"
            >
              <FiEye />
            </a>
          </div>
        </div>
      </div>
      <div className="px-2">
        <h4 className="font-medium">{title}</h4>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#DB4444]">{`$${price}`}</span>
          <span className="line-through text-[#808080]">{`$${oldPrice}`}</span>
        </div>
      </div>
      <div className="flex items-center gap-3 px-2">
        <div className="flex items-center gap-1 text-yellow-400">
          {rating.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </div>
        <span className="text-[#808080] text-sm">({reviewsCount})</span>
      </div>
      <button className="btn rounded-t-none bg-black text-white hover:text-black duration-500">
        Add to Cart
      </button>
    </div>
  );
}
