import HeaderDemo from "@/components/issuesDemo/HeaderDemo";
import IssuseContainer from "@/components/issuesDemo/IssuseContainer";
import SearchFillterBar from "@/components/issuesDemo/SearchFillterBar";
import StatusBar from "@/components/issuesDemo/StatusBar";
import { FilterProvider } from "@/Context/FilterContextProvider";
import useFeach from "@/lib/useFeach";

const IssuesDemo = () => {
  const { data, isLoading, error } = useFeach();

  if (isLoading) {
    return (
      <>
        <HeaderDemo />
        <div className="p-4">Loading issues...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <HeaderDemo />
        <div className="p-4 text-red-600">
          Failed to load issues. See console for details.
        </div>
      </>
    );
  }

  return (
    <>
      <HeaderDemo />

      {isLoading ? (
        <div className="flex justify-center items-center">is Loading ...</div>
      ) : (
        <FilterProvider List={data ?? []}>
          <>
            <SearchFillterBar />
            <StatusBar />
            <IssuseContainer />
          </>
        </FilterProvider>
      )}
    </>
  );
};
export default IssuesDemo;
