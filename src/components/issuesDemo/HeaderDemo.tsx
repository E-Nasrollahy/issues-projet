import { NavLink } from "react-router";
import ButtonStyle from "@/components/ButtonStyle";
import Logo from "@/components/Logo";
import AvatarStyle from "@/components/AvatarStyle";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const HeaderDemo = () => {
  return (
    <>
      <div className="mx-15 py-4 flex justify-between items-center">
        <div className="flex justify-start items-center gap-4">
          <Logo />
          <NavLink to="/">Issuse</NavLink>
        </div>
        <div className="flex gap-4 justify-end">
          <div>
            <ButtonStyle path="/create-new-issue">+ New Issuse </ButtonStyle>
          </div>
          <AvatarStyle />
          <NavLink to='/sign-in' className="flex justify-center items-center px-3 hover:bg-gray-300 rounded-md transition">
            <FaArrowRightFromBracket />
          </NavLink>
        </div>
      </div>
      <hr className="mb-6" />
    </>
  );
};
export default HeaderDemo;
