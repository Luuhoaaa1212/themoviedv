"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const Loader = () => {
  const loadingVariants = {
    start: { left: "-100%" },
    mid: { left: "40%", transition: { duration: 2 } },
    midToRight: { left: "60%", transition: { duration: 1.6 } },
    end: { left: "100%", transition: { duration: 1.2 } },
  };

  const {
    movieGroup: { statusLoading },
  } = useSelector((state: RootState) => state);

  return (
    <motion.div
      key={statusLoading.toString()}
      initial="start"
      animate={["start", "mid", "midToRight", "end"]}
      variants={loadingVariants}
      style={{
        height: "4px",
        position: "fixed",
        top: 0,
        zIndex: 130,
        left: 0,
        right: 0,
        width: "350px",
        borderRadius: "8px",
        background: "linear-gradient(to right, #c0fecf 0, #1ed5a9 100%)",
      }}
    ></motion.div>
  );
};

export default Loader;
