import Colors from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { Stack } from "expo-router"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import {useHeaderHeight} from "@react-navigation/elements"
import CategoryButton from "@/components/CategoryButton"
import { useState } from "react"
import Listings from "@/components/Listings"
import ListingData from "@/data/destination.json"

const Page = () => {
    const headerHeight = useHeaderHeight()
    const [category, setCategory] = useState("All")

    const onCategoryChange = (category: string) => {
        // console.log(category);
        setCategory(category)
    }

    return (
        <>
      <Stack.Screen options={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => (
            <TouchableOpacity 
                onPress={() => {}}
                style={{
                    marginLeft: 20,
                }}
            >
                <Image
                    source={{
                        uri: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654e8c568fee71420a5134b5_63ca2aa7780fcd20bb04563c_Cool%2520Snoopy%2520PFP%2520for%2520Tiktok%25201.jpeg"
                    }} 
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                    }}
                />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {}}
                style={{
                    marginRight: 20,
                    backgroundColor: Colors.white,
                    padding: 10,
                    borderRadius: 10,
                    shadowColor: "#171717",
                    shadowOffset: {width: 2, height: 4},
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                }}
            >
                <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
        )
      }} />
      <View style={[styles.container, {paddingTop: headerHeight}]}>
        <Text style={
            styles.headingTxt
        }>hello welcome to my travel app
        </Text>
        <View style={
            styles.searchSectionWrapper
        }>
            <View style={
                styles.searchBar
            }>
                <Ionicons name="search" size={18} style={{marginRight: 5}} color={Colors.black} />
                <TextInput placeholder="Search ..." />
            </View>
            <TouchableOpacity
                onPress={() => {}}
                style={styles.fillBtn}
            >
                <Ionicons name="options" size={28} color={Colors.white}  />
            </TouchableOpacity>
        </View>
        <CategoryButton onCategoryChange={onCategoryChange} />
        <Listings listingData={ListingData} category={category} />
      </View>
        </>
    )
}

export default Page 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal : 20,
        backgroundColor: Colors.bgColor,
    },
    headingTxt: {
        fontSize: 18,
        fontWeight: "600",
        color: Colors.black
    },
    searchSectionWrapper: {
        flexDirection: "row",
        marginVertical: 20,
    },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.white,
        padding: 12,
        borderRadius: 10,
    },
    fillBtn: {
        backgroundColor: Colors.primaryColor,
        padding: 10,
        borderRadius: 10,
        marginLeft: 12,
    }

})