import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Button title="Sign Out" onPress={signout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
