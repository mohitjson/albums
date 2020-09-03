
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.TextStyle}> {props.headerText}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        paddingTop: 15,
        height: 100,
        alignItems: 'center',
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    TextStyle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});
export default Header;