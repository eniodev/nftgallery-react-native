import { COLORS, FONTS, SIZES, assets } from "../constants"
import {View, Text, Image, TextInput} from "react-native"

function HomeHeader({onSearch}) {
  return (
    <View
    style = {{
        backgroundColor: COLORS.primary,
        padding: SIZES.font
    }}>
       
    <View style = {{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"


    }}>
         <Text style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.extraLarge,
            color: COLORS.white
         }}
         
         >SHOTTY</Text>
        
          <View>
            <View  
                style={{
                    width: 45,
                    height: 45
                }}
            >
                    <Image
                    source={assets.person01}
                    resizeMode="contain"
                    style={{width: "100%", height: "100%"}}
                    />
                     <Image
                    source={assets.badge}
                    resizeMode="contain"
                    style={{position: "absolute", width: 15, height: 15, bottom: 0, right: 0}}
                    />
            </View>
    </View>
    </View>

    <View
        style={{
            marginVertical: SIZES.font
        }}
    >
        <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white
        }}>
            Hello, Énio 👋🏿
        </Text>
        <Text style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base/2
        }}>
            Let's find a masterpiece!
        </Text>

    </View>
    <View
        style= {{marginTop: SIZES.font}}
    >
        <View style={{
                width: "100%",
                borderRadius: SIZES.font,
                backgroundColor: COLORS.gray,
                flexDirection: 'row', 
                alignItems: "center",
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.small - 2
               

        }}>
            <Image
                source={assets.search}
                resizeMode= "contain"
                style = {{
                    width: 20, height: 20, marginRight: SIZES.base
                }}
            
            />
            <TextInput placeholder="What piece are you looking for ?"
                style={{
                    flex: 1
                }}
                onChangeText={onSearch}
            
            />

        </View>
    </View>
    </View>
    
  )
}

export default HomeHeader