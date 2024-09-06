import React, { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

function Forground() {

  let ref = useRef(null)
  let data = [
    {
      description: "this is the background color of the task these will be displayed",
      fileSize: "0.9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      description: "Lorem ipsum not file description task",
      fileSize: "29mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      description: "Lorem ipsum not file description task",
      fileSize: "29mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex flex-wrap">
      {data.map((item, index) => (
        <Card data={item} key={index} reference={ref}/>
      ))}
      {/* <Card /> */}
    </div>
  );
}

export default Forground;
