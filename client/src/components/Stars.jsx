import Lottie from "lottie-react";
import stars from "/Users/anushkajha/Desktop/The Archive/client/src/assets/stars.json";

function Stars() {
  return (
      <>
        <div className="flex h-full gap-0">
          <Lottie animationData={stars} loop autoplay style={{ width: "50%", height: "100%" }} />
          <Lottie animationData={stars} loop autoplay style={{ width: "50%", height: "100%" }} />
        </div>
      </>
  );
}

export default Stars;
