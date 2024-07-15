
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../Screens/Profile';
import EditProfile from '../Screens/EditProfile';

export default function StackNavigator() {
    const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
        <Stack.Screen name='Profile' component={ProfileScreen} options={{headerStyle: {backgroundColor: "white"}}}/>
        <Stack.Screen name='EditProfile' component={EditProfile} options={{headerStyle: {backgroundColor: "white"}}}/>
    </Stack.Navigator>
  )
}