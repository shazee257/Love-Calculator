import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Appbar, Button } from "react-native-paper";
import DisplayLove from "./components/DisplayLove";

class App extends Component {
  state = {
    name1: "",
    name2: "",
    result: "Loading",
  };

  submitPressed = () => {
    if (this.state.name1 == "" || this.state.name2 == "") {
      this.setState({
        result: "Loading",
      });
    } else {
      fetch(
        `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.name1}&sname=${this.state.name2}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "love-calculator.p.rapidapi.com",
            "x-rapidapi-key":
              "f7a6dc0528msh8257d0dfd1cfa3bp15cc5ejsn42052cc6a9cb",
          },
        }
      )
        .then((response) => response.json())
        .then((res) => {
          this.setState({
            result: res,
          });
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Love Percentage % Calculator"
            style={{ alignItems: "center" }}
          />
        </Appbar.Header>
        <TextInput
          label="Name"
          value={this.state.name1}
          onChangeText={(name1) => this.setState({ name1 })}
        />
        <TextInput
          label="Partner Name"
          value={this.state.name2}
          onChangeText={(name2) => this.setState({ name2 })}
        />
        <Button
          style={{ margin: 10 }}
          icon="heart-outline"
          mode="contained"
          onPress={this.submitPressed}
        >
          Calculate
        </Button>
        <DisplayLove data={this.state.result} />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
