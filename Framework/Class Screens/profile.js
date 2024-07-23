import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppButton } from '../Components/AppButton'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Profile({ navigation }) {

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text>Profile</Text>
      <AppButton onPress={() => navigation.navigate("EditProfile")} >Edit Profile</AppButton>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})