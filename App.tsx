import React from 'react'
import { StyleSheet, View } from 'react-native'

import ChordSelector from './src/components/ChordSelector'

export default function App() {
  return (
    <View style={styles.container}>
      <ChordSelector/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
