import React,{useState,useEffect} from 'react'
import { Text,FlatList,Image,StyleSheet } from 'react-native'
import yelp from '../api/yelp'
const ResultShow=({navigation})=>{
    const [result,setresult]=useState(null);
    const id=navigation.getParam("id");
    // console.log(result);
    const getresult=async (id)=>{
        try{
            const response=await yelp.get(`/${id}`);
            setresult(response.data);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getresult(id);
    },[])
    if(!result){
        return null;
    }
    return(
        <>
        <Text style={{fontSize:30,fontWeight:'bold'}}>{result.name}</Text>
        <FlatList horizontal={false} keyExtractor={(photo)=>photo} data={result.photos} renderItem={({item})=>{
            return(
                <Image source={{uri:item}} style={styles.image}/>
            )
        }}/>
        </>
    );
};
const styles=StyleSheet.create({
    image:{
        width:300,
        height:300,
        borderRadius:5,
        alignSelf:'center',
        marginVertical:5
    }
})
export default ResultShow;