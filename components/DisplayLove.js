import React from "react";
import { Text, View, StyleSheet } from "react-native";

const DisplayLove = (prop) => {
  if (prop.data == "Loading" || prop.data.fname == "")
    return <Text style={styles.text}>Please Input Names </Text>;
  else {
    return (
      <View>
        <Text style={styles.text}>{prop.data.percentage}%</Text>
        <Text style={styles.text}>{prop.data.result}</Text>
      </View>
    );
  }
};

export default DisplayLove;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});
