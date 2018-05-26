const CRIME_DATA_LINK = 'https://data.code4sa.org/resource/fgg4-qjnk.json'

const THREAT_LEVEL = (level) => level < 100 ? '#4fb783' : level <= 200
  ? '#ff6600'
  : '#ce2525'

const AUDIO = new Audio(require('./Siren-SoundBible.com-1094437108.mp3'))

export {
  CRIME_DATA_LINK,
  THREAT_LEVEL,
  AUDIO
}