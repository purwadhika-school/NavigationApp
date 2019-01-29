import React, { Component } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { createStackNavigator } from "react-navigation"
import PageOne from "./src/PageOne"
import PageTwo from "./src/PageTwo"
import PageThree from "./src/PageThree"

class App extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("HalamanSatu")}
        >
          <Text style={{ margin: 5, fontSize: 25 }}>Ke Halaman Satu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("HalamanDua")}
        >
          <Text style={{ margin: 5, fontSize: 25 }}>Ke Halaman Dua</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("HalamanTiga")}
        >
          <Text style={{ margin: 5, fontSize: 25 }}>Ke Halaman Tiga</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const Router = createStackNavigator({
  HalamanUtama: {
    screen: App
  },
  HalamanSatu: {
    screen: PageOne
  },
  HalamanDua: {
    screen: PageTwo
  },
  HalamanTiga: {
    screen: PageThree
  }
})

export default Router
