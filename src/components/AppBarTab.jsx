import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const AppBarTab = ({tabName, style}) => {
    return (
        <View style={{marginLeft:5, marginRight:5}}>
            <Text style={style.text}>{tabName}</Text>
        </View>
    );
};

export default AppBarTab;