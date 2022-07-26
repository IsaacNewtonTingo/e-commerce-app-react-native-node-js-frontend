import { StyleSheet, Text, View } from "react-native";
import Products from "./screens/products/products";
import Header from "./screens/shared/header";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigators/mainNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <MainNavigator />
    </NavigationContainer>
  );
}
