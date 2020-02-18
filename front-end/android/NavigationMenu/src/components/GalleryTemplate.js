import React from "react";
import { View, StyleSheet, Image, TouchableOpacity,Dimensions } from "react-native";

// import { IMG_PROFILE_SAMPLE, IMG_SAMPLE,PLAY_BUTTON } from "../../assets/images";
import { Text, ProgressiveImage } from "../ui";
// import Utils from "../helpers/Utils";
// import { AppNavigation, ScreenConfigs } from "../navigation";
// const screenWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  personImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1, 
    borderColor: "white"
  },
  img: {
    width:'100%',
    height: "100%"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'white'
  }
});

const Template = (post, onPress ) => {
  return(
    <View style={{width:'100%', flex:1, backgroundColor:'white'}}>
      <ProgressiveImage
          thumbnailSource={{
            uri: "https://govap.hochiminhcity.gov.vn/documents/10217/Tin%20tuc-2018-6-22/1529658544663DSC_0047%20-%20Copy.JPG/5c15a885-45c3-4f12-b7e2-2f66c5870b9f"
          }}
          source={{
            uri: "https://static-cdn.uef.edu.vn/newsimg/sinh-vien/Muahexanh-2016/mua%20he%20xanh%20(3).jpg"
          }}
          resizeMode="cover"
          style={[ 
            {
              width:"100%",
              position: "absolute",
              aspectRatio:1
            } 
          ]}
          imageStyle={{ borderRadius: 7 }}
        />
         <TouchableOpacity
            activeOpacity={1}
            style={[styles.centerView]}
            onPress = {onPress}
          >
             {/* {post.media.type === "video" ? (
              <Image
                source={PLAY_BUTTON}
                resizeMode="contain"
                style={{ width: 50, height: 50, opacity: 0.8 }}
              />
            ) : null}  */}
          </TouchableOpacity>
          </View>
  )
}

const GalleryTemplate1 =  (data) =>{
  let out="hi"
  let postIds = data.posts.map(obj => obj._id);
  return (
  <View style={styles.container} key={1}>
    <TouchableOpacity
      activeOpacity={1}
      onPress= {data.onPress}
      style={[{ width: "100%", aspectRatio: 2 }, styles.center]}
    >
        {Template(data.posts[0], data.onPress)}
    </TouchableOpacity>
  </View>
)};

const GalleryTemplate2 = (data) => {
  let postIds = data.posts.map(obj => obj._id);
  return (
    <View style={styles.container}>
        <TouchableOpacity style={[{ width: "50%", aspectRatio: 1, paddingRight:1 }, styles.center]}
         onPress= {()=>data.onPress(postIds)}
         activeOpacity={1}>
        {Template(data.posts[0] , data.onPress)}
        </TouchableOpacity>
        <TouchableOpacity style={[{ width: "50%", aspectRatio: 1, paddingLeft:1 }, styles.center]}
        onPress= {()=>data.onPress(postIds)}
        activeOpacity={1}>
          {Template(data.posts[1], data.onPress)}
        </TouchableOpacity>
      </View>
    )};
