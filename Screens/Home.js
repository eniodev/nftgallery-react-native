import { useState } from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import { COLORS, NFTData } from '../constants'
import { HomeHeader, NFTCard, FocusedStatusBar } from '../Components'


const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) =>{
      if(value.length) {
        const filteredData = NFTData.filter((data) => data.name.toLowerCase().includes(value))
        if(filteredData.length) {
          setNftData(filteredData)
        }
        else setNftData(NFTData)
      }
      else {
        return setNftData(NFTData)
      }
  }




  return (
    <SafeAreaView style= {{flex: 1}}>
      <FocusedStatusBar background = {COLORS.primary}/>

      <View style = {{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList data={nftData}
          renderItem={({item})=> <NFTCard data={item}/> }
          keyExtractor = {(item) => item.id}
          showsVerticalScrollIndicator= {false}
          ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
          />
        </View>
        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1, 
        }}>
          <View style = {{ height: 300, backgroundColor: COLORS.primary}}/>
          <View style = {{ flex: 1, background: COLORS.white}}/>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home