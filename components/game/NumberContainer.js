import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../../constants/Colors";

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderColor: Colors.accent500,
        borderRadius: 8,
        borderWidth: 4,
        justifyContent: "center",
        margin: 24,
        padding: 24,
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: "bold",
    },
});
