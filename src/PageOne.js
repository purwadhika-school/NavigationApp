import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"

class PageOne extends Component {
  render() {
    return (
      <View>
        <Text>Page Satu</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("HalamanDua")}
        >
          <Text>Ke halaman dua</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default PageOne
