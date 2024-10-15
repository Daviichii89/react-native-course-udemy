import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
    const categoryID = route.params.categoryID;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryID) >= 0;
    });
    
    useLayoutEffect(() => {
        const categoryInfo = CATEGORIES.find((category) => category.id === categoryID);
        navigation.setOptions({
            title: categoryInfo.title
        });
    }, [categoryID, navigation])

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageURL: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }
        function pressHandler() {
            navigation.navigate('MealDetail', {
                categoryID: itemData.item.id
            });
        }
        return (
            <MealItem
                {...mealItemProps}
                onPress={pressHandler}
            />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})