import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { COLORS } from '../constants';
import QuestionScreen from '../screens/QuestionScreen';
import AddQuestionScreen from '../screens/AddQuestionScreen';

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'
      options={{
      }}>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#f3f3f300" },
          headerShadowVisible: false,
          headerShown: false,
          headerTitle: "",
          animation: 'slide_from_right'

        }} />
      <Stack.Screen
        name='AddQuestionScreen'
        component={AddQuestionScreen} />



      <Stack.Screen name='QuestionScreen' component={QuestionScreen}
        options={{
          headerStyle: { backgroundColor: "#f3f3f300" },
          headerShadowVisible: false,
          headerShown: true,
          headerTitle: "",
          animation: 'slide_from_right',
        }} />

    </Stack.Navigator>
  )
}

export default ScreenNavigator
