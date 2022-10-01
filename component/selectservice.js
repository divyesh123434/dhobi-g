import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View,TouchableOpacity,Pressable } from "react-native";

const Selectservice = () => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
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
        Dry Clean                                  ₹80
        </Text>
        <Text style={styles.Txt454}>
                  Premium care of your expensive non machine wash dry clean only item.       Steam Pressing is included .
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
          Premium Wet Wash                  ₹60
          </Text>
          <Text style={styles.Txt454}>
          Premium care of your expensive machine wash wet clean only item. Each item is examined & processed seperately by our fabric expert
          </Text>
        </View>
        <View style={styles.Group3}>
        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
          color={isSelected2 ? '#007bb5' : undefined}
        />
          <Text style={styles.Txt714}>
          Normal Electric Ironing              ₹9 
          </Text>
          <Text style={styles.Txt454}>
          Get your clothes ironed by our superior quality electric iron. We don’t use coal based ironing machine
          </Text>
        </View>
        <View style={styles.Group4}>
        <CheckBox
          value={isSelected3}
          onValueChange={setSelection3}
          style={styles.checkbox}
          color={isSelected3 ? '#007bb5' : undefined}
        />
          <Text style={styles.Txt714}>
          Steam Ironing                            ₹15
          </Text>
          <Text style={styles.Txt454}>
          Get your clothes ironed by superior quality Steam ironing Machine. 
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
    height: 459,
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
    top: 100,
    left: 33,
    width: 250,
    height: 80,
    backgroundColor:"#FFFFFF"
  },
  Group3: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 220,
    left: 33,
    width: 250,
    height: 80,
    backgroundColor:"#FFFFFF"
  },
  Group4: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 320,
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

export default Selectservice;