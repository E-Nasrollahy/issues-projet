import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router";
import Logo from "../Logo";

const LoginLayout = () => {
  return (
    <>
      <div className="my-4 ml-16 flex justify-start w-30 gap-2 text-sm text-gray-400 items-center cursor-pointer">
        <FaArrowLeftLong className="pt-1" />
        <NavLink to="/">Back to home</NavLink>
      </div>
      <hr />
      <div className="flex justify-center items-center py-8 pb-4">
        <Logo className="font-bold text-2xl" />
      </div>

      <Outlet />
    </>
  );
};
export default LoginLayout;
