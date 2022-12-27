import { StyleSheet, Text, View, Dimensions } from "react-native";
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

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderColor: Colors.accent500,
        borderRadius: 8,
        borderWidth: 4,
        justifyContent: "center",
        margin: deviceWidth < 380 ? 12 : 24,
        padding: deviceWidth < 380 ? 12 : 24,
    },
    numberText: {
        color: Colors.accent500,
        fontFamily: "open-sans-bold",
        fontSize: deviceWidth < 380 ? 28 : 36,
    },
});
