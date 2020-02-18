import React, {Component} from 'react';
import { StyleSheet, Image, View, Text, TouchableHighlight} from 'react-native';
// import PopUpWebView from '../../core/PopUpWebView';
export default class New extends Component {
    constructor() {
        super()
        this.state = {
            data : null
        }
    }

    ShowPopUp() {
        this.refs.popup.show()
    }

    render() {
        const {imgURL, title, headline, link} = this.props

        return (
            
            <View style={styles.container}>
                <TouchableHighlight
                        onPress={() => {
                            this.setState({data: title})
                            this.ShowPopUp();
                        }}
                        style={styles.container}>
                    <View  style={styles.container}>
                        {/* <PopUpWebView ref='popup' link={link} title={title}></PopUpWebView> */}
                        <View style={styles.containerImage}>
                            <Image 
                                style={styles.image}
                                source={{uri: imgURL}}
                                resizeMode= "stretch"
                            />
                        </View>
                        <View style={styles.containerText}>
                            <View>
                                <Text style={styles.title}>
                                    {title}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.headline}>
                                    {headline}
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerImage: {
        flex:5
    },
    image: {
        flex:1
    },
    containerText: {
        flex:2,
        padding:5,
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    headline:
    {
        fontSize: 12,
    }
});
