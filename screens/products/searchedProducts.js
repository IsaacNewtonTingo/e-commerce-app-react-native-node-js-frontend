import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

var { width } = Dimensions.get("window");

const SearchedProducts = (props) => {
  const { productsFiltered } = props;

  return (
    <ScrollView
      contentContainerStyle={{
        width: width,
        flex: 1,
        padding: 20,
      }}
    >
      {productsFiltered.length > 0 ? (
        productsFiltered.map((item) => (
          <TouchableOpacity
            key={item._id.$oid}
            style={{
              zIndex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Image
              style={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                marginRight: 20,
              }}
              source={{
                uri: item.image
                  ? item.image
                  : "https://images.unsplash.com/photo-1650454390535-6c90d8afaf83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              }}
            />

            <View>
              <Text>{item.name} </Text>
              <Text>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <View style={styles.center}>
          <Text style={{ alignSelf: "center" }}>
            No products match the selected criteria
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default SearchedProducts;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
