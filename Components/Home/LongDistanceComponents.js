import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, TouchableNativeFeedback} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Constants/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import images from "../../Constants/images";

const LongDistanceComponents = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                GrabFood Long Distance Delivery  <MaterialCommunityIcons size={15} name="arrow-right-circle" color={COLORS.darkgray}/>
            </Text>
            <View style={styles.imgContainer}>
                <TouchableNativeFeedback>
                    <View>
                        <Image source={images.distanceOne} style={styles.oneImg}/>
                        <Text style={{marginVertical:4}}>More food choices</Text>
                        <Text style={FONTS.body5}><MaterialIcons name="menu-book"/>1 min read</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <View>
                        <Image source={images.distanceTwo} style={styles.oneImg}/>
                        <Text style={{marginVertical:4}}>From further restaurants</Text>
                        <Text style={FONTS.body5}><MaterialIcons name="menu-book"/>1 min read</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.padding * 1.3
    },
    headerText: {
        ...FONTS.body2,
        color: COLORS.black
    },
    oneImg:{
        height:175,
        width:175,
        borderRadius:SIZES.radius
    },
    imgContainer:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:'space-between'
    }
})

export default LongDistanceComponents
