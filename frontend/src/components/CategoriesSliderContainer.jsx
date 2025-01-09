import { forwardRef } from "react";
import Slider from "react-slick";

function CategoriesSliderContainer({ items }, ref) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-10">
      <Slider ref={ref} {...settings}>
        {items.map(({ title, Icon }, i) => (
          <div key={i}>
            <div className="flex me-4 flex-1 flex-col gap-3 shadow rounded border hover:bg-[#DB4444] hover:text-white duration-500 pt-2 mb-2">
              <a href="" className="flex flex-col gap-5 text-center py-8">
                <Icon className="text-5xl mx-auto" />
                <h4>{title}</h4>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default forwardRef(CategoriesSliderContainer);
