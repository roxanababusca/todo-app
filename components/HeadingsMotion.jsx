import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const animationVariants = {
    hidden: { opacity: 0, scale:  0 },
    initial: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.4, ease: [0, 0.71, 0.2, 1.01], scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 50,
                  restDelta: 0.001
     } },
  } };

export default function HeadingsMotion ({ heading }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

    return (
        <motion.h2 ref={ref} animate={controls} initial="hidden" variants={animationVariants}>
          {heading}
        </motion.h2>                 
    );
};


                    