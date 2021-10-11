import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, Image, FlatList} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Constants/theme";
import images from "../../Constants/images";
import KeepDescoveringData from "../../Data/KeepDescoveringData";

const KeepDiscoverComponent = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTxt}>Keep discovering</Text>
            <View style={styles.itemContainer}>
                {KeepDescoveringData.map((item,index) => (
                    <TouchableOpacity key={index.toString()} style={{width: '50%'}} activeOpacity={.7}>
                        <View>
                            <Image style={styles.img} source={item.image}/>
                            <Text style={[FONTS.body4, {
                                flexWrap: "wrap",
                                width: '90%',
                                marginVertical: '5%'
                            }]}>{item.text}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: SIZES.padding * 1.5,
    },
    headerTxt: {
        ...FONTS.body2,
        color: COLORS.black,
        marginBottom: SIZES.padding
    },
    img: {
        width: 170,
        height: 170,
        borderRadius: SIZES.radius
    },
    itemContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    }
})

export default KeepDiscoverComponent
