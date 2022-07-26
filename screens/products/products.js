import {
  View,
  ActivityIndicator,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

import ProductList from "./productList";
import SearchedProducts from "./searchedProducts";
import Banner from "../shared/banner";
import CategoryFilter from "./categoryFilter";

import { AntDesign } from "@expo/vector-icons";

const data = require("../../assets/data/products.json");
const categoriesData = require("../../assets/data/categories.json");

var { height } = Dimensions.get("window");
export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState(false);
  const [categories, setCategories] = useState([]);
  const [productsCat, setProductsCat] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(categoriesData);
    // active(-1);
    setProductsCat(data);
    setInitialState(data);

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategories([]);
      // setActive();
      setInitialState();
    };
  }, []);

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
    setSearchText("");
  };

  const changeCat = (ctg) => {
    if (ctg == "all") {
      setProductsCat(initialState);
      setActive(true);
    } else {
      setProductsCat(products.filter((i) => i.category.$oid === ctg));
      setActive(true);
    }
  };

  return (
    <View style={{ backgroundColor: "gainsboro", flex: 1 }}>
      <View>
        <AntDesign
          style={{ position: "absolute", zIndex: 1, top: 18, left: 15 }}
          name="search1"
          size={24}
          color="black"
        />

        <TextInput
          style={{
            backgroundColor: "white",
            paddingHorizontal: 50,
            borderRadius: 30,
            paddingVertical: 10,
            marginTop: 10,
            borderWidth: 1,
            borderColor: "gray",
          }}
          placeholder="Search"
          onFocus={openList}
          value={searchText}
          onChangeText={(text) => {
            searchProduct(text);
            setSearchText(text);
          }}
        />

        {focus == true ? (
          <AntDesign
            onPress={onBlur}
            name="closecircleo"
            size={24}
            color="black"
            style={{ position: "absolute", zIndex: 1, top: 18, right: 15 }}
          />
        ) : null}
      </View>

      {focus == true ? (
        <SearchedProducts productsFiltered={productsFiltered} />
      ) : (
        <ScrollView style={styles.container}>
          <View>
            <Banner />
          </View>

          <View>
            <CategoryFilter
              categories={categoriesData}
              categoryFilter={changeCat}
              productsCat={productsCat}
              active={active}
              setActive={setActive}
            />
          </View>

          {productsCat.length > 0 ? (
            <View style={styles.listContainer}>
              {products.map((item) => (
                <ProductList
                  navigation={props.navigation}
                  key={item._id.$oid}
                  item={item}
                />
              ))}
            </View>
          ) : (
            <View style={[styles.center, { height: height / 2 }]}>
              <Text>No products found</Text>
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    height: height,
    paddingHorizontal: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
