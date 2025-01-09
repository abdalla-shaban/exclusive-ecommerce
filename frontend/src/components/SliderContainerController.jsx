import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function SliderContainerController({ sliderRef }) {
  const nextSlide = () => sliderRef?.slickNext();
  const prevSlide = () => sliderRef?.slickPrev();

  return (
    <div className="*:btn *:btn-circle *:bg-[#F5F5F5] *:border-0 *:text-lg flex items-center gap-2">
      <button className="hover:bg-[#F5F5F5]/60" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className="hover:bg-[#F5F5F5]/60" onClick={nextSlide}>
        <FaArrowRight />
      </button>
    </div>
  );
}
