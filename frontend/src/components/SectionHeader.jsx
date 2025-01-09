import React from "react";
import SliderContainerController from "./SliderContainerController";
import Counter from "./Counter";

export default function SectionHeader({
  header,
  title,
  controllerRef,
  withCounter,
  withController,
  path,
}) {
  return (
    <div>
      <h2 className="text-[#DB4444] font-semibold flex items-center gap-3 xl">
        <span className="block w-5 h-10 bg-[#DB4444] rounded"></span>
        {header}
      </h2>
      <div className="flex items-center justify-between flex-wrap gap-5 mt-6">
        <div className="flex items-center flex-wrap gap-5 lg:gap-20">
          <h3 className="text-4xl font-semibold">{title}</h3>
          {withCounter && <Counter />}
        </div>
        {withController ? (
          <SliderContainerController sliderRef={controllerRef} />
        ) : (
          <a
            href={path}
            className="btn bg-[#DB4444] text-white hover:text-[#DB4444] text-lg"
          >
            View All
          </a>
        )}
      </div>
    </div>
  );
}
