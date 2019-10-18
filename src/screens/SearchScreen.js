import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import SearchBar from '../../src/components/SearchBar';
import useResult from '../Hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = (props) => {

    const [term, setTerm] = useState('');
    const [searchApi, result, errorMessage] = useResult();
    
    //console.log(result);

    const filterResultByPrice = (price) =>{
        return result.filter(result => {
            //console.log(result.restaurant.price_range);
            return result.restaurant.price_range === price;
        });
    };
    
    return (
        <View style={{flex :1}}>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={()=>searchApi( term )}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <Text>We have found {result.length} results</Text>
                <ResultList 
                // navigation = {props.navigation} 
                results = {filterResultByPrice(1)} title='Cost Effective'/>
                <ResultList 
                // navigation = {props.navigation} 
                results = {filterResultByPrice(2)} title='Bit Pricer'/>
                <ResultList 
                // navigation = {props.navigation} 
                results = {filterResultByPrice(3)} title='Big Spender'/>
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({

});

export default SearchScreen;