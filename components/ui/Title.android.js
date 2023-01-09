import { StyleSheet, Text } from "react-native";
import React from "react";

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    title: {
        borderColor: "#fff",
        // borderWidth: Platform.OS === "android" ? 2 : 0,
        // borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderWidth: 2,
        color: "#fff",
        fontFamily: "open-sans-bold",
        fontSize: 24,
        maxWidth: "80%",
        padding: 12,
        textAlign: "center",
    },
});
