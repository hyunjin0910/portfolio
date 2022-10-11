import React from "react";
import Lottie from "react-lottie-player";

import developer from "../public/developer.json";

export default function Animation() {
  return <Lottie loop animationData={developer} play />;
}
