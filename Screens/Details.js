import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../constants'
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../Components'
import React from 'react';


const DetailsHeader = ({ data, navigation}) => {
    return(<View  
    style={{
        width: "100%",
        height: 373
    }}>
        <Image
            source={data.image}
            resizeMode="cover"
            style={{
                width: "100%",
                height: "100%"
            }}
        />
        <CircleButton imgUrl = {assets.left}
        handlePress={()=> navigation.goBack()}
        left= {15}
        top={StatusBar.currentHeight + 2 }/>

<CircleButton imgUrl = {assets.heart}
        right= {15}
        top={StatusBar.currentHeight + 2 }/>

    </View>
)}
const Details = ({route, navigation}) => {
  const {data} = route.params;
  
    return (
    <SafeAreaView  stye={{flex: 1 }}>
        <FocusedStatusBar
            barStyle = "dark-content"
            backgroundColor = "transparent"
            transLucent = {true}
        
        />
        <View style = {{
            width: "100%",
            position: 'absolute',
            bottom: 0,
            paddingVertical: SIZES.font,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255, 0.5)",
            zIndex: 1,


        }
        }>
            <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}/>
        </View>
        <FlatList data = {data.bids} 
        renderItem = {({item})=><DetailsBid bid={item}/>}
        keyExtractor = {(item)=> item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent = {()=> (
            <React.Fragment>
                <DetailsHeader data={data} navigation={navigation}/>
                <SubInfo/>
                <View style={{
                    padding: SIZES.font
                }}>
                    <DetailsDesc data= {data}/>
                    {data.bids.length > 0 && (
                        <Text style={{
                            fontSize: FONTS.font, 
                            fontFamily: FONTS.semiBold, 
                            color: COLORS.primary, 
                            marginLeft: SIZES.base,
                        }}>
                            Current Bids
                        </Text>
                    )}

                </View>
            </React.Fragment>
    )}
        />
    </SafeAreaView>
  )
}

export default Details