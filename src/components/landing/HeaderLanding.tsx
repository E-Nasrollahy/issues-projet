import ButtonStyle from "@/components/ButtonStyle";
import Logo from "@/components/Logo";

const HeaderLanding = () => {
  return (
    <>
      <div className="mx-15 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex gap-4 justify-end">
          <div>
            <ButtonStyle style="wight" path="/sign-up">Sine up </ButtonStyle>
          </div>
          <div>
            <ButtonStyle path="/sign-in">Sine in </ButtonStyle>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default HeaderLanding;
