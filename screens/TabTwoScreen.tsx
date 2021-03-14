import React, { useState } from 'react'
import { Dimensions, Keyboard, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Input, Button } from 'react-native-elements'
import { createWord } from '../api/api'

import { Text, View } from '../components/Themed'

const { width } = Dimensions.get('screen')

export default function TabTwoScreen() {
  const [value, setValue] = useState('')
  const [date, setDate] = useState(new Date())

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setDate(currentDate)
  }

  return (
    <>
      <View style={styles.container}>
        <Input
          placeholder="Skriv inn ditt ord"
          value={value}
          onChangeText={(text) => setValue(text)}
        />

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: width,
            flexDirection: 'row',
          }}
        >
          <DateTimePicker
            value={date}
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={{
              width: 100,
              alignSelf: 'center',
            }}
          />
        </View>

        <Button
          title="Lägg till"
          titleStyle={{ paddingHorizontal: 30 }}
          onPress={async () => {
            await createWord(value, new Date())
            setValue('')
            Keyboard.dismiss()
          }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
