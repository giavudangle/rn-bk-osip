import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import New from './new'

export default class News extends Component{
    constructor() {
        super()
        this.data = [
            {
                imgURL: 'https://www.stdio.vn/statics/external_data/files/training_stdio_vn/blog/104/tuong-lai-cua-cpp(1).jpg', 
                title:'C++ - Vị Thần Của Quá Khứ, Hiện Tại Và Vị Lai', 
                headline: 'Thật dễ dàng để nghĩ rằng C/C++ đã cũ, lỗi thời hoặc dễ dàng thay thế bằng một số ngôn ngữ mới hơn, xu hướng hơn...',
                link: 'https://training.stdio.vn/blog/cpp-vi-than-cua-qua-khu-hien-tai-va-vi-lai-104'
            },
            {
                imgURL: 'https://www.stdio.vn/statics/external_data/files/training_stdio_vn/blog/107/nhung-ngon-ngu-lap-trinh-tot.jpg', 
                title:'Những Ngôn Ngữ Lập Trình Top Của Năm', 
                headline: 'Đây là hướng dẫn cho bất cứ ai muốn chọn lập trình ngôn ngữ phù hợp cho bản thân trong những bước đầu bước vào thế giới lập trình',
                link: 'https://training.stdio.vn/blog/nhung-ngon-ngu-lap-trinh-top-cua-nam-107'
            },
            {
                imgURL: 'https://www.stdio.vn/statics/external_data/files/training_stdio_vn/blog/106/5-dieu-lam-toi-yeu-thich-react-native.png', 
                title:'5 Điều Làm Tôi Yêu React Native', 
                headline: 'Không cần phải biết Objective-C, Swift hoặc Java. Với JavaScript và JSX là có thể viết ứng dụng chạy tốt trên mọi nền tảng.',
                link: 'https://training.stdio.vn/blog/5-dieu-lam-toi-yeu-react-native-106'
            },
        ]
    }
  
    render() {
        return (
        <View style={{flex:1, marginLeft: 15, marginRight: 15, paddingBottom: 50}}>
            <FlatList
                data={this.data}
                renderItem={({item}) => 
                    <View style={styles.new}>
                        <New 
                            imgURL={item.imgURL} 
                            title={item.title} 
                            headline={item.headline}
                            link={item.link}>
                        </New>
                    </View>}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 5
    },
    new: {
        flex: 1,
        height: 300,
        marginBottom: 5,
        backgroundColor: '#FFFFFF',
    },

});
