import { getUserData } from "./../services/getUserData";
import { UserData } from "./../types.d";
import { useEffect, useState } from "react";

const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    getUserData().then((data) => setUserData(data));
  }, [userData?.points]);

  return userData;
};

export default useUserData;
