import React from "react";
import {Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import {COLORS} from "../../Constants/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const SecondComponent = props => {

    return (
        <View style={styles.parent}>
            <TouchableNativeFeedback >
                <View style={styles.Btn}>
                    <AntDesign size={25} color={COLORS.primary} name="creditcard"/>
                    <Text style={{marginHorizontal:7}}>Add a card</Text>
                    <Ionicons size={15} name="chevron-forward-outline"/>
                </View>

            </TouchableNativeFeedback>
            <TouchableNativeFeedback >
                <View style={styles.Btn}>
                    <MaterialCommunityIcons size={25} color={COLORS.primary} name="crown"/>
                    <Text style={{marginHorizontal:7}}>0 Points</Text>
                    <Ionicons size={15} name="chevron-forward-outline"/>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}
const styles = ({
    parent: {
        height: 55,
        width: "100%",
        flexDirection: 'row',
        borderColor: COLORS.lightGray2,
        borderWidth: 1.5
    },
    Btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        flexDirection: 'row',
        borderRightColor:COLORS.lightGray2,
        borderRightWidth:1.5
    }
})
export default SecondComponent
