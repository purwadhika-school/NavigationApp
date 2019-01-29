import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"

class PageTwo extends Component {
  render() {
    return (
      <View>
        <Text>Page Dua</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("HalamanTiga")}
        >
          <Text>Ke halaman dua</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default PageTwo
