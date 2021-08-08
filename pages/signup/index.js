import Signup from "../../components/signup/Signup";
const SignupPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        width: "100%"
      }}
    >
      <Signup />
    </div>
  );
};
export default SignupPage;
