import {
    StyleSheet,
    View,
    Image,
    Text,
    useWindowDimensions,
    ScrollView,
} from "react-native";
import React from "react";

import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        borderRadius: imageSize / 2,
        height: imageSize,
        width: imageSize,
    };

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/success.png")}
                    />
                </View>
                <Text style={styles.summaryText}>
                    Your phone needed{" "}
                    <Text style={styles.highlight}>{roundsNumber}</Text> rounds
                    to guess the number{" "}
                    <Text style={styles.highlight}>{userNumber}</Text>.
                </Text>
                <PrimaryButton onPress={onStartNewGame}>
                    Start New Game
                </PrimaryButton>
            </View>
        </ScrollView>
    );
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        padding: 24,
    },
    imageContainer: {
        borderColor: Colors.primary800,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        // height: deviceWidth < 380 ? 150 : 300,
        margin: 36,
        overflow: "hidden",
        // width: deviceWidth < 380 ? 150 : 300,
    },
    image: {
        height: "100%",
        width: "100%",
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        marginBottom: 24,
        textAlign: "center",
    },
    highlight: {
        color: Colors.primary500,
        fontFamily: "open-sans-bold",
    },
});
