import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground,TouchableOpacity,Pressable,ScrollView,SafeAreaView } from "react-native"
export default function Address() {
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
              <ScrollView style={styles.Group118}>
                <View style={styles.cont1}>
                <Text style={styles.Txt905}>Address Label</Text>
                <Text style={styles.Txt90}>
          Flat No, House No, Street Name, L.....
        </Text>            
                <Image
              style={styles.Person_pin_circle}
              source={require('../assets/personpin.png')}
            />
            <Pressable>
            <TouchableOpacity>
            <Image
              style={styles.Edit_location}
              source={require('../assets/editloc.png')}
            />
            </TouchableOpacity>
            </Pressable>
            <Pressable>
            <TouchableOpacity>
            <Image
        style={styles.Delete_forever}
        source={require('../assets/dele.png')}
      />
      </TouchableOpacity>
      </Pressable>
                </View>               
              </ScrollView>  
            </View>
            <Pressable>
      <TouchableOpacity>
      <Image
              style={styles.button}
              source={require('../assets/button.png')}
            />
              </TouchableOpacity>
              </Pressable>
            <TouchableOpacity>
            <View style={styles.Group152}>
              <Text style={styles.Txt539}>Add New Address</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.StatusBar}>
        <View style={styles.TimeStyle}>
          <Text style={styles.Txt8107}>9:41</Text>
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
        <Text style={styles.Txt486}>Address</Text>       
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
    backgroundColor: "#FFFFFF",
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
  Txt486: {
        position: "absolute",
        top: 59,
        left: 138,
        fontSize: 22,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "600",
        color: "rgba(255, 255, 255, 1)",    
        width: 90 ,
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
  Group16: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 146,
  },
  Group118: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 124,
    paddingRight: 124,
    marginBottom: 36,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    width: 300,
    height: 475,
    bottom:60,
  },
  cont1: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 124,
    paddingRight: 124,
    marginBottom: 36,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    width: 300,
    height: 55,
    bottom:0,
    right:125,
  },
  Txt905: {
    fontSize: 15,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    color: "rgba(15,14,14,1)",
    position:'absolute',
    left:49,
  },
  Txt90: {
    fontSize: 12,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    color: "rgba(15,14,14,1)",
    position:'absolute',
    left:49,
    top:30,
  },
  Person_pin_circle:{
    alignSelf: "Left",
    right:110,
    top:5,
    width:17.49,
    height:17.49,
  },
  Edit_location: {
    alignSelf: "Left",
    left:110,
    bottom:17,
    width:18,
    height:17.44,
  },
  Delete_forever: {
    alignSelf: "Left",
    left:140 ,
    bottom:34,
    width:18,
    height:17.44,
  },
  button: {
    alignSelf: "Left",
    right:130, 
    width:48,
    height:48,
    bottom:835,
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
    top:-289,
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