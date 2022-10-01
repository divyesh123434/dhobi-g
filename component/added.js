import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity,Pressable } from "react-native"
export default function Added() {
  return (
    <View style={styles.Group117}>
      <View style={styles.Group537}>
        <View style={styles.Group194}>
          <Text style={styles.Txt542}>
            Sucessfully added to Laundry Basket.
          </Text>
        </View>
        <Image
          style={styles.Image1}
          source={require('../assets/basket.png')}
        />
        <Image
          style={styles.Image18}
          source={require('../assets/tick.png')}
        />
      </View>
      <Pressable>
        <TouchableOpacity>
      <View style={styles.txt}>
                <Text style={styles.Txt495}>Go to Basket</Text>
     </View>
     </TouchableOpacity>
     </Pressable>
     </View>
  )
}
const styles = StyleSheet.create({
  Group117: {
    position: "relative",
    paddingTop: 0,
    paddingBottom: 529,
    paddingLeft: 0,
    paddingRight: 6241,
    width: 239,
    height: 279,
    left:100,
    top:100,
  },
  txt:{
    borderRadius: 15,
    backgroundColor: "#007bb5", 
    width: 164.43,
    height: 60,
    alignItems:"center",
    marginLeft:0,
    bottom:25,
    left:37,
  },
  Group537: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0,0,0,0.1)",
    elevation: 1,
    shadowOffset: { width: 0, height: 5 },
    width: 239,
    height: 279,
    shadowRadius:15,
    shadowColor:"#27AE60",
    borderWidth:3,
    borderColor:"#27AE60",
  },
  Group194: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 148,
    left: 10,
    width: 213,
    height: 123,
  },
  Txt542: {
    color: "#27AE60",
    position: "absolute",
    width: 140.65,
    height: 75,
    left: 37.89,
    top: 0,
    textAlign: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 25,
    bottom: 30,
  },
  Image1: {
    position: "absolute",
    top: 31,
    left: 72,
    width: 87,
    height: 91,
  },
  Image18: {
    position: "absolute",
    top: 71,
    left: 92,
    width: 40.13,
    height: 35,
  },
  Txt495: {
    fontSize: 17,
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#FFFFFF",
    width: 150,
    textAlign:"center",
    paddingTop:20,
  },
})