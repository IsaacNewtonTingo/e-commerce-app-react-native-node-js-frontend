import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import React from "react";

import ProductCard from "./productCard";

var { width } = Dimensions.get("window");

const ProductList = (props) => {
  const { item } = props;

  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate("ProductDetails", { item: item })
      }
    >
      <View>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;
