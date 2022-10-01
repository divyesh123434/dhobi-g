import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View,TouchableOpacity,Pressable } from "react-native";

const Bulkitem = () => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  return (
    <View style={styles.Group117}>
      <View style={styles.Group664}>
      <View style={styles.Group1}>
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          color={isSelected ? '#007bb5' : undefined}
        />
        <Text style={styles.Txt714}>
        Wearable                                  ₹80
        </Text>
        <Text style={styles.Txt454}>
        Get bulk laundry done in our high quality washing machine. Your clothes will be processed in single batch and it won’t be mixed with other customer clothes.
        </Text>
      </View>
      <View style={styles.Group2}>
      <CheckBox
          value={isSelected1}
          onValueChange={setSelection1}
          style={styles.checkbox}
          color={isSelected1 ? '#007bb5' : undefined}
        />
          <Text style={styles.Txt714}>
          Non Wearable                           ₹60
          </Text>
          <Text style={styles.Txt454}>
          Get your non wearable such as bedsheet, blanket etc cleaned .
          </Text>
        </View>
        <View style={styles.Group3}>
          <Text style={styles.Txt71}>
          Note:
          </Text>
          <Text style={styles.Txt45}>
         1. Minimum Weight: 4 KG.
          </Text>
          <Text style={styles.Txt45}>
          2.Kindly don’t give clothes which may be prone to bleeding their color.
          </Text> 
        </View>
      </View>
      <Pressable>
      <TouchableOpacity>
      <View style={styles.txt}>
        <Text style={styles.Txt495}>Add To Basket</Text>
      </View>
      </TouchableOpacity>
      </Pressable> 
    </View>
  );
};

const styles = StyleSheet.create({
  Group117: {
    position: "relative",
    paddingTop: 80,
    paddingBottom: 140,
    paddingLeft: 40,
    paddingRight: 0,
    width: 400,
    height: 770,
    backgroundColor:"#F6F6F6",
  },
  Group664: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    elevation: 1,
    width: 300,
    height: 385,
  },
  Group1: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    left: 33,
    width: 250,
    height: 80,
    backgroundColor:"#FFFFFF",
  },
  Group2: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 130,
    left: 33,
    width: 250,
    height: 80,
    backgroundColor:"#FFFFFF"
  },
  Group3: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 250,
    left: 33,
    width: 250,
    height: 80,
    backgroundColor:"#FFFFFF"
  },
  Txt714: {
    fontSize: 14,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    color: "rgba(15,14,14,1)",
    flexDirection: "row",  
    width: 300,
    top:20,
    marginBottom: 11,
    marginLeft:30, 
  },
  Txt71: {
    fontSize: 12,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    color: "#EB5757",
    flexDirection: "row",
    width: 300,
    top:20,
    marginBottom: 11,
    marginLeft:30, 
  },
  Txt454: {
    fontSize: 12,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    color: "rgba(15,14,14,1)",
    textAlign: "left",
    justifyContent: "center",
    width: 200,
    left:230,
    marginLeft:30,
  },
  Txt45: {
    fontSize: 12,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    color: "#EB5757",
    textAlign: "left",
    justifyContent: "center",
    width: 200,
    left:230,
    marginLeft:30,
  },
  checkbox: {
    alignSelf: "absolute",
    right:10,
    bottom:-17,
  },
  txt:{
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 90,
    paddingRight: 150,
    marginBottom: 36,
    borderRadius: 15,
    backgroundColor: "#007bb5", 
    width: 150,
    height: 50,
    alignItems:"center",
    marginLeft:25,
    bottom:25,
  },
  Txt495: {
    fontSize: 17,
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#FFFFFF",
    width: 150,
    textAlign:"center",
    marginLeft:60,
    
  },
});

export default Bulkitem;