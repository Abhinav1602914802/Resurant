import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultDetails = (props) => {
    return (
        <View style = {Styles.view}>
            <Image style = {Styles.image} source = {{ uri: props.result.featured_image}}/>
            <Text style = {Styles.name}>{props.result.name}</Text>
            <Text>{props.result.user_rating.aggregate_rating} starts, {props.result.all_reviews_count} reviews</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    view:{
        marginLeft: 15
    },
    image:{
        height: 120,
        width: 250,
        borderRadius:4
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultDetails;

