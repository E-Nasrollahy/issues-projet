import CommentCard from "./CommentCard";
import SectionTitle from "../SectionTitle";

const CommentSection = () => {
  return (
    <div className="py-8">
      <SectionTitle
        title="See it in action"
        description="get a preview of how our issue taskbar works"
      />
      <div className="grid grid-cols-3 ">
        <div className="col-start-2">
          <CommentCard />
        </div>
      </div>
    </div>
  );
};
export default CommentSection;
