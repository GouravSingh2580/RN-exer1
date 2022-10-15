import { template } from '@babel/core'
import React from 'react'
import { View , Text, SafeAreaView, StyleSheet, Systrace } from 'react-native'
const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems:'center',
    fontSize:60,
  },
  common:{
    paddingHorizontal:10,
    paddingVertical:0,
    marginHorizontal:10,
    paddingTop:3,
    paddingLeft:100,
    paddingRight:100,
    paddingBottom:3,
    marginVertical:5,
  },
  a:{
    backgroundColor:'#2aa198'
  },
  b:{
    backgroundColor:'#268bd2'
  },
  c:{
    backgroundColor:'#d33682'
  },
  d:{
    backgroundColor:'#cb4b16'
  }
})
const App = ()=>{
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={{fontWeight: "bold", fontSize:17, paddingTop:40}}>Here are some boxes of different colors</Text>
        <View>
          <Text style={[styles.a,styles.common]}>Cyan: #2aa198</Text>
          <Text style={[styles.b,styles.common]}>Blue: #268bd2</Text>
          <Text style={[styles.c,styles.common]}>Magenta: #d33682</Text>
          <Text style={[styles.d,styles.common]}>Orange: #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default App
