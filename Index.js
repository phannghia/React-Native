import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './Component/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Change code in the editor and watch it change on your phone! Save to get a shareable url.
                </Text>
                <Card>
                    <AssetExample />
                    <AssetExample />
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});