import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { Theme } from './Theme'
import { AppContext } from '/GlobalVariables';

export function Preloader() {
    const { preloader } = useContext(AppContext);
    return (
        preloader ?
            <View style={styles.loader}>
                <ActivityIndicator color={Theme.colors.primary} size={"large"} />
            </View>
            : null
    )
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        top: 0,
        backgroundColor: "#ffffffbf",
        zIndex: 10,
    }
})