import { getUserData } from "./../services/getUserData";
import { UserData } from "./../types.d";
import { useEffect, useState } from "react";

const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUserData()
      .then((data) => setUserData(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [userData?.points]);

  return { userData, loading };
};

export default useUserData;
