import { motion, useScroll } from "framer-motion"

function Scroll() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div style={{ scaleX: scrollYProgress }} />  
  )
}
