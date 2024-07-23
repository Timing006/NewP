import { Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState, useContext } from 'react'
import { AppButton } from '../Components/AppButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from './profile';
import { Theme } from '../Components/Theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../Components/GlobalVariables';
import { Formik } from 'formik';

function Home({ navigation }) {
    const { userUID, setUserUID, userImg } = useContext(AppContext)
    const [visibility, setVisibility] = useState(false)
    const uid = "7AFA94B1KJ35BJHBJ7GCHF8XFXF2G4__99_90";


    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            <Text style={styles.text}>Home</Text>
            {/* <Image source={userImg} style={{}} /> */}
            <Text>HomeScreen</Text>
            <Text>UID: {userUID}</Text>
            <Formik
                initialValues={{ fname: "", lname: "", email: "", password: "" }}
                onSubmit={(value) => {
                    console.log(value);
                }}
            >
                {(prop) => {
                    return (
                        <View>

                            <TextInput
                                placeholder="First name"
                                style={styles.input}
                                onChangeText={prop.handleChange("fname")}
                            />
                            <TextInput
                                placeholder="Last name"
                                style={styles.input}
                                onChangeText={prop.handleChange("lname")}
                            />
                            <TextInput
                                placeholder="Email name"
                                style={styles.input}
                                onChangeText={prop.handleChange("email")}
                            />
                            <AppButton onPress={prop.handleSubmit} >Edit Profile</AppButton>
                        </View>
                    )
                }}
            </Formik>
            <AppButton onPress={() => setUserUID(uid)} >Profile</AppButton>
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