import React,{useState} from "react"
import { StyleSheet, Image, Text, View, ImageBackground,TouchableOpacity,Pressable,ScrollView,SafeAreaView,count } from "react-native"

const Laundry = () => {
   const [count, setCount] = useState(0);
   const [count1, setCount1] = useState(0);
   const [count2, setCount2] = useState(0);
   const [count3, setCount3] = useState(0);
   const [count4, setCount4] = useState(0);
   const [count5, setCount5] = useState(0);
   const onPress = () => setCount(prevCount => prevCount + 1);
    const onPress1 = () => setCount(prevCount => prevCount - 1);
    const onPress2 = () => setCount1(prevCount => prevCount + 1);
    const onPress3 = () => setCount1(prevCount => prevCount - 1);
    const onPress4 = () => setCount2(prevCount => prevCount + 1);
    const onPress5 = () => setCount2(prevCount => prevCount - 1);
    const onPress6 = () => setCount3(prevCount => prevCount + 1);
    const onPress7 = () => setCount3(prevCount => prevCount - 1);
    const onPress8 = () => setCount4(prevCount => prevCount + 1);
    const onPress9 = () => setCount4(prevCount => prevCount - 1);
    const onPress10 = () => setCount5(prevCount => prevCount + 1);
    const onPress11 = () => setCount5(prevCount => prevCount - 1);
  return (
    <View style={styles.Signup}>
      <View style={styles.Group257}>
        <View style={styles.Group258}>
          <View style={styles.Group582}>
            <View style={styles.Group1}>
            </View>
            <View style={styles.Group164}>
              <ScrollView style={styles.Group118}>
              <TouchableOpacity>
              <View style={styles.Group2}>
              <Text style={styles.gt1}>Best Seller</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.Group3}>
              <Text style={styles.gt2}>Gents</Text>
              </View></TouchableOpacity>
              <TouchableOpacity>            
              <View style={styles.Group4}>
              <Text style={styles.gt2}>Ladies</Text>
              </View></TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.Group5}>
              <Text style={styles.gt2}>Kids</Text>
              </View></TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.Group6}>
              <Text style={styles.gt2}>others</Text>
              </View></TouchableOpacity>
              <View style={styles.Group7}>
              <Text style={styles.gt3}>Best sellers</Text>
              </View>
                <View style={styles.Group8}>
                <Text style={styles.Txt905}>Pant</Text>
                <Text style={styles.Txt90}>
          Gents
        </Text>
        <Text style={styles.Txt91}>Starts at ₹9</Text>
                <Image
              style={styles.pant}
              source={require('../assets/pant.png')}
            />
            <View style={styles.Rectangle12}>
            <Text style={styles.Txt9}>50% OFF</Text>
            </View>
             <View style={styles.con1}>
      <View style={styles.countContainer}>
        <Text style={styles.txt}>        {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button1}
        onPress={onPress}
      >
        <Image
          style={styles.Cellu}
          source={require('../assets/plus.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={onPress1}
      >
        <Image
          style={styles.Cellu1}
          source={require('../assets/miinus.png')}
        />
        </TouchableOpacity>
      </View>      
      </View> 
      <View style={styles.Group8}>
                <Text style={styles.Txt905}>Shirt</Text>
                <Text style={styles.Txt90}>
          Gents
        </Text>
        <Text style={styles.Txt91}>Starts at ₹9</Text>  
                <Image
              style={styles.pant}
              source={require('../assets/shirt.png')}
            /> 
            <View style={styles.con2}>
      <View style={styles.countContainer}>
        <Text style={styles.txt}>        {count1}</Text>
      </View>
      <TouchableOpacity
        style={styles.button1}
        onPress={onPress2}
      >
        <Image
          style={styles.Cellu}
          source={require('../assets/plus.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={onPress3}
      >
        <Image
          style={styles.Cellu1}
          source={require('../assets/miinus.png')}
        />
        </TouchableOpacity>
      </View>      
      </View>
      <View style={styles.Group8}>
                <Text style={styles.Txt905}>T Shirt</Text>
                <Text style={styles.Txt90}>
          Ladies
        </Text>
        <Text style={styles.Txt91}>Starts at ₹152.00</Text>     
                <Image
              style={styles.pant}
              source={require('../assets/tshirt.png')}
            />
            <View style={styles.Rectangle12}>
            <Text style={styles.Txt9}>30% OFF</Text>
            </View>
            <View style={styles.con3}>
      <View style={styles.countContainer}>
        <Text style={styles.txt}>        {count2}</Text>
      </View>
      <TouchableOpacity
        style={styles.button1}
        onPress={onPress4}
      >
        <Image
          style={styles.Cellu}
          source={require('../assets/plus.png')}
        /> 
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={onPress5}
      >
        <Image
          style={styles.Cellu1}
          source={require('../assets/miinus.png')}
        />
        </TouchableOpacity>
      </View> 
      </View>
      <View style={styles.Group8}>
                <Text style={styles.Txt905}>Crop Top</Text>
                <Text style={styles.Txt90}>
          Ladies
        </Text>
        <Text style={styles.Txt91}>Starts at ₹19</Text>      
                <Image
              style={styles.pant}
              source={require('../assets/top.png')}
            />
            <View style={styles.con4}>
      <View style={styles.countContainer}>
        <Text style={styles.txt}>        {count3}</Text>
      </View>
      <TouchableOpacity
        style={styles.button1}
        onPress={onPress6}
      >
        <Image
          style={styles.Cellu}
          source={require('../assets/plus.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={onPress7}
      >
        <Image
          style={styles.Cellu1}
          source={require('../assets/miinus.png')}
        />
        </TouchableOpacity>
      </View> 
      </View>
      <View style={styles.Group8}>
                <Text style={styles.Txt905}>Single Bedsheet</Text>
                <Text style={styles.Txt90}>
          others
        </Text>
        <Text style={styles.Txt91}>Starts at ₹119</Text>  
                <Image
              style={styles.pant}
              source={require('../assets/bedsheet.png')}
            />
            <View style={styles.Rectangle12}>
            <Text style={styles.Txt9}>10% OFF</Text>
            </View>
            <View style={styles.con5}>
      <View style={styles.countContainer}>
        <Text style={styles.txt}>        {count4}</Text>
      </View>
      <TouchableOpacity
        style={styles.button1}
        onPress={onPress8}
      >
        <Image
          style={styles.Cellu}
          source={require('../assets/plus.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={onPress9}
      >
        <Image
          style={styles.Cellu1}
          source={require('../assets/miinus.png')}
        />
        </TouchableOpacity>
      </View> 
      </View>
      <View style={styles.Group8}>
                <Text style={styles.Txt905}>Single Bed Blanket</Text>
                <Text style={styles.Txt90}>
          others
        </Text>
        <Text style={styles.Txt91}>Starts at ₹29</Text>    
                <Image
              style={styles.pant}
              source={require('../assets/bedblank.png')}
            />
            <View style={styles.con6}>
      <View style={styles.countContainer}>
        <Text style={styles.txt}>        {count5}</Text>
      </View>
      <TouchableOpacity
        style={styles.button1}
        onPress={onPress10}
      >
        <Image
          style={styles.Cellu}
          source={require('../assets/plus.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={onPress11}
      >
        <Image
          style={styles.Cellu1}
          source={require('../assets/miinus.png')}
        />
        </TouchableOpacity>
      </View> 
      </View>
      <TouchableOpacity>
            <View style={styles.Group15}>
              <Text style={styles.Txt539}>Basket</Text>
              <Text style={styles.Txt530}>$20.49</Text>
              <Text style={styles.Txt53}>3</Text>
              <Text style={styles.Txt52}>item</Text>
            </View>
            </TouchableOpacity>     
              </ScrollView>             
            </View>
            <Image
              style={styles.img3}
              source={require('../assets/menu.png')}
            />          
            <Pressable>
      <TouchableOpacity>     
      <Image
              style={styles.button}
              source={require('../assets/button.png')}
            />
              </TouchableOpacity>
              </Pressable>
              <TouchableOpacity>
             <Image
              style={styles.img2}
              source={require('../assets/img2.png')}
            />
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
  img3: {
    alignSelf: "Left",
    left:0,
    width:360,
    height:90,
    bottom:274,
  },
  Group582: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    borderRadius: 1,
    backgroundColor: "#f6f6f6",
    width: 360,
    height: 590,
    bottom:40,
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
    bottom:-100,
    right:125,
  },
  button: {
    alignSelf: "Left",
    right:130,
    width:48,
    height:48,
    bottom:979,
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
  Group1: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 124,
    paddingRight: 124,
    marginBottom: 36,
    borderRadius: 1,
    backgroundColor: "#007bb5",
    width: 360,
    height: 120,
    top:0,
  },
  gt1: {
    position: "absolute",
    top: 5,
    left:20,
    fontSize: 14,
    fontFamily: "Poppins,sans-serif",
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight:27,
    width: 90 ,
    height: 33,
    fontStyle:"normal",
 },
 gt2: {
    position: "absolute",
    top: 5,
    left:12,
    fontSize: 14,
    fontFamily: "Poppins,sans-serif",
    fontWeight: "500",
    color: "#838383",
    lineHeight:27,
    width: 90 ,
    height: 33,
    fontStyle:"normal",
 },
 gt3: {
    position: "absolute",
    top: 5,
    left:12,
    fontSize: 18,
    fontFamily: "Poppins,sans-serif",
    fontWeight: "600",
    color: "#0F0E0E",
    lineHeight:27,
    width: 130 ,
    height: 33,
    fontStyle:"normal",
 },
 Group2: {
  borderRadius: 15,
  backgroundColor: "#007bb5",
  width: 104,
  height: 35,
  bottom:10,
  right:125,
},
Group3: {
  borderRadius: 15,
  backgroundColor: "#FFFFFF",
  width: 62,
  height: 35,
  bottom:45,
  right:20,
},
Group4: {
  borderRadius: 15,
  backgroundColor: "#FFFFFF",
  width: 66,
  height: 35,
  bottom:80,
  left:43,  
},
Group5: {
  borderRadius: 15,
  backgroundColor: "#FFFFFF",
  width: 50,
  height: 35,
  bottom:115,
  left:109.5,
},
Group6: {
  borderRadius: 15,
  backgroundColor: "#FFFFFF",
  width: 67,
  height: 35,
  bottom:150,
  left:160,
},
Group7: {
  borderRadius: 15,
  backgroundColor: "#f6f6f6",
  width: 132,
  height: 40,
  bottom:150,
  right:130,
},
Group8: {
  paddingTop: 14,
  paddingBottom: 14,
  paddingLeft: 124,
  paddingRight: 124,
  marginBottom: 17,
  borderRadius: 15,
  backgroundColor: "#FFFFFF",
  width: 300,
  height: 90,
  bottom:140,
  right:100,
},
Txt905: {
  fontSize: 14,
  fontFamily: "Poppins, sans-serif",
  fontWeight: "400",
  color: "rgba(15,14,14,1)",
  position:'absolute',
  left:95,
},
Txt90: {
  fontSize: 12,
  fontFamily: "Poppins, sans-serif",
  fontWeight: "400",
  color: "#838383",
  position:'absolute',
  left:95,
  top:35,
},
Txt9: {
  fontSize: 12,
  fontFamily: "Poppins, sans-serif",
  fontWeight: "600",
  color: "#FFFFFF",
  position:'absolute',
  left:10,
  top:7,
},
Txt91: {
  fontSize: 14,
  fontFamily: "Poppins, sans-serif",
  fontWeight: "500",
  color: "#0F0E0E",
  position:'absolute',
  left:95,
  top:60,
},
 pant:{
   right:123,
   bottom:14,
   width:90,
   height:90,
 },
 img2: {
  alignSelf: "Left",
  left:130,
  width:48,
  height:48,
  bottom:1023,
},
Group15: {
  paddingTop: 15,
  paddingBottom: 16,
  paddingLeft: 117,
  paddingRight: 115,
  borderRadius: 15,
  backgroundColor: "#6DC54A",
  elevation: 1,
  width: 300,
  height: 70,
  bottom:110,
  right:100,
},
Txt539: {
  fontSize: 16,
  fontFamily: "Poppins, sans-serif",
  fontWeight: "600",
  color: "rgba(255, 255, 255, 1)",
  textAlign: "center",
  justifyContent: "center",
  position:'absolute',
  right:120,
  top:27,
},
Txt530: {
 fontSize: 16,
 fontFamily: "Poppins, sans-serif",
 fontWeight: "600",
 color: "rgba(255, 255, 255, 1)",
 textAlign: "center",
 justifyContent: "center",
 position:'absolute',
 right:10,
 top:27,
},
Txt53: {
 fontSize: 20,
 fontFamily: "Poppins, sans-serif",
 fontWeight: "600",
 color: "rgba(255, 255, 255, 1)",
 textAlign: "center",
 justifyContent: "center",
 position:'absolute',
 right:270,
 top:23,
},
Txt52: {
 fontSize: 14,
 fontFamily: "Poppins, sans-serif",
 fontWeight: "400",
 color: "#FFFFFF",
 textAlign: "center",
 justifyContent: "center",
 position:'absolute',
 right:225,
 top:26.8,
},
Rectangle12: {
  backgroundColor: "rgba(255,112,0,1)",
  width: 79,
  height: 28,
  opacity: 0.8,
  right:124,
  bottom:42,
  borderRadius:15,
  borderTopLeftRadius:1,
},
txt: {
  fontSize: 15,
  fontFamily: "SF Pro Text, sans-serif",
  fontWeight: "600",
  color: "#000000",
  textAlign:"centre",
  justifyContent:"centre",
  position:"absolute",
  width: 55,
  right:-5,
  bottom:-2,
},
Cellu:{
      alignItems: "center",
  padding: 10,
  backgroundcolor:"#000000",
  width:14,
  height:10.05,
  bottom:10,
},
Cellu1:{
      alignItems: "center",
  padding: 10,
  backgroundcolor:"#000000",
  width:-50,
  height:10.05,
  bottom:10,
},
con1:{
        width:88,
        height:25,
        backgroundColor:"#f6f6f6",
        bottom:100,
        borderRadius:15,
        left:70,
        flexDirection:"column",
},
con2:{
  width:88,
  height:25,
  backgroundColor:"#f6f6f6",
  bottom:75,
  borderRadius:15,
  left:70,
  flexDirection:"column",
},
con3:{
  width:88,
  height:25,
  backgroundColor:"#f6f6f6",
  bottom:105,
  borderRadius:15,
  left:70,
  flexDirection:"column",
},
con4:{
  width:88,
  height:25,
  backgroundColor:"#f6f6f6",
  bottom:80,
  borderRadius:15,
  left:70,
  flexDirection:"column",
},
con5:{
  width:88,
  height:25,
  backgroundColor:"#f6f6f6",
  bottom:100,
  borderRadius:15,
  left:70,
  flexDirection:"column",
},
con6:{
  width:88,
  height:25,
  backgroundColor:"#f6f6f6",
  bottom:76,
  borderRadius:15,
  left:70,
  flexDirection:"column",
},

button1: {
  alignItems: "center",
  backgroundColor: "#f6f6f6",
  padding: 10,
  marginBottom:10,
  width:14,
  height:10.05,
  bottom:17,
  left:60,
},
 button2: {
  alignItems: "center",
  backgroundColor: "#f6f6f6",
  padding: 10,
  marginBottom:10,
  width:1,
  height:10.05,
  bottom:47,
  left:10,
},
countContainer: {
  alignItems: "center",
  padding: 10,
  backgroundcolor:"#000000",
  width:58,
},

}
);

export default Laundry;