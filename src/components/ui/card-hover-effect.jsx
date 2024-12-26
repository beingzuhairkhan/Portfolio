import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState , useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';
import { Meteors } from "../ui/meteors";
import Aos from 'aos'
import "aos/dist/aos.css"
export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}
    >
      {items.map((item, idx) => (
        <div
          to={item?.demo}
          key={item?.id}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-800 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
            {/* <div data-aos="fade-in-zoom" data-aos-duration="1000" data-aos-delay="100"  > */}
          <Card className=""  >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48  mb-4 rounded-t-lg"
            />
            <Meteors number={10} />
            <CardTitle>{item.title}</CardTitle>
            <div className="flex justify-center mt-2 " >
              <div className="h-[3px] w-9 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
            <div className="rounded-lg min-w-max px-4 py-2 mt-8">
              <div className="flex flex-wrap gap-[4px">
                {item.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-zinc-900 text-white text-sm px-[10px] py-2 pr-3 rounded-full mt-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            


            <CardDescription>
              <div className="flex justify-between mt-8">
                <Button className="relative overflow-hidden border border-gray-800 p-5 bg-transparent">
                  <Link to={item.github} className="text-gray-400 font-semibold">
                    GitHub
                  </Link>
                  <span className=" absolute bottom-0 left-0 w-full h-1 bg-gray-600 animate-move-line rotate-45"></span>
                </Button>

                <Button className="relative overflow-hidden border border-gray-800 p-5 bg-transparent">
                  <Link to={item.demo} className="text-gray-400 font-semibold">
                    Live Website
                  </Link>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-600 animate-move-line rotate-45"></span>
                </Button>
              </div>
            </CardDescription>
          </Card>
            </div>
        // </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2 overflow-hidden bg-black border border-gray-800 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 " data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="100">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p
      className={cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}
    >
      {children}
    </p>
  );
};