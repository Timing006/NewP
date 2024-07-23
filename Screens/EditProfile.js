import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  formik,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";

const validation = yup.object({
  email: yup.string().email("invalid email").required("Email is required"),
  username: yup
    .string()
    .min(1, "")
    .required("Username is required"),
  phone: yup
    .number()
    .max(11, "Phone number must be 11 digit")
    .min(11, "Phone number must be 11 digit"),
});
export default function EditProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <View
          style={{
            backgroundColor: "#ddd9d9",
            width: 150,
            height: 150,
            borderRadius: 80,
            marginTop: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome5 name="user-alt" size={70} color="black" />
        </View>
        <View
          style={{
            position: "absolute",
            top: 120,
            left: 100,
            backgroundColor: "#a8a7a7",
            padding: 10,
            borderRadius: 50,
          }}
        >
          <TouchableOpacity>
            <FontAwesome5 name="camera" size={26} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Formik
        initialValues={{ username: "", email: "", phone: "" }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={validation}
      >
        {(prop)=>{
          return(
            <View style={styles.form}>
            <TextInput style={styles.input} placeholder="@JohnDoe" onChangeText={prop.handleChange("username")} onBlur ={prop.handleBlur("username")}/>
            <TextInput style={styles.input} placeholder="JohnDoe@example" onChangeText={prop.handleChange("email")} onBlur ={prop.handleBlur("email")}/>
            <TextInput style={styles.input} placeholder="Tel +234" onChangeText={prop.handleChange("phone")} onBlur={prop.handleBlur("phone")}/>
            <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress= {prop.handleSubmit}>
              <Text style={styles.text}>Update Profile</Text>
            </TouchableOpacity>
          </View>
          )
        } }
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    fontFamily: "",
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
    padding: 10,
    marginTop: 5,
    borderRadius: 30,
  },
  btn: { backgroundColor: "#8282fa", padding: 10, borderRadius: 30, top: 15 },

  text: {
    fontSize: "16",
    textAlign: "center",
    color: "#fff",
    fontFamily: "600SemiBold",
  },
  form: {
    // justifyContent: "center",
    // alignSelf: "center",
    alignItems: "center",
  },
});
//bottom navigation can only be implemented on homescreen.
//modal{has animationType:("slide","fade" and "none"), you can set transparency to ={true}}
//flex:1 means take available space
