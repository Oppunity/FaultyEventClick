import React, {Component} from 'react';
import { StyleSheet, Text, View,ImageBackground,Image} from 'react-native';

class Comments extends Component{
  render()
  {
    return(
        <View style = {{width:'100%',height:'100%',backgroundColor:'black'}}>
          <Text style= {{color:'white' ,  fontSize:28,fontFamily: 'Avenir-Roman',fontWeight: '900',textAlign:'center',marginTop: 25}}>USD Basketball</Text>
        </View>





    )
  }
}

export default Comments;
