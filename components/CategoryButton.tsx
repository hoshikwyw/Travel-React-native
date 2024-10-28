import Colors from "@/constants/Colors"
import destinationCategoreis from "@/data/categories"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useRef, useState } from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

type Props = {
    onCategoryChange: (category: string) => void
}

const CategoryButton = ({onCategoryChange}:Props) => {
    const scrollRef = useRef<ScrollView>(null);
    const itemRef = useRef<TouchableOpacity[] | null[]>([])
    const [activeIndex, setActiveIndex] = useState(0)

    const handleSelectCategory = (index:number) => {
        const itemWidth = 100;
        const scrollOffset = index * itemWidth;
        const selected = itemRef.current[index]
        setActiveIndex(index)
        selected?.measure((x) => {
            scrollRef.current?.scrollTo({ x: scrollOffset, y: 0, animated: true });
        })
        onCategoryChange(destinationCategoreis[index].title)
    }

    return (
        <View>
            <Text style={styles.title}>Categories</Text>
            <ScrollView 
            ref = {scrollRef}
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{
                gap: 20,
                paddingVertical: 10,
                marginBottom: 10,
            }}>
                {destinationCategoreis.map((item, index) => (
                    <TouchableOpacity 
                        key={index}
                        ref={(el) => itemRef.current[index] = el}
                        onPress={() => handleSelectCategory(index)} 
                        style={activeIndex === index ? styles.categoryBtnActive : styles.categoryBtn}>
                        <MaterialCommunityIcons name={item.iconName as any} size={20} color={activeIndex === index ? Colors.white : Colors.black} />
                        <Text style={activeIndex === index ? styles.categoryBtnTxtActive : styles.categoryBtnTxt}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default CategoryButton

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: "600",
        color: Colors.black,
    },
    categoryBtn: {
        flexDirection: "row",
        alignContent: "center",
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: "#333333",
        shadowOffset: {width:1, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    categoryBtnActive: {
        flexDirection: "row",
        alignContent: "center",
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: "#333333",
        shadowOffset: {width:1, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    categoryBtnTxt: {
        marginLeft: 5,
        color: Colors.black,
    },
    categoryBtnTxtActive: {
        marginLeft: 5,
        color: Colors.white,
    }
})