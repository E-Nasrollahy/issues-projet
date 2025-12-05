import ButtonStyle from "@/components/ButtonStyle";
import InputTamplate from "@/components/InputTamplate";
import SectionTitle from "@/components/SectionTitle";
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <>
      {Object.keys(errors).length !== 0 && (
        <Alert className="bg-red-400 absolute top-20 w-64">
          {Object.keys(errors).map((item) => (
            <>
              <CheckCircle2Icon />
              <AlertTitle key={item}>Please complete field {item}</AlertTitle>
            </>
          ))}
        </Alert>
      )}
      <div className="flex flex-col gap-4 justify-center items-center">
        <SectionTitle
          title="Create your account"
          description="Get started with your free account today."
        />
        <div className="grid grid-cols-3">
          <div className="col-start-2 w-sm border p-7 rounded-lg flex flex-col justify-center items-start gap-3">
            <div className="flex flex-col gap-1 justify-center">
              <p>Sign Up</p>
              <p className="text-neutral-500 text-wrap">
                Create a new account to start tracking issues.
              </p>
            </div>
            <form
              className="flex flex-col justify-center items-start gap-3 w-full"
              onSubmit={handleSubmit(formSubmit)}
            >
              <InputTamplate
                type="text"
                id="username"
                placeholder="Choose your username"
                register={register("username", { required: true })}
              />
              <InputTamplate
                type="email"
                id="email"
                placeholder="Enter your email"
                register={register("email", { required: true })}
              />
              <InputTamplate
                type="password"
                id="password"
                placeholder="Create your password"
                discription="Must be at least 6 characters"
                register={register("password", { required: true })}
              />
              <InputTamplate
                type="password"
                id="password"
                label="confirm password"
                placeholder="confirm your password"
                register={register("password", { required: true })}
              />
              <div className="w-full">
                <ButtonStyle style="black" children="Create account" path="/" />
              </div>
            </form>
            <div className="flex justify-center items-center gap-2 w-full pt-2 text-sm">
              <p className="text-neutral-500 ">Already have an account?</p>
              <NavLink to={"/sign-in"} className="cursor-pointer">
                Sign in here
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
