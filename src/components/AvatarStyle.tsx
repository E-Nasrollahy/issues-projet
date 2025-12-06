import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import ClassNames  from "classnames";

const AvatarStyle = () => {
    // const classNames = require(ClassNames);
    // classNames({})
  return (
    <>
      <div className="flex items-center gap-3">
        <Avatar className="">
          <AvatarImage  src="https://github.com/shadcn.png"></AvatarImage>
        </Avatar>
        <p>john deo</p>
      </div>
    </>
  );
};
export default AvatarStyle;
