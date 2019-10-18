import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import Zomato from '../api/Zomato'

const ResultShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    //console.log(id);
    console.log(result);
    const getResult = async (id) => {
        const responce = await Zomato.get(`/restaurant?res_id=${id}`);
        setResult(responce.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    return (
        <View>
            {/* <Text>{result.name}</Text> */}
            <FlatList
                data={result.photos}
                keyExtractor={(result) => result.photo.id}
                renderItem={({ item }) => {
                    return (
                        <View>
                        <Image style = {Styles.image} source={{uri : item.photo.url}}/>
                        </View>
                    );
                }}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        margin: 10
    }
});

export default ResultShowScreen;