import React, {Component} from 'react';
import {Animated, TouchableOpacity, View, Image} from "react-native";
import { Text, ProgressiveImage } from "../../ui";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const SIZE = 70;
class QRButton extends React.Component {

    render() {
     
        return (
            <View style={{
                position: 'absolute',
                alignItems: 'center',
                top: -SIZE/2 - 10
            }}>
                <View
                    underlayColor="#2882D8"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZE+4,
                        height: SIZE+4,
                        borderRadius: (SIZE +4 )/ 2,
                        borderColor: '#2882D8',
                        borderWidth: 4,
                        backgroundColor: 'white'
                    }}
                >
                    <View style={{flex:1, justifyContent:'center', alignSelf:'center'}}>
                    <Icon
                    name={"qrcode-scan"}
                    backgroundColor="rgba(255,255,255,0)"
                    color="#333"
                    size = {45}
                    />
                    </View>
                </View>
            </View>
        );
    }
}
export default QRButton;
