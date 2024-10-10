# Scrollable content

We can use <ScrollView> component when we have a few elements but the better way is to use the <FlatList> component.
With <FlatList> it will only render the items that are actually visible on the screen and all the items that are off screen will only be loaded and rendered lazily as they are needed because the user is scrolling.