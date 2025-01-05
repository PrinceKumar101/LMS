import { LoginForm } from "@/components/login-form";

const Login = () => {
  return (
    <>
      <div className="flex min-h-svh flex-col items-start justify-start bg-muted p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <LoginForm website_name="LmS" signup_link="/signup"/>
        </div>
      </div>
    </>
  );
};

export default Login;
