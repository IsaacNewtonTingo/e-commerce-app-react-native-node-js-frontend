import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Badge, ListItem } from "native-base";

const CategoryFilter = (props) => {
  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <TouchableOpacity
        onPress={() => {
          props.categoryFilter("all"), props.setActive(-1);
        }}
        key={1}
        style={[
          styles.center,
          { margin: 5 },
          props.active == -1 ? styles.active : styles.inActive,
        ]}
      >
        <Text style={{ color: "white" }}>All</Text>
      </TouchableOpacity>

      {props.categories.map((item) => (
        <TouchableOpacity
          onPress={() => {
            props.categoryFilter(item.id),
              props.setActive(props.categories.indexOf(item));
          }}
          key={item.id}
          style={[
            styles.center,
            { margin: 5 },
            props.active == props.categories.indexOf(item)
              ? styles.active
              : styles.inActive,
          ]}
        >
          <Text style={{ color: "white" }}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryFilter;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  active: {
    backgroundColor: "#03bafc",
  },
  inActive: {
    backgroundColor: "#a0e1eb",
  },
});
