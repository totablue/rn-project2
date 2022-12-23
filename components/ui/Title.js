import { StyleSheet, Text } from "react-native";
import React from "react";

import Colors from "../../constants/Colors";

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    title: {
        borderColor: "#fff",
        borderWidth: 2,
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        padding: 12,
        textAlign: "center",
    },
});
