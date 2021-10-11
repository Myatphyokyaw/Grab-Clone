import React from "react";
import {Image, View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback} from "react-native";
import images from "../../Constants/images";
import {COLORS, FONTS, SIZES} from "../../Constants/theme";

const SawMikeComponents = props => {
    return (
        <View style={[{flex:1},styles.container]}>
            <TouchableNativeFeedback >
                <View style={{}}>
                    <Image style={styles.image} source={images.sawMike}/>
                    <Text style={styles.txt}>Enjoy 50% Off on your fave from Sushi King</Text>
                </View>

            </TouchableNativeFeedback>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingVertical:SIZES.padding * 2,
        paddingHorizontal:SIZES.padding * 1.4
    },
    image: {
        width: '100%',
        height: 190,
        borderRadius:SIZES.radius
    },
    txt:{
        marginTop:10,
        ...FONTS.body4,
        color:COLORS.black
    }
})
export default SawMikeComponents
