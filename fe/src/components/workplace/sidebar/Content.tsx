import Link from "next/link";
import SidebarContext from "./SideBar";
import { useContext } from "react";

const SidebarContentComponent = ({ icon, text, active, link }: any) => {
  const { expanded } = useContext(SidebarContext);

  return (
    <Link href={link}>
      <div
        className={`visible sm:flex justify-center items-center gap-x-2 py-2 px-3 mb-2 font-medium rounded-lg cursor-pointer transition-colors duration-200 group ${
          active ? "bg-orange-500 text-white" : "hover:bg-orange-200"
        } ${expanded ? "w-full flex" : "w-auto"}`}>
        {icon}
        <span
          className={`text-sm ml-2 transition-all overflow-hidden ${
            expanded ? "w-full" : "w-0 hidden"
          }`}>
          {text}
        </span>
        {!expanded && (
          <div
            className={`absolute text-xs text-center left-full px-1 py-2 ml-0 group-hover:ml-3 rounded-md w-[10rem] transition-all group-hover:visible invisible hover:bg-orange-500 hover:text-white ${
              active ? "bg-orange-500" : "bg-orange-200"
            }`}>
            {text}
          </div>
        )}
      </div>
    </Link>
  );
};

export default SidebarContentComponent;
