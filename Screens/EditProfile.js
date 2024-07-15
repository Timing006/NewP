import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function EditProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <View
          style={{
            backgroundColor: "grey",
            padding: 35,
            borderRadius: "50%",
            marginTop: 15,
          }}
        >
          <FontAwesome5 name="user-alt" size={70} color="black" />
          <FontAwesome5 name="camera" size={15} color="black" />
        </View>
      </View>
      <View style={{ width: "" }}>
        <TextInput style={styles.input} placeholder="@JohnDoe" />
        <TextInput style={styles.input} placeholder="JohnDoe@example" />
        <TextInput style={styles.input} placeholder="Tel +234" />
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
        >
          <Text style={styles.text}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9e6e6",
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    width: 140,
    alignSelf: "center",
    flex: 1,
    position: "absolute",
    top: 40,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: "#7e7e7e",
    padding: 25,
    marginTop: 10,
    borderRadius: 30,
  },
  btn: { backgroundColor: "#8282fa", padding: 25, borderRadius: 30, top: 20 },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
