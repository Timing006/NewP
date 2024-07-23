import { Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState, useContext, useEffect } from 'react'
import { AppButton } from '../Components/AppButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from './Profile';
import { Theme } from '../Components/Theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../Components/GlobalVariables';
import { Formik } from 'formik';
import * as yup from "yup"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../Firebase/Settings';
import { doc, getDoc } from 'firebase/firestore';

const validation = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must be the same")
})

function Home({ navigation }) {
    const { userUID, setUserUID, setUserInfo, userInfo } = useContext(AppContext)
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
        getDoc(doc(db, "users", userUID))
            .then((data) => {
                setUserInfo(data.data());
            }).catch(e => console.log(e))
    }, [])


    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            <Text style={styles.text}>Home</Text>
            {/* <Image source={userImg} style={{}} /> */}
            <Text>HomeScreen</Text>
            <Text>User: {userInfo.firstname} {userInfo.lastname}</Text>
            <Formik
                initialValues={{ fname: "", lname: "", email: "", password: "", confirmPassword: "" }}
                onSubmit={(value) => {
                    // createUserWithEmailAndPassword(auth, value.email, value.password)
                    signInWithEmailAndPassword(auth, value.email, value.password)
                        .then(() => {
                            console.log("Account created successfully")
                            navigation.navigate("Profile")
                        })
                        .catch(e => console.log(e))
                    console.log(value);
                }}
                validationSchema={validation}
            >
                {(prop) => {
                    return (
                        <View>
                            <TextInput
                                placeholder="Email name"
                                style={styles.input}
                                onChangeText={prop.handleChange("email")}
                                onBlur={prop.handleBlur("email")}
                                autoCapitalize='none'
                            />
                            <Text style={{ color: "#903b3b", marginStart: 30, }}>{prop.errors.email}</Text>
                            <TextInput
                                placeholder="Last name"
                                style={styles.input}
                                onChangeText={prop.handleChange("password")}
                                onBlur={prop.handleBlur("password")}
                                autoCapitalize='none'
                                autoComplete='off'
                            />
                            <Text style={{ color: "#903b3b", marginStart: 30, }}>{prop.errors.password}</Text>
                            <TextInput
                                placeholder="Email name"
                                style={styles.input}
                                onChangeText={prop.handleChange("confirmPassword")}
                                onBlur={prop.handleBlur("confirmPassword")}
                                autoCapitalize='none'
                                autoComplete='off'
                            />
                            <Text style={{ color: "#903b3b", marginStart: 30, }}>{prop.errors.confirmPassword}</Text>
                            <AppButton onPress={prop.handleSubmit} >Edit Profile</AppButton>
                        </View>
                    )
                }}
            </Formik>
            <AppButton onPress={() => setUserUID("")} >Profile</AppButton>
            <AppButton onPress={() => setVisibility(true)} >Modal</AppButton>
            <Modal
                visible={visibility}
                transparent={true}
                animationType="slide"
            >
                <Pressable onPress={() => setVisibility(false)} style={{ flex: 1 }}></Pressable>
                <View style={styles.modal}>
                    <Text>This is a modal</Text>
                    <AppButton onPress={() => setVisibility(false)} >Close Modal</AppButton>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    modal: {
        // flex: 1,
        // marginTop: 120, 
        padding: 20,
        backgroundColor: "#b1b1b1",
        height: 500,
    },
    input: {
        padding: 10,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "green",
        margin: 5
    }
});

const Tab = createBottomTabNavigator();

export function HomeScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    if (route.name === 'HomePage') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    } else if (route.name === 'PostJob') {
                        iconName = focused ? 'plus' : 'plus-box-outline';
                    }
                    return <Ionicons name={iconName} size={25} color={color} />;
                },
                tabBarActiveTintColor: Theme.colors.primary,
                tabBarInactiveTintColor: Theme.colors.gray,
                headerShown: false,
            })}
        >
            <Tab.Screen name="HomePage" component={Home} options={{ title: "Home" }} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}