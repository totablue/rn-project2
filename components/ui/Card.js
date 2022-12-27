import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";

import Colors from "../../constants/Colors";

const Card = ({ children }) => {
    return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        justifyContent: "center",
        // Box Shadow in React Native: elevation -> Android, shadow(color, offset, radius, opacity) -> iOS
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,

        marginHorizontal: 24,
        marginTop: deviceWidth < 380 ? 18 : 36,
        padding: 16,
    },
});
