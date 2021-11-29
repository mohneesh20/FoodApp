import React,{useState,useEffect} from 'react';
import {View,ScrollView} from 'react-native';
import SearchBar from './components/SearchBar';
import yelp from '../api/yelp';
import ResultsList from './components/ResultLists';
const Homescreen=()=>{
    const [term,setTerm]=useState('');
    const [results,setResults]=useState([]);
    const searchApi=async (Searchterm)=>{
    try{
        const response= await yelp.get('/search',{
            params:{
                limit:50,
                term:Searchterm,
                location:'san jose'
            }
        });
        // console.log('---------------');
        // console.log(JSON.stringify(response.data));
        // console.log('---------------');
      setResults(response.data.businesses);
    }
    catch(err){
        console.log(err);
    }
}
useEffect(() => {
    searchApi('pasta');
}, []);
const filterResultsByPrice=(price)=>{
    return(results.filter((result)=>{
        return(result.price===price);
    }))
};
    return(
        <View style={{flex:1}}>
            <SearchBar term={term} onTermChange={(newTerm)=>{setTerm(newTerm)}} onTermSubmit={()=>{searchApi(term)}}/>
            {/* <Text style={{marginLeft:10
             }}>{results.length}</Text> */}
             <ScrollView>
            <ResultsList  title="Cost Effective" results={filterResultsByPrice("$")}/>
            <ResultsList  title="Bit Pricier" results={filterResultsByPrice("$$")}/>
            <ResultsList title="Big Spender" results={filterResultsByPrice("$$$")}/>
             </ScrollView>
        </View>
    )
}
export default Homescreen;