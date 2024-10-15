import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
};

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#3f2f25',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 4,
        padding: 6,
    },
    subtitleContainer: {
        color: '#3f2f25',
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: 'black',
        borderBottomWidth: 2,

    },
})