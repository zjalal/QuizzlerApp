import { NavigationContainer } from '@react-navigation/native';
import react from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import { ScoreProvider } from './components/finalScore';

const App = () => {
  
  return (
    <ScoreProvider>
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
    </ScoreProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linen',
  },
});
