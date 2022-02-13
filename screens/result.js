import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useScore, useCleanScore } from '../components/finalScore';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { SafeAreaView } from 'react-native-safe-area-context';

const Result = ({ navigation }) => {

  const score = useScore();
  const cleanScore = useCleanScore();

  const pressHandler = () => {
    navigation.navigate("Home");
    cleanScore();
  }

  return (
    <View styles={styles.container}>
      <View style={styles.top}>
        <Text style={styles.resultText}>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image 
        source={{uri:'https://64.media.tumblr.com/dc3b547c667e64b515261c98c7bed582/0f1b88dc3bd90548-89/s500x750/fe9b791bf0164398b32a2112429622c9edf7392d.gifv'}}
      style= {styles.banner}
      resizeMode='contain'
      />
      </View>

     <View style={styles.bottom}> 
        <View style={styles.scoreView}>
          <Text style={styles.scoreFont}>
            Your scores is: {score}
          </Text>
        </View>
        <TouchableOpacity onPress={pressHandler}
        style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        </View>  
    </View> 

  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 400,
    width: 400,
    backgroundColor: "linen",
  },
  scoreView: {
    backgroundColor: "#F4A261",
    padding: 12,
    alignItems: "center",
    borderRadius: 16,
    paddingVertical: 18,
    width: "80%",
    marginBottom: 75
    
  },
  scoreFont: {
    fontSize: 22,
    color: "linen",
    fontWeight: "800"
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "linen",
    padding: 30
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "linen",
  },
  top: {
    paddingTop: 70,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "linen",
    paddingBottom: 0
  },
  resultText: {
    fontSize: 48,
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#2A9D8F",
    padding: 22,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
    width: "98%",

  },
  buttonText: {
    fontSize: 18,
    fontWeight: "800",
    color: "linen",
  },
  bottom : {
    paddingVertical: 65,
    backgroundColor: "linen",
    alignItems: "center",
    justifyContent: "flex-end"
  },
});
