import { Text, View } from "react-native"
import { useState } from "react"

import { EthPrice, NFTTitle } from "./SubInfo"

import { COLORS, SIZES, SHADOWS, FONTS } from "../constants"

const DetailsDesc = ({data}) => {

    const [text, setText] = useState(data.description.slice(0,200))
    const [expandText, setExpandtext] = useState(false)
  return (
    <>
    
    <View style={
        {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }
    }>
        <NFTTitle title={data.name}
        subtitle={data.creator}
        titleSize ={SIZES.extraLarge}
        subtitleSize={SIZES.font}/>

        <EthPrice price={data.price}/>
    </View>
    <View style={{
        marginVertical: SIZES.extraLarge 
        
    }}>
        <Text style={{ margin: SIZES.base, fontSize: SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary}}>
             Description
        </Text>
        <View style={{ margin: SIZES.base}}>
            <Text style={{fontSize: SIZES.small, fontFamily: FONTS.regular, color: COLORS.secondary, lineHeight: SIZES.large}}>
            {text} {!expandText && '...'}
            <Text style={{fontSize: SIZES.small, fontFamily: FONTS.semiBold, color: COLORS.primary}}
            onPress={()=> {
                if(!expandText){
                    setText(data.description);
                    setExpandtext(true);
                }
                else {
                    setText(data.description.slice(0,200));
                    setExpandtext(false);
                }

            }}
            >
                {expandText ? ' show less' : 'read more'}
            </Text>
            </Text>
           
        </View>
    </View>
    </>
  )
}

export default DetailsDesc