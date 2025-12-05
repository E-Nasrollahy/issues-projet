import FeacherCard from "./FeacherCard";
import SectionTitle from "@/components/SectionTitle";
import { CiWarning, CiChat1, CiBookmark, CiUser, CiSearch, CiFilter } from "react-icons/ci";

const FeacherContainer = () => {
  const cardInformation = [
    {
      title: "Issue Management",
      discription:
        "Create, assign, and track bugs and feature requests with detailed descriptions and attachments.",
      icon: CiWarning,
    },
    {
      title: "Discussions",
      discription:
        "Collaborate with your team through comments and discussions on every issue.",
      icon: CiChat1,
    },
    {
      title: "Labels & Milestones",
      discription:
        "Organize issues with custom labels and track progress with milestones.",
      icon: CiBookmark,
    },
    {
      title: "Team Collaboration",
      discription:
        "Assign issues to team members and track who's working on what.",
      icon: CiUser,
    },
    {
      title: "Advanced Search",
      discription:
        "Find issues quickly with powerful search and filtering capabilities.",
      icon: CiSearch,
    },
    {
      title: "Smart Filtering",
      discription:
        "Filter by status, assignee, labels, and more to focus on what matters.",
      icon: CiFilter,
    },
  ];

  return (
    <div className="bg-gray-100 px-40 py-8">
      <SectionTitle title="Everything you need to track issues" description="Powerful features that help you stay organized and keep your projects on track."/>
      <div className="grid grid-cols-3 gap-4 p-4 auto-rows-fr">
        {cardInformation.map((card) => {
          return (
            <FeacherCard
              title={card.title}
              discription={card.discription}
              icon={card.icon}
            ></FeacherCard>
          );
        })}
      </div>
    </div>
  );
};

export default FeacherContainer;
