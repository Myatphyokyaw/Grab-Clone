import React, {useRef} from "react";
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    RefreshControl,
    TouchableNativeFeedback
} from "react-native";
import {COLORS, SIZES} from "../Constants/theme";
import HeaderComponent from "../Components/Home/HeaderComponent";
import SecondComponent from "../Components/Home/SecondComponent";
import SawMikeComponents from "../Components/Home/SawMikeComponents";
import LongDistanceComponents from "../Components/Home/LongDistanceComponents";
import OfferComponent from "../Components/Home/OfferComponent";
import KeepDiscoverComponent from "../Components/Home/KeepDiscoverComponent";
import Animated from 'react-native-reanimated';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomTabPannel from "../Components/Home/BottomTabPannel";
import CategoriesData from "../Data/CategoriesData";
import SvgUri from "react-native-svg-uri";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
const Home = props => {
    const [refreshing, setRefreshing] = React.useState(false);
    const bs = React.createRef();
    const fall=new Animated.Value(1)
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const refRBSheet = useRef();
    return (

        <ScrollView refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
           } style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary}/>
            <HeaderComponent/>
            <SecondComponent/>
            <View style={styles.container2}>
                {CategoriesData.map((item, index) => (
                    <TouchableNativeFeedback key={index.toString()}>
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
                <TouchableNativeFeedback onPress={() => refRBSheet.current.open()}>
                    <View style={styles.itemContainer}>
                        <View style={styles.moreBtn}>
                            <MaterialCommunityIcons color={COLORS.primary} size={30} name="dots-horizontal"/>
                        </View>
                        <Text>More</Text>
                    </View>

                </TouchableNativeFeedback>

            </View>
            <SawMikeComponents/>
            <LongDistanceComponents/>
            <OfferComponent/>
            <KeepDiscoverComponent/>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={650}
                customStyles={{
                    container: {
                        borderTopLeftRadius:20,
                        borderTopRightRadius:20,
                    },
                    wrapper: {
                        backgroundColor: 'rgba(7,7,7,0.46)'
                    },
                    draggableIcon: {
                        backgroundColor: COLORS.secondary
                    }
                }}
            >
                <BottomTabPannel />
            </RBSheet>
        </ScrollView>
    )
}
const styles = ({
    container: {
        flex: 1,
    },
    container2: {
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

export default Home
