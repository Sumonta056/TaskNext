import Link from "next/link";
import { FaTasks } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiInformation2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex py-5 flex-wrap justify-around">
      <h1 className="text-lg font-semibold flex gap-3 justify-center items-center">
        <FaTasks size={17} /> Task-Next
      </h1>
      <ul className="flex gap-[40px] text-m">
        <li className="flex gap-3 justify-center items-center">
          <RiInformation2Line size={17} />
          <Link href=""> About</Link>
        </li>
        <li className="flex gap-3 justify-center items-center">
          <FaGithub size={17} />
          <Link href=""> GitHub</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
