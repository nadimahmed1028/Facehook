/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { auth } = useAuth();
  const { api } = useAxios();

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );

        setUser(response?.data?.user);
        setPosts(response?.data?.posts);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Fetching profile data...</div>;
  }

  return (
    <div>
      Welcome {user?.firstName} {""} {user?.lastName}
      <p>You have {posts.length} posts</p>
    </div>
  );
};

export default ProfilePage;
