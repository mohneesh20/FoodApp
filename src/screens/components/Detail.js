import React from 'react';
import {View,Image,StyleSheet,Text} from 'react-native'; 
const ResultDetail=({result})=>{
return(
    <View style={{marginHorizontal:2}}>
        <Image source={{uri:result.image_url}} style={styles.image}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars,{result.review_count} Reviews</Text>
    </View>
);
};
const styles=StyleSheet.create({
    image:{
        height:120,
        width:250,
        borderRadius:5,
        marginBottom:10
    },
    name:{
        fontWeight:'500',
        color:'red'
    }
});
export default ResultDetail;