import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight/2,
    paddingLeft: 10,
    paddingRight:10,
    display: 'flex',
    backgroundColor: theme.colors.tabBar,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
  },
    text: {
        color: theme.colors.tabBarText,
    }
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback>
            <AppBarTab
                tabName={"Repositories"}
                style={styles}
            />
        </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBar;