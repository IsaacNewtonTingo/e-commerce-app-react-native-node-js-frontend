import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/logoNew.png")}
        style={{ height: 80 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