const GalleryTemplate3 = (data) => {
  let postIds = data.posts.map(obj => obj._id);
return (
  <View style={styles.container}>
    <TouchableOpacity
    // activeOpacity={1}
      onPress= {()=>data.onPress(postIds)}
      style={[{ width: "100%", aspectRatio: 3 }, styles.center, {paddingBottom:1}]}
    >
      {Template(data.posts[0], data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[0].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
    <TouchableOpacity style={[{ width: "50%", aspectRatio: 2 }, styles.center, {paddingRight:1, paddingTop:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
      >
        {Template(data.posts[1], data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[1].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
    <TouchableOpacity style={[{ width: "50%", aspectRatio: 2 }, styles.center, {paddingLeft:1, paddingTop:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
      >
        {Template(data.posts[2], data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[2].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
  </View>
)};

const GalleryTemplate4 = (data) => {
  // let postIds = data.posts.map(obj => obj._id);

  return (
  <View style={styles.container}>
    <TouchableOpacity style={[{ width: "50%", aspectRatio: 2 }, styles.center, {paddingBottom:1, paddingRight:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
      >
        {Template(data, data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[0].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
    <TouchableOpacity style={[{ width: "50%", aspectRatio: 2 }, styles.center, {paddingBottom:1, paddingLeft:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
      >
        {Template(data, data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[1].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
    <TouchableOpacity style={[{ width: "50%", aspectRatio: 2 }, styles.center, {paddingTop:1, paddingRight:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
      >
        {Template(data, data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[2].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
    <TouchableOpacity style={[{ width: "50%", aspectRatio: 2 }, styles.center, {paddingTop:1, paddingLeft:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
      >               
        {Template(data, data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[3].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
  </View>
)};

const GalleryTemplate5 = (data) =>{
  let postIds = data.posts.map(obj => obj._id);
return (
  <View style={styles.container}>
    <TouchableOpacity style={[{ width: "50%", aspectRatio: 2 }, styles.center, {paddingBottom:1, paddingRight:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
      >
        {Template(data.posts[0], data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[0].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
    <TouchableOpacity style={[{ width: "50%", aspectRatio: 2 }, styles.center, {paddingBottom:1, paddingLeft:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
      >
        {Template(data.posts[1], data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[1].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
    <TouchableOpacity
      style={[{ width: "33.33%", aspectRatio: 2 }, styles.center, {paddingTop:1, paddingRight:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
    >
       {Template(data.posts[2], data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[2].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
    <TouchableOpacity
      style={[{ width: "33.33%", aspectRatio: 2 }, styles.center, {paddingTop:1, paddingRight:1, padidngLeft:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
    >
        {Template(data.posts[3], data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[3].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
    <TouchableOpacity
      onPress= {()=>data.onPress(postIds)}
      style={[{ width: "33.33%", aspectRatio: 2 }, styles.center, {paddingTop:1, paddingLeft:1}]}
      activeOpacity={1}
    >
        {Template(data.posts[4], data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[4].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
  </View>
)};

const GalleryTemplate6 = (data) => {
  let postIds = data.posts.map(obj => obj._id);

  return (
  <View style={styles.container}>
    <TouchableOpacity style={[{ width: "33.33%", aspectRatio: 1 }, styles.center, {paddingBottom:1, paddingRight:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
      >
        {Template(data.posts[0], data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[0].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
    <TouchableOpacity style={[{ width: "33.33%", aspectRatio: 1 }, styles.center, {paddingBottom:1, paddingRight:1, paddingLeft:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
      >
        {Template(data.posts[1], data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[1].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
    <TouchableOpacity style={[{ width: "33.33%", aspectRatio: 1 }, styles.center, {paddingBottom:1, paddingLeft:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
      >
        {Template(data.posts[2], data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[2].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
    <TouchableOpacity style={[{ width: "33.33%", aspectRatio: 1 }, styles.center, {paddingTop:1, paddingRight:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
      >
        {Template(data.posts[3], data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[3].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
    <TouchableOpacity style={[{ width: "33.33%", aspectRatio: 1 }, styles.center, {paddingTop:1, paddingRight:1, paddingLeft:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
      >
        {Template(data.posts[4], data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[4].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
    <TouchableOpacity style={[{ width: "33.33%", aspectRatio: 1 }, styles.center, {paddingTop:1, paddingLeft:1}]}
      onPress= {()=>data.onPress(postIds)}
      activeOpacity={1}
      >
        {Template(data.posts[5], data.onPress)}
      {/* <Image source={{uri:Utils.getImgUrl(data.posts[5].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
    </TouchableOpacity>
  </View>
)};

const GalleryTemplateDefault = (data) => {
  // let postIds = data.posts.map(obj => obj._id);
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[{ width: "33.33%", aspectRatio: 1 }, styles.center, {paddingBottom:1, paddingRight:1}]}
        onPress= {()=>data.onPress(postIds)}
        activeOpacity={1}
        >
          {Template(data, data.onPress)}
        {/* <Image source={{uri:Utils.getImgUrl(data.posts[0].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
      </TouchableOpacity>
      <TouchableOpacity style={[{ width: "33.33%", aspectRatio: 1 }, styles.center,{paddingBottom:1, paddingRight:1, paddingLeft:1}]}
        onPress= {()=>data.onPress(postIds)}
        activeOpacity={1}
        >
          {Template(data, data.onPress)}
        {/* <Image source={{uri:Utils.getImgUrl(data.posts[1].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
      </TouchableOpacity>
      <TouchableOpacity style={[{ width: "33.33%", aspectRatio: 1 }, styles.center, {paddingBottom:1, paddingLeft:1}]}
        onPress= {()=>data.onPress(postIds)}
        activeOpacity={1}
        >
          {Template(data, data.onPress)}
        {/* <Image source={{uri:Utils.getImgUrl(data.posts[2].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
      </TouchableOpacity>
      <TouchableOpacity style={[{ width: "33.33%", aspectRatio: 1 }, styles.center, {paddingTop:1, paddingRight:1}]}
        onPress= {()=>data.onPress(postIds)}
        activeOpacity={1}
        >
          {Template(data, data.onPress)}
        {/* <Image source={{uri:Utils.getImgUrl(data.posts[3].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
      </TouchableOpacity>
      <TouchableOpacity style={[{ width: "33.33%", aspectRatio: 1 }, styles.center,{paddingTop:1, paddingRight:1, padidngLeft:1}]}
        onPress= {()=>data.onPress(postIds)}
        activeOpacity={1}
        >
          {Template(data, data.onPress)}
        {/* <Image source={{uri:Utils.getImgUrl(data.posts[4].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
      </TouchableOpacity>
      <TouchableOpacity style={[{ width: "33.33%", aspectRatio: 1, backgroundColor:'blue'}, styles.center, {paddingTop:1, paddingLeft:1}]}
        onPress= {()=>data.onPress(postIds)}
        activeOpacity={1}
        >
          <View style={{width:'100%', height:'100%'}}>
            <ProgressiveImage
              thumbnailSource={{uri: "http://www.hanoimoi.com.vn/Uploads/maichi/2017/2/25/25232017102340DSC00825.jpg"}}
              // source={{
              //   uri: Utils.getImgUrl(data.posts[5].media.path.thumbnail)
              // }}
              resizeMode="cover"
              style={[ 
                {
                  width:"100%",
                  aspectRatio:1,
                  position: "absolute",
                } 
              ]}
              imageStyle={{ borderRadius: 7 }}
            />
            <View style={{backgroundColor:'rgba(255,255,255,0.7)', flex:1, justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontSize:25, color:"#7D153F"}}>+25</Text>
            </View>
          </View>
        {/* <Image source={{uri:Utils.getImgUrl(data.posts[5].media.path.thumbnail)}} resizeMode="cover" style={styles.img} /> */}
      </TouchableOpacity>
    </View>
)};

export function generateGalleryTemplate(posts, onPress) {  
  switch (7) {
    case 1:
      return <GalleryTemplate1 posts={posts} onPress={onPress}/>;
    case 2:
      return <GalleryTemplate2 posts={posts} onPress={onPress}/>;
    case 3:
      return <GalleryTemplate3 posts={posts} onPress={onPress}/>;
    case 4:
      return <GalleryTemplate4 posts={posts} onPress={onPress}/>;
    case 5:
      return <GalleryTemplate5 posts={posts} onPress={onPress}/>;
    case 6:
      return <GalleryTemplate6 posts={posts} onPress={onPress}/>;
    default:
      return <GalleryTemplateDefault posts={posts} onPress={onPress}/>;
  }
}
