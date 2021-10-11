import React from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback
} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Constants/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import images from "../../Constants/images";
import LikeData from "../../Data/LikeData";

const OfferComponent = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Offers you may like <MaterialCommunityIcons size={15} name="arrow-right-circle" color={COLORS.darkgray}/>
            </Text>
            <ScrollView style={{marginTop: 20}} horizontal showsHorizontalScrollIndicator={false}>
                {LikeData.map((item, index) => (
                    <TouchableNativeFeedback key={index.toString()} style={styles.itemContainer}>
                        <View style={styles.itemContainer}>
                            <Image style={styles.img} source={item.image}/>
                            <View style={{marginStart: 10}}>
                                <Text style={[FONTS.h4, {color: COLORS.black}]}>{item.text}</Text>
                                <Text style={[FONTS.body5, {color: COLORS.black}]}>{item.subText}</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: SIZES.padding,
        marginTop: SIZES.padding * 1.5
    },
    headerText: {
        ...FONTS.body2,
        color: COLORS.black
    },
    itemContainer: {
        width: 350,
        height: 120,
        borderColor: COLORS.darkgray,
        borderWidth: 0.5,
        borderRadius: SIZES.radius,
        marginEnd: 10,
        padding: SIZES.padding,
        flexDirection: "row",
        alignItems: "center"
    },
    img: {
        width: '30%',
        height: '100%',
        borderRadius: SIZES.radius
    }

})

export default OfferComponent
