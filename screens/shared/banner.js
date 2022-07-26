import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Swiper from "react-native-swiper/src";

var { width } = Dimensions.get("window");

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://media.istockphoto.com/photos/shot-of-an-attractive-young-woman-sitting-alone-on-a-mat-and-on-the-picture-id1317735408?b=1&k=20&m=1317735408&s=170667a&w=0&h=DWyywoNCFSpA2Td-qo5AQ4UWaW0HoujFOwsj78CyrUs=",

      "https://media.istockphoto.com/photos/broken-heart-picture-id1312667763?b=1&k=20&m=1312667763&s=170667a&w=0&h=PkSvb_OF9qVUTZSgHllxMSi9DZBRHghxLdDMkudCc44=",

      "https://images.unsplash.com/photo-1600411106965-fb4a66f92166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{ height: width / 2 }}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={2}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
