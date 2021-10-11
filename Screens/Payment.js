import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

const Payment = props => {
    return(
        <View>
            <Text>
                THis is Payment page
            </Text>
            <TouchableOpacity>
                <Text onPress={()=>props.navigation.navigate("About")}>Go to About</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Payment
