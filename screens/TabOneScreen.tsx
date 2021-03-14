import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { view } from '@risingstack/react-easy-state'
import { wordsStore } from '../api/store'
import { getWords, Word } from '../api/api'

import { Text, View } from '../components/Themed'

function TabOneScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, marginRight: 10 }}>Ord</Text>
        <View from={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Text style={styles.header}>{wordsStore.words.length}</Text>
        </View>
      </View>
      {wordsStore.words.map((word: Word, index: number) => {
        return (
          <View key={index} style={styles.word}>
            <Text style={{ fontSize: 24, fontWeight: '700', flex: 1 }}>
              {word.word}
            </Text>
            <Text style={{ fontSize: 24 }}>
              {new Date(word.date).toLocaleDateString('no-NB')}
            </Text>
          </View>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 50,
    fontWeight: '900',
    marginVertical: 20,
    color: '#5226EE',
  },
  word: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 10,
  },
})

export default view(TabOneScreen)
