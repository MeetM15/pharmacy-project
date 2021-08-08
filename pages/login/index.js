import Login from "../../components/login/Login";
const LoginPage = () => {
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
      <Login />
    </div>
  );
};
export default LoginPage;
