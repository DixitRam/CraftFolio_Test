// "use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ projectNum }) => {
  const swiper = useSwiper();
  let dynamicClass;
  switch (projectNum) {
    case "01":
      dynamicClass = "bg-[#ff8c00] hover:bg-[#ab5601] text-primary";
      break;
    case "02":
      dynamicClass = "bg-green-500 hover:bg-green-700 text-primary";
      break;
    case "03":
      dynamicClass = "bg-blue-500 hover:bg-blue-700 text-primary";
      break;

    default:
      break;
  }
  return (
    <div className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none">
      <button
        className={`text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all ${dynamicClass}`}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold />
      </button>
      <button
        className={`text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all ${dynamicClass}`}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
