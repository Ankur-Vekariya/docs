import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";


function Card({ data,reference }) {
  return (
    <motion.div dragConstraints={reference} whileDrag={{scale:1.2}} drag className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 px-8 py-10 text-white overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {data.description}
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h4>{data.fileSize}</h4>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoMdCloseCircleOutline />
            ) : (
              <LuDownload size="0.8em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full h-10 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">Download</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
