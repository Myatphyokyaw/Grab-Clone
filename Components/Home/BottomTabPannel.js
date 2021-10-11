import React from "react";
import {ScrollView, Text, TouchableNativeFeedback, View, StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../Constants/theme";
import BottonTabHeaderData from "../../Data/BottonTabHeaderData";


const BottomTabPannel = props => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {BottonTabHeaderData.map(({id,text}) => (
                    <TouchableNativeFeedback onPress={()=>alert("Hello")} key={id.toString()}>
                        <View style={true ? styles.headerBtnFocus : styles.headerBtn}>
                            <Text>
                                {text}
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.padding,
        marginTop: SIZES.padding * 2
    },
    headerBtnFocus: {
        backgroundColor: COLORS.secondary,
        width: 100,
        marginEnd: 10,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.radius * 3
    },
    headerBtn: {
        backgroundColor: 'red',
        width: 100,
        marginEnd: 10,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.radius * 3
    }
})

export default BottomTabPannel
