import type { IconType } from "react-icons";

type propsType = {
  title : string,
  discription : string,
  icon : IconType
}

const FeacherCard = ({title , discription, icon: Icon}: propsType ) => {
  return (
    <div className="border flex flex-col p-4 bg-white rounded-lg h-full">
      <Icon className="text-2xl mb-2 font-bold stroke-1" />
      <p className="font-semibold text-lg mb-2">{title}</p>
      <p className="text-gray-400">{discription}</p>
    </div>
  );
};

export default FeacherCard;
