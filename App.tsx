import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Presentacion/views/home/home";
import { RegisterScreen } from "./src/Presentacion/views/register/Register";
import { ProfileInfoScreen } from "./src/Presentacion/views/profile/info/ProfileInfo";

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  ProfileInfoScreen: undefined;
};
const stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="HomeScreen" component={HomeScreen} />
        <stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: "registro",
          }}
        />
        <stack.Screen
                    name="ProfileInfoScreen"
                    component={ProfileInfoScreen}
                />

      </stack.Navigator>
    </NavigationContainer>
    
  );
};
export default App;
