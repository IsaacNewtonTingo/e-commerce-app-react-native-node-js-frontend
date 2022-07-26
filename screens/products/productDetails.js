import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function ProductDetails(props) {
  const [item, setItem] = useState(props.route.params.item);
  const [availability, setAvailability] = useState("");
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: item.image
              ? item.image
              : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imgContainer: {
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 250,
  },
});
