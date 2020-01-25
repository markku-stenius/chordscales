const chordIntervals = [
  0, 2, 4, 5, 7, 9, 11
]

const fifthChords = [
  0, 1, 1, 0, 2, 1, 3
]
export const NOTES = [
  "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", 
  "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"
]

export const CHORDTYPES = [
  {id: 0, name: "Major", abbr: ""},
  {id: 1, name: "Minor", abbr: "min"},
  {id: 2, name: "7", abbr: "7"},
  {id: 3, name: "minor7-5", abbr: "m7-5"},
]

type fifth = {
  note: number,
  chord: number
}

export const GenerateFifth = (offset: number): Array<fifth> => {
  let chords = chordIntervals.map((interval, index) => ({note: interval+offset, chord: fifthChords[index]}))
  return chords
}