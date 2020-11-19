import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        margin: 10
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 10
    },
    numbersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5
    },
    language: {
        backgroundColor: theme.colors.primary,
        padding: 5,
        borderRadius: 5,
        alignSelf: 'flex-start',
        color: theme.colors.tabBarText
    },
    numbersEntry: {
        alignItems: 'center'
    }
});


const RepositoryItem = ({ imageUri, fullName, description, language, forksCount, stars, ratingAverage, reviewCount}) => {
    const kStars = () => (stars/1000).toFixed(1);
    const kForks = () =>  (forksCount/1000).toFixed(1);
    return (
        <View>
            <View style={styles.container}>
                <Image
                    source={{uri: imageUri}}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text fontWeight="bold" fontSize = "subheading">{fullName}</Text>
                    <Text>{description}</Text>
                    <View>
                        <Text style={styles.language}>{language}</Text> 
                    </View>
                </View>
            </View>
            <View style={styles.numbersContainer}>
                <View style={styles.numbersEntry}>
                    <Text fontWeight="bold">{kStars()}k</Text>
                    <Text>Stars</Text>
                </View>
                <View style={styles.numbersEntry}>
                    <Text fontWeight="bold">{kForks()}k</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.numbersEntry}>
                    <Text fontWeight="bold">{reviewCount}k</Text>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.numbersEntry}>
                    <Text fontWeight="bold">{ratingAverage}k</Text>
                    <Text>Rating</Text>
                </View>
            </View>
            
        </View>
    );

};

export default RepositoryItem;