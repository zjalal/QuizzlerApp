import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Title from '../components/title';

const Home = ({navigation}) => {

  const pressHandler = () => {
    navigation.navigate("Quiz")
  };
  
  return (
    <View style={styles.container}>
    <Title />
    <View style={styles.bannerContainer}>
      <Image source={{uri:'https://64.media.tumblr.com/054e46318aedc08e13a2d7d0a78ae831/040b32cb8349296a-55/s500x750/5ffa325daaf32800ec8dce230af387f5f9f3aa0e.gifv'}}
      style= {styles.banner}
      resizeMode='contain'
      />
    </View>
    <TouchableOpacity onPress={pressHandler}
    style={styles.button}>
      <Text style={styles.buttonText}>Start</Text>
    </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    banner: {
        height: 400,
        width: 500,
      },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "linen"
    },
    container: {
      paddingTop: 40,
      paddingHorizontal: 20,
      height: "100%",
      backgroundColor: "linen",
    },
    button: {
      width: '100%',
      backgroundColor: "#E9C46A",
      padding: 16,
      borderRadius: 16,
      alignItems: 'center',
      marginBottom: 30,
    },
    buttonText: {
      fontSize: 24,
      fontWeight: "600",
      color: "linen",

    }
});

