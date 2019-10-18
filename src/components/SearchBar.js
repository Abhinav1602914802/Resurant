import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import  Feather from 'react-native-vector-icons/Feather';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return ( 
        <View style={Styles.viewStyle}>
            <Feather
             name="search"
             style = {Styles.iconStyle}
            />
            <TextInput
             autoCapitalize="none"
             autoCorrect={false}
             placeholder='Search'
             style={Styles.inputStyle}
             value={term}
             onChangeText={newTerm => onTermChange(newTerm)}
             onEndEditing={()=>onTermSubmit()}

             />
        </View>
    );
};

const Styles = StyleSheet.create({

    viewStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: "row",
        marginBottom: 10
    },
    inputStyle:{
        borderColor: 'black',
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar;