import React, {Component}from 'react';  
import {createAppContainer} from 'react-navigation';  
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import InfoScreen from "../screens/InfoScreen";  
import CommentScreen from "../screens/CommentScreen";




const AppNavigator = createMaterialTopTabNavigator(
    {
        Home: {
            screen:InfoScreen,
            navigationOptions: 
                        {
                title: 'Info'
                        }
                },
        
        
            Profile: {
                screen: CommentScreen,
                 navigationOptions: 
                {
                    title: 'Comments'
                }
                    },
            
                 
    
                            
    },


{
tabBarOptions: {  
            activeTintColor: 'cyan',  
            showIcon: true,  
            showLabel:true,  
            style: {  
            backgroundColor:'black'  
            },

            indicatorStyle: {
            backgroundColor: 'cyan'
                            },
                }  ,
}  
    
)
    
export default createAppContainer(AppNavigator);  