import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SignupScreens from "./src/screens/SignupScreens";
import SigninScreens from "./src/screens/SigninScreens";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Context as AuthContext } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TrackListFlow() {
  return (
    <Stack.Navigator initialRouteName="TrackList">
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TrackListFlow"
        component={TrackListFlow}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

function Routing() {
  const { state } = useContext(AuthContext);

  console.log("# state", state);
  return (
    <>
      {!state.token ? (
        <Stack.Navigator initialRouteName="Resolve_auth">
          <Stack.Screen
            name="Resolve_auth"
            component={ResolveAuthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sign_in"
            component={SigninScreens}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sign_up"
            component={SignupScreens}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name="TrackListFlow"
            component={TrackListFlow}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      )}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <LocationProvider>
        <NavigationContainer>
          <Routing />
        </NavigationContainer>
      </LocationProvider>
    </AuthProvider>
  );
}
