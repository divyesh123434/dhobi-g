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
              <ScrollView style={styles.Group118}>
                <View style={styles.grp1}>
                <Text style={styles.Txt1}>Saved Location</Text>
                  <TouchableOpacity style={styles.Txt2}>Change</TouchableOpacity>
                </View>
                <View style={styles.grp2}>
                <Text style={styles.Txt3}>Locality</Text>
                <Text style={styles.Txt4}>Map Fetched Address</Text>
                <Image
                      style={styles.Person_pin_circle}
                      source={require('../assets/personpin1.png')}
                    />
                </View>
                <View style={styles.grp3}>
                <TextInput  
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="                        House No. & Floor *"
                />
                </View>
                <View style={styles.grp3}>
                <TextInput  
                    style={styles.input}
                    onChangeText={onChangeText1}
                    value={text1}
                    placeholder="                        Building & Block No*"
                />
                </View>
                <View style={styles.grp3}>
                <TextInput  
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={text2}
                    placeholder="             Landmark & Area Name (Optional)"
                />
                </View>
                <View style={styles.grp4}>
                <Text style={styles.Txt6}>Add Address Label</Text>
                </View>
                <Pressable>
                <TouchableOpacity>
              <View style={styles.Group7}>
                <Text style={styles.Txt7}>Home</Text>
              </View>
              </TouchableOpacity>
              </Pressable>
              <Pressable>
              <TouchableOpacity>
              <View style={styles.Group8}>
                <Text style={styles.Txt7}>Work</Text>
              </View>
              </TouchableOpacity>
              </Pressable>
              <Pressable>
              <TouchableOpacity>
              <View style={styles.Group9}>
                <Text style={styles.Txt7}>Others</Text>
              </View>
              </TouchableOpacity>
              </Pressable>
              <View style={styles.grp10}>
                <TextInput  
                    style={styles.input}
                    onChangeText={onChangeText3}
                    value={text3}
                    placeholder="             Enter Your Own Label"
                />
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
            <Pressable>
            <TouchableOpacity>
            <View style={styles.Group152}>
              <Text style={styles.Txt539}>Save & Continue</Text>
            </View>
            </TouchableOpacity>
            </Pressable>
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
    backgroundColor: "#f6f6f6",
    width: 340,
    height: 515,
    bottom:60,
    left:5,
  },
  grp1: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 124,
    paddingRight: 124,
    marginBottom: 36,
    borderRadius: 15,
    backgroundColor: "#f6f6f6",
    width: 330,
    height: 55,
    bottom:0,
    right:125,
  },
  Txt1:{
   position: "absolute",
   top: 0,
   right: 115,
   fontSize: 20,
   fontFamily: "Poppins, sans-serif",
   fontWeight: "600",
   color: "#0F0E0E",
   width: 210,
   height: 33,
 },
 Txt2:{
   position: "absolute",
   top:0,
   left: 250,
   fontSize: 20,
   fontFamily: "Poppins, sans-serif",
   fontWeight: "600",
   color: "#007BB5",
   width: 210,
   height: 33,
 },
 grp2: {
   paddingTop: 14,
   paddingBottom: 14,
   paddingLeft: 124,
   paddingRight: 124,
   marginBottom: 36,
   borderRadius: 15,
   backgroundColor: "#007bb5",
   width: 330,
   height: 68,
   bottom:60,
   right:125,
 },
  Txt3:{
   position: "absolute",
   flexDirection: "column",
   top: 10,
   right: 40,
   fontSize: 15,
   fontFamily: "Poppins, sans-serif",
   fontWeight: "600",
   color: "#ffffff",
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
   fontWeight: "600",
   color: "#ffffff",
   width: 210,
   height: 33,
 },
 Person_pin_circle:{
   alignSelf: "Left",
   right:110,
   bottom:2,
   width:23,
   height:23,
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
   bottom:70,
   right:125,
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
   top: 95,
   left: "50%",
   width: 330,
   height: 55,
   borderRadius:15,
 },
 grp4: {
   paddingTop: 14,
   paddingBottom: 14,
   paddingLeft: 124,
   paddingRight: 124,
   marginBottom: 20,
   borderRadius: 15,
   backgroundColor: "#f6f6f6",
   width: 330,
   height: 55,
   bottom:70,
   right:125,
 },
 Txt6:{
   position: "absolute",
   top: 1,
   right: 90,
   fontSize: 18,
   fontFamily: "Poppins, sans-serif",
   fontWeight: "600",
   color: "#0F0E0E",
   width: 210,
   height: 33,
 },
 Group7: {
   paddingTop: 14,
   paddingBottom: 14,
   paddingLeft: 1,
   paddingRight:80 ,
   marginBottom: 37,
   borderRadius: 15,
   backgroundColor: "#FFFFFF",
   borderWidth:1,
   flexDirection:"row",
   borderColor:'#007BB5',
   width: 10,
   height: 10,
   bottom:120,
   left:-100,
 },
 Group8: {
   paddingTop: 14,
   paddingBottom: 14,
   paddingLeft: 1,
   paddingRight:80 ,
   marginBottom: 37,
   borderRadius: 15,
   backgroundColor: "#FFFFFF",
   borderWidth:1,
   flexDirection:"row",
   borderColor:'#007BB5',
   width: 10,
   height: 10,
   bottom:187,
   left:1,
 },Group9: {
   paddingTop: 14,
   paddingBottom: 14,
   paddingLeft: 1,
   paddingRight:80 ,
   marginBottom: 37,
   borderRadius: 15,
   backgroundColor: "#FFFFFF",
   borderWidth:1,
   flexDirection:"row",
   borderColor:'#007BB5',
   width: 10,
   height: 10,
   bottom:253,
   left:100,
 },
 grp10: {
   paddingTop: 14,
   paddingBottom: 14,
   paddingLeft: 124,
   paddingRight: 124,
   marginBottom: 20,
   borderRadius: 15,
   backgroundColor: "#ffffff",
   width: 330,
   height: 55,
   bottom:280,
   right:125,
 },
 Txt7:{
   position: "absolute",
   top: 5,
   right: 90,
   fontSize: 15,
   fontFamily: "Poppins, sans-serif",
   fontWeight: "300",
   color: "#007BB5",
   width: 210,
   height: 33,
   left:20,
 },
  Person_pin_circle:{
    alignSelf: "Left",
    right:110,
    top:5,
    width:17.49,
    height:17.49,
  },
  button: {
    alignSelf: "Left",
    right:130,  
    width:48,
    height:48,
    bottom:875,
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