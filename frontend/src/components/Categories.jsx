import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import CategoriesSliderContainer from "./CategoriesSliderContainer";
import {
  IoPhonePortraitOutline,
  IoGameControllerOutline,
} from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { TfiHeadphone } from "react-icons/tfi";

const categories = [
  { title: "Phones", Icon: IoPhonePortraitOutline },
  { title: "Computers", Icon: FaComputer },
  { title: "SmartWatch", Icon: BsSmartwatch },
  { title: "Camera", Icon: MdOutlineCameraAlt },
  { title: "Headphones", Icon: TfiHeadphone },
  { title: "Gaming", Icon: IoGameControllerOutline },
];
export default function Categories() {
  let sliderRef = useRef(null);
  const [controllerRef, setControllerRef] = useState(sliderRef);
  return (
    <section className="my-5 py-5">
      <div className="tb-container">
        <SectionHeader
          header={"Categories"}
          title={"Browse By Category"}
          controllerRef={controllerRef}
          withController={controllerRef}
        />
        <CategoriesSliderContainer
          ref={(slider) => {
            sliderRef = slider;
            setControllerRef(sliderRef);
          }}
          items={categories}
        />
      </div>
    </section>
  );
}
