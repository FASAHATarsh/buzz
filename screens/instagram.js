import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class transaction extends Component{
    render(){
        return(
            <View>
                <Text style={{
                      color: 'blue',

                      fontSize: 20,
                      textAlign: 'center',
                      fontStyle: 'bold',
                      alignSelf: 'center',
                      fontWeight: 'bold',
                      marginTop: 100,                   
                }}>
                    Instagram Screen
                </Text>
            </View>
        )
        
    }
}