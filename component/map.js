import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground,TouchableOpacity,Pressable,ScrollView,SafeAreaView,TextInput } from "react-native"
export default function Laundry() {
   const [text, onChangeText] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);
  const [text3, onChangeText3] = React.useState(null);
  return (
    <View style={styles.Signup}>
      <View style={styles.Group257}>
        <View style={styles.Group258}>
          <View style={styles.Group582}>
            <Image
              style={styles.Header}
              source={require('../assets/headadd.png')}
            />
            <View style={styles.Group164}> 
                <View style={styles.grp2}>
                <Text style={styles.Txt3}>Locality</Text>
                <Text style={styles.Txt4}>116, Raghvendra Nagar, Kaikankuppam,
Nesapakkam, Chennai, Tamil Nadu 600087</Text>
                <Pressable>
            <TouchableOpacity>
            <View style={styles.Group152}>
              <Text style={styles.Txt539}>Save & Continue</Text>
            </View>
            </TouchableOpacity>
            </Pressable>
                </View>
                <View style={styles.grp3}>
                <TextInput  
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="                        Search a new address"
                />
                </View> 
            </View>
          </View>
        </View>
      </View>
      <View style={styles.StatusBar}>
        <View style={styles.TimeStyle}>
          <Text style={styles.Txt8107}>9:41</Text>
          <Pressable>
      <TouchableOpacity>
      <Image
              style={styles.button}
              source={require('../assets/button.png')}
            />
              </TouchableOpacity>
              </Pressable>
        </View>
        <Image
          style={styles.CellularConnection}
          source={require('../assets/cellu.png')}
        />
        <Image
          style={styles.Wifi}
          source={require('../assets/wifis.png')}
        />
        <Image
          style={styles.Battery}
          source={require('../assets/battery.png')}
        />
        <Text style={styles.Txt486}>Location Information</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  Signup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 0,
    paddingBottom: 84,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "#f6f6f6",
    width: 360,
    height: 820,
  },
  Group257: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: 360,
    height: 735,
  }, 
  Group258: {
    width: 360,
    height: 735,
  },
  button: {
    position:"absolute",
    width: 48,
    height: 48,
    top:20,
  },
  Txt486: {
        position: "absolute",
        top: 59,
        left: 88,
        fontSize: 22,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "600",
        color: "rgba(255, 255, 255, 1)",
        width: 250 ,
        height: 33,
  },
  Group582: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Header: {
    width: 360,
    height: 227,
  },
  Group164: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 146,
    color:"#838383",
  }, 
 grp2: {
   paddingTop: 14,
   paddingBottom: 14,
   paddingLeft: 124,
   paddingRight: 124,
   marginBottom: 36,
   borderRadius: 15,
   backgroundColor: "#ffffff",
   width: 330,
   height: 149,
   bottom:-350,
   right:0,
 },
  Txt3:{
   position: "absolute",
   flexDirection: "column",
   top: 10,
   right: 90,
   fontSize: 15,
   fontFamily: "Poppins, sans-serif",
   fontWeight: "500",
   color: "#007bb5",
   width: 210,
   height: 33,
 },
 Txt4:{
   position: "absolute",
   flexDirection: "column",
   top: 30,
   right: 40,
   fontSize: 12,
   fontFamily: "Poppins, sans-serif",
   fontWeight: "400",
   color: "#007bb5",
   width: 240,
   height: 33,
 },
 grp3: {
   paddingTop: 14,
   paddingBottom: 14,
   paddingLeft: 124,
   paddingRight: 124,
   marginBottom: 20,
   borderRadius: 15,
   backgroundColor: "#ffffff",
   width: 330,
   height: 55,
   bottom:240,
   right:0,
 },
 input: {
   position: "absolute",
   transform: [
     {
       translateY: -94.5,
     },
     {
       translateX: -164,
     },
   ],
   top: 90,
   left: "50%",
   width: 330,
   height: 55,
   borderRadius:15,
 },
  Group152: {
    paddingTop: 15,
    paddingBottom: 16,
    paddingLeft: 117,
    paddingRight: 115,
    borderRadius: 15,
    backgroundColor: "rgba(0,123,181,1)",
    shadowColor: "rgba(0,0,0,0.1)",
    elevation: 1,
    shadowOffset: { width: 0, height: 5 },
    width: 300,
    height: 60,
    top:70,
    right:110,
  },
  Txt539: {
    fontSize: 17,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    position:'absolute',
    right:80,
    bottom:18,
  },
  StatusBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 6,
    paddingBottom: 13.24,
    paddingLeft: 20,
    paddingRight: 14,
    backgroundColor: "rgba(0,123,165,0)",
    width: 360,
    height: 42.24,
  },
  TimeStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 6,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 207,
  },
  Txt8107: {
    fontSize: 15,
    fontFamily: "SF Pro Text, sans-serif",
    fontWeight: "600",
    letterSpacing: -0.3,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 55,
  },
  CellularConnection: {
    width: 16.32,
    height: 10.24,
    marginRight: 5,
  },
  Wifi: {
    width: 14.72,
    height: 10.56,
    marginRight: 3,
  },
  Battery: {
    width: 24.33,
    height: 11.33,
  },
})