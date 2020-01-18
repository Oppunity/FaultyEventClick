import React, {Component, Fragment} from 'react';
import {StyleSheet, Text, View,ImageBackground,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './src/lib/router';


const AppIndex = createAppContainer(AppNavigator) 

export default class App extends Component {
  render()
  {
  return (
    
      <View style = {{width:100 + "%", height: 100 + "%", backgroundColor:'black'}}>
        <View style ={styles.userview}>
        <Text style={styles.username}>USDbasketball</Text>
        </View>
        <View style={styles.userpic}>
        <Image 
        source={{uri: 'https://usdtoreros.com/images/2018/11/22/Massalski_1.jpg?width=1920&quality=80&format=jpg'}}
        style={{width: 35, height: 35, borderRadius: 35}}/>


        </View>
        
            <View style = {styles.top}> 
            <ImageBackground
        style = {styles.container}
        source={{uri: 'https://usdtoreros.com/images/2018/11/22/Massalski_1.jpg?width=1920&quality=80&format=jpg'}}/>
           
            
            </View>   
            <Text style = {styles.event}>Toreros vs SDSU</Text> 
               
              <View style = {styles.tabBar}> 

                  <AppIndex/>  

              </View>
        </View>  

    )  
}  
}  

const styles = StyleSheet.create({  
    
  headerText: {
      color: 'white',
      fontSize: 20,
      textAlign: "center",
      marginTop: 10
  },
  container:{
    height: 270,
    width: 350,
    position: 'absolute',
    top: 60
  },
  
 tabBar: {
    top: 240,
    height: 100 + '%'  
  },
  
event:{
  color:'white',
  fontSize:28,
  fontFamily: 'Avenir-Roman',
  fontWeight: '900',
  textAlign:'center',
  marginTop: 25
  
},

  top:
  {
   top: 55,
   width: 300,
   height: 50,
   flexDirection: 'row',
   justifyContent: 'center',
   left: 32,
  
   
  },
  userview:{
    backgroundColor: 'black',
    height: 20,
    width: 300,
    position: 'absolute',
    top: 17

  },
  username:{
    color:'cyan',
    fontSize: 14,
    position:'absolute',
    top: 33,
    right: 0
  },
  userpic:{
    backgroundColor: 'black',
    height: 16,
    width: 20,
    position: 'absolute',
    top: 42,
    right:43
  }

   
});  