import ButtonStyle from "@/components/ButtonStyle";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center gap-8 items-center py-20 mx-96">
      <Badge className="bg-gray-300" variant="secondary">
        Built for developers, by developers
      </Badge>
      <h1 className="text-7xl font-bold">Track issues like a pro</h1>
      <p className="text-gray-500 text-lg text-center">
        A powerful issue tracking system inspired by GitHub. Manage bugs,
        feature requests, and project tasks with ease. Perfect for teams of any
        size.
      </p>
      <div className="flex gap-4">
        <div>
          <ButtonStyle path="/sign-up">Get start for free</ButtonStyle>
        </div>
        <div>
          <ButtonStyle path="/issues-demo" style="wight">View demo</ButtonStyle>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
