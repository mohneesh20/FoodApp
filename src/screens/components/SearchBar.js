import React from 'react';
import {Text,View,TextInput,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar=({term,onTermChange,onTermSubmit})=>{
    return(
        <View style={styles.background}>
            <Feather name='search' size={22} style={{margin:4}}/>
            <TextInput placeholder="SEARCH" style={styles.input} value={term} onChangeText={newTerm=>onTermChange(newTerm)}
            autoCorrect={false}
            autoCapitalize="none"
            onEndEditing={()=>{onTermSubmit()}}/>
        </View>
    )
}
const styles=StyleSheet.create({
    background:{
        backgroundColor:'#ffe6ed',
        margin:5,
        marginTop:10,
        borderRadius:2,
        height:30,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#636363',
    },
    input:{
        height:30,
        flex:1,
        left:10
    }
})
export default SearchBar;