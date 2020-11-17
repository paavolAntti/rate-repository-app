import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
    },
    textContainer: {
        flexDirection: 'column',
    },
    numbersContainer: {
        flexDirection: 'row',
    },
    image: {
        width: 50,
        height: 50
    },
    language: {
        backgroundColor: theme.colors.primary,
        padding: 5,
        borderRadius: 5,
        alignSelf: 'flex-start',
        color: theme.colors.tabBarText
    }
});

const RepositoryItem = ({ imageUri, fullName, description, language, forksCount, stars, ratingAverage, reviewCount}) => {
    console.log("imageuri!: ", imageUri);
    return (
        <View>
            <View style={styles.container}>
                <Image
                    source={{uri: imageUri}}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text>{fullName}</Text>
                    <Text>{description}</Text>
                    <View>
                        <Text style={styles.language}>{language}</Text> 
                    </View>
                    
                </View>
            </View>
            
        </View>
    );

};

export default RepositoryItem;