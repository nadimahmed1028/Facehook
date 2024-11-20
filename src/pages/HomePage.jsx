import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <>
      <div>HomePage</div>
      <Link to="/me">Go to Profile</Link>
    </>
  );
};

export default HomePage;
