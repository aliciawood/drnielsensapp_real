import React from 'react';
import { StyleSheet, Image } from 'react-native';

export class ImageWrapper extends React.Component {
    render(){
        return (
            <Image
                style={styles.image}
                source={ require('./img/logo.png')}
            />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: undefined,
        height: undefined,
        flex: 8,
        backgroundColor: 'lightgrey'
    },
});