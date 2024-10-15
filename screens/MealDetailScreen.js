import { Button, Image, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation}) {
    const mealID = route.params.categoryID;
    const mealInfo = MEALS.find((meal) => meal.id === mealID);
    const mealDetailsProps = {
        duration: mealInfo.duration,
        complexity: mealInfo.complexity,
        affordability: mealInfo.affordability,
    }
    function headerButtonPressHandler() {
        console.log('Pressed custom button!')
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={headerButtonPressHandler} />
            }
        })
    }, [navigation, headerButtonPressHandler]);
    return (
        <ScrollView style={styles.rootContainer}>
            <View style={styles.outerContainer}>
                <Image source={{uri: mealInfo.imageUrl}} style={styles.image} />
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{mealInfo.title}</Text>
                    <MealDetails {...mealDetailsProps} />
                    <View style={styles.listOuterContainer}>
                        <View style={styles.listContainer}>
                            <Subtitle>Ingredients</Subtitle>
                            <List data={mealInfo.ingredients} />
                            <Subtitle>Steps</Subtitle> 
                            <List data={mealInfo.steps} />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    outerContainer: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    image: {
        width: '100%',
        height: 200,
    },
    innerContainer: {
        
        borderRadius: 8,
        overflow: 'hidden',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        margin: 8,
        color: '#3f2f25',
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%',
    }
});