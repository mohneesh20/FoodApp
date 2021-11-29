import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultDetail from './Detail';
import {withNavigation} from 'react-navigation';
const ResultsList=({title,results,navigation})=>{
    if(!results.length){
        return null;
    }
    return(
        <View>
            <Text style={{fontSize:30,fontWeight:'bold'}}>{title}</Text>
            <FlatList horizontal={true} data={results} keyExtractor={(result)=>result.id} renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=>{navigation.navigate('Result',{id:item.id})}}>
                        <ResultDetail result={item}/>
                    </TouchableOpacity>
                )
            }}/>
        </View>
    )
};
export default withNavigation(ResultsList);