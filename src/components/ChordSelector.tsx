import React from 'react'
import { View, Text, Button } from 'react-native'
import {
  GenerateFifth,
  CHORDTYPES,
  NOTES
} from '../helpers/ChordCircle'

interface props {

}

const ChordSelector: React.FC<props> = (props) => {
  const fifth = GenerateFifth(0);
  const fifth2 = GenerateFifth(2);
  return(
    <View>
      {fifth.map(x => <Text key={x.note} style={{color: '#fff', padding: 5}}>{NOTES[x.note]}{CHORDTYPES.find(f => f.id === x.chord).abbr}</Text>)}
    </View>
  )
}

export default ChordSelector