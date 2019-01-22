// @flow

import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, ScrollView, Text } from 'react-native';

type Props = {

};

export default class Onboarding extends Component <Props> {
    render() {
        const { container } = styles;
        return (
            <ScrollView>
            <View style={container}>
               <ImageBackground>
                    <Text> First Screen </Text>
               </ImageBackground>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
