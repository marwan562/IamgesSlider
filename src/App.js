import { motion } from "framer-motion";
import Images from "./assets/import/Images";
import { useEffect, useRef, useState } from "react";
function App() {
  const[width ,setWidth] = useState(0)
  const carousel = useRef();


   useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])
  return (
    <motion.div whileTap={{cursor : "grabbing"}} ref={carousel} className="carousel ">
       <motion.div drag='x' dragConstraints={{right : 0 , left : -width}} className=" flex ">
        
       {
        Images.map((p) => 
        <motion.div key={p}  className=" carousel-item " >
        <img src={p} alt="#"  className=" item-img    "  />  
      </motion.div>
        )
       }
 
       </motion.div>
    </motion.div>
  );
}

export default App;
