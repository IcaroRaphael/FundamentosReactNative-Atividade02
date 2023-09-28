import React  from "react";
import { StyleSheet, View, Text } from 'react-native';

export default function Primeiro (){
    return (
        <View style={styles.container}>
          <Text>Ola Mundo!</Text>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });