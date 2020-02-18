import React, {Component} from 'react';
import {Animated, TouchableOpacity, View, Image} from "react-native";
import { Text, ProgressiveImage } from "../../ui";

// import Icon from '@expo/vector-icons/FontAwesome';
const SIZE = 70;
class QRButton extends React.Component {

    render() {
     
        return (
            <View style={{
                position: 'absolute',
                alignItems: 'center',
                top: -SIZE/2 - 10
            }}>
                <TouchableOpacity
                    // onPress={this.toggleView}
                    underlayColor="#2882D8"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZE+4,
                        height: SIZE+4,
                        borderRadius: (SIZE +4 )/ 2,
                        borderColor: '#2882D8',
                        borderWidth: 4
                    }}
                >
                    <Image 
                    source = {{uri: "https://cdn5.vectorstock.com/i/1000x1000/30/84/scan-qr-code-icon-simple-style-vector-27073084.jpg"}}
                    style={{width: SIZE, height:SIZE, borderRadius:SIZE}} 
                    resizeMode='cover'
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
export default QRButton;
