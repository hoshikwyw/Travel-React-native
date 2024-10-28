import Colors from "@/constants/Colors"
import { ListingType } from "@/types/listingTypes"
import { FontAwesome5, Ionicons } from "@expo/vector-icons"
import { Link } from "expo-router"
import { useEffect, useState } from "react"
import { FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from "react-native"

type Props = {
    listingData: any[];
    category: string;
}
const Listings = ({listingData, category}: Props) => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)    
        }, 200)
    }, [category])
    const renderItems:ListRenderItem<ListingType> = ({item}) => {
        return(
            <Link href={`/listing/${item.id}`} asChild>
            <TouchableOpacity>
                <View style={styles.item}>
                    <Image 
                        style={styles.image}
                        source={{uri: item.image}} />
                    <View style={styles.bookmark}>
                        <Ionicons name="bookmark-outline" size={20} color={Colors.white} />
                    </View>
                    <Text 
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.itemTxt}
                    >
                        {item.name}
                    </Text>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-between"
                    }}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <FontAwesome5
                                size={18}
                                color={Colors.primaryColor}
                                name="map-marker-alt" />
                            <Text style={styles.locationTxt}>{item.location}</Text>
                        </View>
                        <Text style={styles.itemPrice}>${item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </Link>
        )
    }
    return (
        <View>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={loading ? [] : listingData} 
                renderItem={renderItems} />
        </View>
    )
}

export default Listings

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        width: 220,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 30,
    },
    bookmark: {
        position: "absolute",
        top: 185,
        right: 30,
        backgroundColor: Colors.primaryColor,
        padding: 10,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: Colors.white
    },
    itemTxt: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.black,
        marginBottom: 10,
    },
    locationTxt: {
        fontSize: 12,
        marginLeft: 5,
    },
    itemPrice: {
        fontSize: 12,
        fontWeight: "600",
        color: Colors.primaryColor,
    }
})

