'use client';

import Image from "next/image";
import {motion} from "framer-motion";
import AnimatedText from "@/animations/AnimatedText";
import {text} from "node:stream/consumers";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Home() {

    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/dashboard");
        }, 6000000)

    },[]);

    const handleClick = ()=>{
        router.push("/dashboard");
    }
  return (
    <div className=" h-screen">
     <motion.div

     initial={{
         opacity: 0,
         scale:0,
     }}
     animate={{
         opacity: 1,
         scale: 1,
     }}
     transition={{
         duration: 5,
         ease: "easeIn",
     }}
     exit={{
         opacity:1
     }}
     className="h-100 relative"
     >
         <p>hello</p>

          <Image
          src={"/images/img.png"}
          alt={"Landing"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center "

      />

     </motion.div>
      <div className=" w-4xl mx-auto  flex flex-col item-center  mt-20">
             <AnimatedText
             text={"World city weather in real time "}
         customClassName={" p-2 text-5xl text-white bg-black font-serif font-semibold"}/>

          <div className="flex flex-col items-center justify-center h-32">
              <button
                  onClick={handleClick}
                  className={"bg-blue-400 py-2 px-4 rounded-lg "}>Main View</button>
          </div>

      </div>
    </div>
  );
}
