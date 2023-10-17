import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Dropdown from '../components/Dropdown';

const categories = ['Select Category', 'Computer', 'English', 'Maths', 'General  Knowledge']
const options = ['Correct Option', 'Option A', 'Option B', 'Option C', 'Option D', 'Option E']
const type = ['Select Type', 'Text', 'Iage']

const AddQuestionScreen = () => {
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedType, setSelectedType] = useState('');

  //when category optionis slected
  const handleCategoryOptionSelection = (option) => {
    setSelectedCategory(option)
  }

  //when 'correct option' option is selected 
  const handleSelectedOptionSelection = (option) => {
    setSelectedOption(option)
  }

  //when type option is selected => text or image type
  const handleTypeOptionSelection = (option) => {
    setSelectedType(option)
  }

  return (
    <ScrollView
      style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}
      horizontal={false}>
      <View style={{ paddingBottom: 20 }}>

        <Dropdown data={categories} onSelected={handleCategoryOptionSelection} />
        <Dropdown data={type} onSelected={handleTypeOptionSelection} />

        <TextInput
          placeholder='question'
          style={[styles.input, { height: 120, textAlignVertical: 'top' }]}
          value={question}
          onChangeText={input => setQuestion(input)}
          multiline={true} />
        <TextInput
          placeholder='option a'
          style={styles.input}
          value={option1}
          onChangeText={input => setOption1(input)}
        />
        <TextInput
          placeholder='optaion b'
          style={styles.input}
          value={option2}
          onChangeText={input => setOption2(input)}
        />
        <TextInput
          placeholder='option c'
          style={styles.input}
          value={option3}
          onChangeText={input => setOption3(input)}
        />
        <TextInput
          placeholder='option d'
          style={styles.input}
          value={option4}
          onChangeText={input => setOption4(input)}
        />

        <Dropdown data={options} onSelected={handleSelectedOptionSelection} />

      </View>
    </ScrollView>
  )
}

export default AddQuestionScreen

const styles = StyleSheet.create({
  input: {
    width: '98%',
    height: 52,
    borderWidth: .5,
    borderColor: '#8E8E8E',
    padding: 8,
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 16
  }
})