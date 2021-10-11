import React from "react";
import {Image, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import images from "../../Constants/images";
import Ionicons from "react-native-vector-icons/Ionicons";
import TypeWriter from "react-native-typewriter";
import {COLORS, SIZES} from "../../Constants/theme";

const HeaderComponent = props => {
    return(
        <View style={styles.headerBar}>
            <TouchableNativeFeedback >
                <View style={styles.searchBox}>
                    <TouchableNativeFeedback >
                        <View style={styles.scanContainer}>
                            <Image style={{width: 17, height: 17, resizeMode: 'contain'}} source={images.scan}/>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.searchTextContainer}>
                        <Ionicons size={20} name="search-outline"/>
                        <TypeWriter typing={1}>pizza company</TypeWriter>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}
const styles = ({
    headerBar: {
        height: 65,
        width: '100%',
        backgroundColor: COLORS.primary,
        padding: SIZES.padding * 1.5
    },
    searchBox: {
        height: 40,
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        flexDirection: 'row'
    },
    scanContainer: {
        backgroundColor: COLORS.lightGray,
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: SIZES.radius,
        borderBottomLeftRadius: SIZES.radius
    },
    searchTextContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width:'80%'
    }
})

export default HeaderComponent
