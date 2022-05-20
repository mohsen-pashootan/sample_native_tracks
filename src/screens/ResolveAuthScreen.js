import { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { setNavigator } from "./../helper/navigationRef";

const ResolveAuthScreen = ({ navigation }) => {
  const { tryLocalSigin } = useContext(AuthContext);

  useEffect(() => {
    setNavigator(navigation);
    tryLocalSigin();
  }, []);
  return null;
};

export default ResolveAuthScreen;
