import ButtonStyle from "@/components/ButtonStyle";
import InputTamplate from "@/components/InputTamplate";
import SectionTitle from "@/components/SectionTitle";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";

const SignIn = () => {
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const formSubmit = (data: object) => {
      console.log(data);
      navigate("/issues-demo");
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
          title="Sign in to your account"
          description="Welcome back ! Please enter your details ."
        />
        <div className="grid grid-cols-3">
          <div className="col-start-2 w-sm border p-7 rounded-lg flex flex-col justify-center items-start gap-3">
            <div className="flex flex-col gap-1 justify-center">
              <p className="capitalize">Sign in</p>
              <p className="text-neutral-500 text-wrap">
                Enter your username and password to access your account.
              </p>
            </div>
            <form className="flex flex-col justify-center items-start gap-3 w-full" onSubmit={handleSubmit(formSubmit)}>
              <InputTamplate
                type="text"
                id="username"
                placeholder="Enter your username"
                register={register("username", { required: true })}
              />
              <InputTamplate
                type="password"
                id="password"
                placeholder="Enter your password"
                register={register("password", { required: true })}
              />
              <div className="w-full">
                <ButtonStyle style="black" children="Sign in"/>
              </div>
            </form>
            <div className="flex justify-center items-center gap-2 w-full pt-2 text-sm">
              <p className="text-neutral-500 ">Don't have an account?</p>
              <NavLink to="/sign-up" className="cursor-pointer">
                Sign up here
              </NavLink>
            </div>
            <div className="bg-gray-300 flex flex-col gap-2 mt-2 justify-center p-4 rounded-lg text-xs  text-gray-500 w-full">
              <p className="font-bold">Demo credentials</p>
              <p>Use any username and password to sign in to the demo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
