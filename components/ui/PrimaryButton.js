import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

import Colors from "../../constants/Colors";

const PrimaryButton = ({ children, onPress }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                android_ripple={{ color: Colors.primary600 }}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        elevation: 2,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});
