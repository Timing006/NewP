import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import { FontAwesome5, MaterialCommunityIcons, FontAwesome, Ionicons, EvilIcons, MaterialIcons, AntDesign} from '@expo/vector-icons';

export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={ styles.user}>

        <View style= {{alignItems: "center", paddingTop:30}}>
            <View style={{backgroundColor: "grey", padding: 25, borderRadius: 55, marginBottom: 15}}>
              <FontAwesome5 name="user-alt" size={60} color="black" />
            </View>
            <Text style= {{fontSize: 23, fontWeight: "bold"}}>John Doe</Text>
            <TouchableOpacity style={styles.btn} activeOpacity={0.4} onPress={() => navigation.navigate("EditProfile")}>
                <Text style={{fontSize:17}}>Edit Profile</Text>
                <MaterialCommunityIcons name="account-edit" size={24} color="black" />
            </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor:"white", flex: 1.9, borderTopStartRadius: 35, borderTopEndRadius: 35}}>
        <ScrollView style={{width: "90%", alignSelf: "center", flex:1}}>
            <View style={styles.profileList}>
                <FontAwesome name="history" size={24} color="black" />
                <Text  style={styles.profileListText}>Order History</Text>
            </View>
            <View style={styles.profileList}>
                <Ionicons name="notifications-circle-outline" size={24} color="black" />
                <Text style={styles.profileListText}>Notification</Text>
            </View>
            <View style={styles.profileList}>
                <EvilIcons name="credit-card" size={24} color="black" />
                <Text style={styles.profileListText}>Cards</Text>
            </View>
            <View style={styles.profileList}>
                <FontAwesome name="flag-o" size={24} color="black" />
                <Text style={styles.profileListText}>Country</Text>
            </View>
            <View style={styles.profileList}>
                <MaterialIcons name="password" size={24} color="black" />
                <Text style={styles.profileListText}>Change Password</Text>
            </View>
            <View style={styles.profileList}>
                <AntDesign name="customerservice" size={24} color="black" />
                <Text style={styles.profileListText}>Customer Care</Text>
            </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e9e6e6", 
    },
    user: {
        width: "95%",
        flex:1,
        alignSelf: "center"

    }, 
    btn:{
        // backgroundColor:"#3131dd",
        padding:10,
        borderRadius:370,
        flexDirection: "row",
       alignItems: "center",
       gap: 7
    },
    profileList: {
        flexDirection:"row",
        // flex: 1,
        alignItems: "center", 
        gap: 20,
        height:70
    },
    profileListText: {
        fontSize: 17
    }
})