import { Input } from "../components/Input";
import { PasswordInput } from "../components/Password";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigator = useNavigate();
  return (
    <div className="w-full h-screen overflow-y-scroll bg-white max-w-[500px] flex flex-col items-center justify-center  gap-2">
      <form
        onSubmit={() => {}}
        className="w-full h-1/2 flex justify-between flex-col pt-5 px-10 pb-20"
      >
        <span className="w-full flex flex-col gap-3">
          <Input
            label="Phone Number"
            placeholder="Enter Phone Number"
            errorMessage={""}
          />
          <PasswordInput
            label="Enter Your Pin"
            placeholder="*******"
            errorMessage={""}
          />
        </span>
        <span className="flex flex-col gap-3 items-center">
          <p className="inline text-sm my-2 mx-auto">
            If you don’t have an account.{" "}
            <Link to="/signup" className="text-green-400">
              Create an Account
            </Link>
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigator("/home");
            }}
            className="bg-green-400 px-4 py-3 w-full rounded-lg text-md mb-5 text-white"
            type="submit"
          >
            Login
          </button>
        </span>
      </form>
    </div>
  );
}
