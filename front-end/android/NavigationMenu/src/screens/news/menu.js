import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default class Menu extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Text>Hot topics</Text>
                </View>
                <View style={styles.button}>
                    <Text>Recruitment</Text>
                </View>
                <View style={styles.button}>
                    <Text>Present</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    button: {
        flex:1,
        height:100,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        margin:5,
        alignItems: "center",
        justifyContent: "center"
    }
});
