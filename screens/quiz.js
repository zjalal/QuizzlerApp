import react, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from "axios";
import Result from "./result";
import { useScore, useScoreUpdate } from "../components/finalScore";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Quiz = ({ navigation }) => {

const score = useScore();
const updateScore = useScoreUpdate();

const [questions, setQuestions] = useState([]);
const [loaded, setLoaded] = useState(false);
const [qNum, setQNum] = useState(0);
const [userAnswer, setUserAnswer] = useState("");
const [optionsSet, setOptionsSet] = useState(true);


  const fetchQuizQuestions = async() => {
    const { data } = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
    randomizeOptions(data.results[0].incorrect_answers, data.results[0].correct_answer)
    setQuestions(data.results)
    setLoaded(true)
  };

  const randomizeOptions = (arr, corr) => {
    const randInd = Math.floor(Math.random() * 4)
    arr.splice(randInd, 0, corr)
  };

  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  if (loaded && qNum>0 && optionsSet) {
  randomizeOptions(questions[qNum].incorrect_answers, questions[qNum].correct_answer);
  setOptionsSet(false);
  };

  const checkAnswer = () => {
    if (userAnswer==questions[qNum].correct_answer) {
      updateScore();
      
    }
  };

  const nextQuestion = () => {
    checkAnswer();
    setUserAnswer();
    setOptionsSet(true);
    if(qNum==9) {
      navigation.navigate("Result");
    }
    else {
      setQNum(qNum+1);
    }
  };


  return (
    <View style={styles.container}> 
    {loaded && (
      <View style={styles.parent}>
      <View style={styles.top}>
        <Text style={styles.question}>Q.{qNum + 1}: {questions[qNum].question}</Text>
      </View>
     <View style={styles.options}>
       <TouchableOpacity style={styles.optionButton}
       onPress={() => setUserAnswer(questions[qNum].incorrect_answers[0])}
       >
          <Text style={styles.option}>{questions[qNum].incorrect_answers[0]}</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.optionButton}
       onPress={() => setUserAnswer(questions[qNum].incorrect_answers[1])}
       >
          <Text style={styles.option}>{questions[qNum].incorrect_answers[1]}</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.optionButton}
       onPress={() => setUserAnswer(questions[qNum].incorrect_answers[2])}
       >
          <Text style={styles.option}>{questions[qNum].incorrect_answers[2]}</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.optionButton}
       onPress={() => setUserAnswer(questions[qNum].incorrect_answers[3])}
       >
          <Text style={styles.option}>{questions[qNum].incorrect_answers[3]}</Text>
       </TouchableOpacity>
       <View style={styles.chosenAnswerBox}>
      <Text style={styles.chosenAnswer}
      >Your chosen answer is: {userAnswer} </Text>
      </View>
     </View>

     <View style={styles.bottom}>
      <TouchableOpacity onPress={() => navigation.navigate("Result")}
       style={[styles.button, endButtonColor]}>
         <Text style={styles.buttonText}>END</Text>
       </TouchableOpacity>
       <TouchableOpacity style={[styles.button, scoreButtonColor]}>
         <Text style={styles.buttonText}>SCORE: {score}</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.button}
       onPress={nextQuestion}>
         <Text style={styles.buttonText}>NEXT</Text>
       </TouchableOpacity>
     </View>
     </View>
    )}

    </View>
  );
};

export default Quiz;

const scoreButtonColor = {backgroundColor: "#E76F51"}
const endButtonColor = {backgroundColor: "#264653"}

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "linen",
  },
  chosenAnswer: {
    fontSize:18,
    fontWeight: "700",
    color: "linen",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  button: {
    backgroundColor : "#E9C46A",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "linen",
  },
  question: {
    fontSize: 28,
    fontWeight: "600",

  },
  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "linen", 

  },
  chosenAnswerBox: {
    backgroundColor: "#2A9D8F",
    padding: 12,
    paddingVertical: 12,
    marginVertical: 6,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginTop: 50,
  },
  optionButton: {
    backgroundColor: "#F4A261",
    padding: 12,
    paddingVertical: 12,
    marginVertical: 6,
    borderRadius: 12,
    paddingHorizontal: 12,
   },
   parent: {
     height: "100%",
   }
});

