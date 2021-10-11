import React from "react";
import {StatusBar, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {COLORS, FONTS, SIZES} from "../Constants/theme";

const Activity = props => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.firstTxt}>
                    My Activity
                </Text>
                <TouchableOpacity activeOpacity={1} style={styles.historyBtn}>
                    <Text style={styles.secondTxt}>History</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding * 1.5
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    firstTxt:{
        ...FONTS.body1,
        color:COLORS.black,
        fontWeight:"bold"
    },
    historyBtn:{
        justifyContent:"center",
        alignItems:"center",
    },
    secondTxt:{

    }
})

export default Activity
