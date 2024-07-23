import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  EvilIcons,
  MaterialIcons,
  AntDesign,
  FontAwesome6,
} from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {
  const [visibility, setVisibility] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={{ alignItems: "center", paddingTop: 20 }}>
          <View
            style={{
              backgroundColor: "grey",
              padding: 25,
              borderRadius: 55,
              marginBottom: 15,
            }}
          >
            <FontAwesome5 name="user-alt" size={60} color="black" />
          </View>
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>John Doe</Text>
          <Text style={{  top:3,fontSize: 23, fontWeight: "300" }}>Johndoe@anoni.com</Text>
          <View style={{ padding:3, width: "45%", top: 5,  justifyContent:"center",alignSelf:"center"}}>
            <View style ={{ alignContent: "center", alignSelf: "center"}}>

            <TouchableOpacity
              style={{backgroundColor: "#8282fa",padding:13,marginStart: 15, borderRadius: 30, justifyContent: "center"}}
              activeOpacity={0.2}
              onPress={() =>  navigation.navigate("EditProfile")}
            >
              <Text
                style={{
                  fontSize: 25,
                  // fontFamily: " Manrope_600SemiBold ",
                  color: "white",
                  alignSelf: "center"
                  
                }}
              >
                Edit Profile
              </Text>
            </TouchableOpacity>
          
            </View>
          </View>
        </View>


       {/* MODAL */}
        <Modal
          visible={visibility}
          transparent={true}
          animationType="fade"
        >
          
          <View style={styles.modalView}>
          <ScrollView>
            <View style = {styles.modalContent}>
            <Ionicons name="construct" size={24} color="black" style = {{alignSelf:"center"}}/>

            <Text style={{fontFamily: "Pacifico_400Regular"}}>Under Construction</Text>
            <TouchableOpacity onPress={()=>setVisibility(false)}  style={{top:70, padding:15, backgroundColor:"#8282fa",  justifyContent:"center", alignSelf:"centre",  borderRadius: 15}}>
              <Text style={{color:"#fff",justifyContent: "center", alignContent:"center"}}>Close Page</Text>
            </TouchableOpacity>
            </View>
          </ScrollView>
            <View style={styles.modalHeader}></View>
          </View>
        </Modal>



      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 1.9,
          borderTopStartRadius: 35,
          borderTopEndRadius: 35,
        }}
      >
        <ScrollView
          style={{ width: "90%", alignSelf: "center", flex: 1 }}
          showsVerticalScrollIndicator="false"
          horizontal="false"
        >
           <TouchableOpacity style={styles.listBtn} activeOpacity="0.5">
            <View style={styles.profileList}>
            <MaterialIcons name="privacy-tip" size={24} color="black" />
              <Text style={styles.profileListText}>Privacy</Text>
              {/* <AntDesign name="rightcircleo" size={24} color="#5b4646"/> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listBtn} activeOpacity="0.5">
            <View style={styles.profileList}>
              <FontAwesome name="history" size={24} style={styles.icons} />
              <Text style={styles.profileListText}>Purchase History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listBtn} activeOpacity="0.5">
            <View style={styles.profileList}>
            <AntDesign name="setting" size={24} color="black" />
              <Text style={styles.profileListText}>Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listBtn} activeOpacity="0.5"  onPress={() => setVisibility(true)}>
            <View style={styles.profileList}>
            <MaterialIcons name="upgrade" size={30} color="black" />
              <Text style={styles.profileListText}>Upgrade to PRO</Text>
            </View>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.listBtn} activeOpacity="0.5">
            <View style={styles.profileList}>
              <EvilIcons
                name="credit-card"
                size={33}
                color="black"
                style={styles.icons}
              />
              <Text style={styles.profileListText}>Cards</Text>
            </View>
          </TouchableOpacity>
         

         
          <TouchableOpacity style={styles.listBtn} activeOpacity="0.5">
            <View style={styles.profileList}>
              <FontAwesome6
                name="map-location"
                size={24}
                color="black "
                style={styles.icons}
              />
              <Text style={styles.profileListText}>Track Package</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listBtn} activeOpacity="0.5">
            <View style={styles.profileList}>
              <MaterialIcons
                name="password"
                size={24}
                color="black"
                style={styles.icons}
              />
              <Text style={styles.profileListText}>Change Password</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listBtn} activeOpacity="0.5">
            <View style={styles.profileList}>
              <AntDesign
                name="customerservice"
                size={24}
                color="black"
                style={styles.icons}
              />
              <Text style={styles.profileListText}>Customer Care</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundImage: "",
    flex: 1,
    fontFamily: "600SemiBold",

    backgroundColor: "transparent",
  },
  user: {
    width: "95%",
    flex: 1,
    alignSelf: "center",
    alignContent: "center",

  },
  btn: {
    // backfaceVisibility: "visible",
    //    width: "95%",
    padding: 10,
    // borderRadius:370,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  profileList: {
    flexDirection: "row",
    // flex: 1,
    alignItems: "center",
    gap: 20,
    height: 70,
    width: "100%",
  },
  profileListText: {
    fontSize: 17,
  },
  // icons: {
  //   color: "#040000",
  // },
  modalView:{
    backgroundColor: "#e9e6e6",
    height: "43%",
    borderBottomEndRadius: 30, 
    borderBottomStartRadius:30
  }, 
  modalContent:{
    top:40,
    alignSelf: "center",
    justifyContent: "center"
  }
});
