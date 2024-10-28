import Colors from "@/constants/Colors"
import { GroupType } from "@/types/groupTypes"
import { Ionicons } from "@expo/vector-icons"
import { FlatList, Image, ListRenderItem, StyleSheet, Text, View } from "react-native"

const GroupListing = ({listings}: {listings: GroupType[]}) => {
    const renderItems: ListRenderItem<GroupType> = ({item}) => {
        return (
            <View style={styles.item}>
                <Image source={{uri: item.image}} style={styles.image} />
                <View>
                    <Text style={styles.itemTxt}>{item.name}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="star" size={20} color={Colors.primaryColor} />
                        <Text style={styles.itemRating}>{item.rating}</Text>
                        <Text style={styles.itemReview}>( {item.reviews} )</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={{
            marginVertical: 20
        }}>
            <Text style={styles.title}>Top Travel Agency</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={listings} 
                renderItem={renderItems} />
        </View>
    )
}

export default GroupListing

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: "600",
        color: Colors.black,
        marginBottom: 10,
    },
    item: {
        backgroundColor: Colors.white,
        padding: 10,
        width: 330,
        borderRadius: 10,
        marginRight: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 120,
        borderRadius: 10,
        marginRight: 10
    },
    itemTxt:{
        fontSize: 14,
        fontWeight: "600",
        color: Colors.black,
        marginBottom: 8
    },
    itemRating: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.black,
        marginLeft: 5
    },
    itemReview: {
        fontSize: 14,
        color: "#999",
        marginLeft: 8,
    }
})

