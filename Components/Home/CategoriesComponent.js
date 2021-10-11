import React from "react";
import {View, StyleSheet, Image, Text, TouchableOpacity, TouchableNativeFeedback} from "react-native";
import images from "../../Constants/images";
import SvgUri from 'react-native-svg-uri';
import {COLORS, SIZES} from "../../Constants/theme";
import CategoriesData from "../../Data/CategoriesData";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const CategoriesComponent = props => {
    return (
        <View style={styles.container}>
            {CategoriesData.map((item,index)=>(
                <TouchableNativeFeedback key={index.toString()} >
                    <View style={styles.itemContainer}>
                        <SvgUri
                            width="50"
                            height="50"
                            source={item.image}
                        />
                        <Text style={styles.txt}>{item.text}</Text>
                    </View>
                </TouchableNativeFeedback>
            ))}
            <TouchableNativeFeedback >
                <View style={styles.itemContainer}>
                    <View style={styles.moreBtn}>
                        <MaterialCommunityIcons color={COLORS.primary} size={30} name="dots-horizontal"/>
                    </View>
                    <Text>More</Text>
                </View>

            </TouchableNativeFeedback>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.padding,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        borderBottomColor:COLORS.lightGray2,
        borderBottomWidth:1.5
    },
    itemContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 90,
        height:100
    },
    moreBtn:{
        backgroundColor:COLORS.lightGray2,
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50
    },
    txt:{
        color:COLORS.black
    }
})

export default CategoriesComponent
