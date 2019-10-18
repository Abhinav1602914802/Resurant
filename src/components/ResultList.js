import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetails from '../components/ResultDetail';
import { withNavigation } from 'react-navigation';

const ResultList = ({title, results, navigation}) =>{
    console.log(results);
    if(!results)
    {
        return null;
    }
    return (

        <View style = {Styles.view}>
            <Text style = {Styles.titleStyle}>{title}</Text>
            {/* <Text >results: {props.results.length}</Text> */}
            <FlatList 
            horizontal
            data = {results}
            keyExtractor ={(result) => result.restaurant.id }
            showsHorizontalScrollIndicator = {false}
            renderItem = {({item}) => {
                return (
                <View>
                    <TouchableOpacity onPress = {() => navigation.navigate('ResultShow', {id: item.restaurant.id})}>
                        <ResultDetails result={item.restaurant} />
                    </TouchableOpacity>
                </View>
                ); 
            }}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    view: {
        marginBottom: 10
    }
});

export default withNavigation( ResultList);