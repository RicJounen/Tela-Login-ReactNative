import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

import Login from "./Telas/Login";
import Home from "./Telas/Home";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen name=" " component={Login}

          options={{
            headerTitle: () => (
              <Image
                source={require('./assets/SenaiLogo.png')}
                style={{ width: 200, height: 50 }}
              />
            ),
            headerTitleAlign: 'center', // Centraliza o componente do título do header
          }}
        />
        <Stack.Screen name="TelaHome" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;