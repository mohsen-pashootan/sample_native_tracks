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
import { Provider as TrackProvider } from "./src/context/TrackContext";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TrackListFlow() {
  return (
    <Stack.Navigator initialRouteName="TrackList">
      <Stack.Screen
        name="Tracks"
        component={TrackListScreen}
        options={{ headerShown: false }}
      />
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
        options={{
          headerShown: false,
          tabBarIcon: <FontAwesome name="th-list" size={20} />,
        }}
      />
      <Tab.Screen
        name="Add Track"
        component={TrackCreateScreen}
        options={{ tabBarIcon: <FontAwesome name="plus" size={20} /> }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ tabBarIcon: <FontAwesome name="gear" size={20} /> }}
      />
    </Tab.Navigator>
  );
}

function Routing() {
  const { state } = useContext(AuthContext);

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
            options={{
              headerShown: false,
              // tabBarIcon: <FontAwesome name="th-list" size={20} />,
            }}
          />
          <Tab.Screen
            name="Add Track"
            component={TrackCreateScreen}
            // options={{ tabBarIcon: <FontAwesome name="plus" size={20} /> }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            // options={{ tabBarIcon: <FontAwesome name="gear" size={20} /> }}
          />
        </Tab.Navigator>
      )}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <TrackProvider>
        <LocationProvider>
          <NavigationContainer>
            <Routing />
          </NavigationContainer>
        </LocationProvider>
      </TrackProvider>
    </AuthProvider>
  );
}
