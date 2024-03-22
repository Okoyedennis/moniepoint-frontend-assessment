import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Animate = ({ children, width }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        {children}
      </motion.div>
    </div>
  );
};

export default Animate;
