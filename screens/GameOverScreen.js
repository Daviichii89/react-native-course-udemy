import { Text, View } from "react-native";

function GameOverScreen({userNumber}) {
    return (
        <View>
            <Text>GAME OVER!</Text>
            <Text>The number is {userNumber}!</Text>
        </View>
    );
}

export default GameOverScreen;