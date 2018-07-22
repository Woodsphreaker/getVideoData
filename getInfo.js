import data from './data/data.json'
import definePlayerByUrl from './helpers/definePlayerByUrl'
import getVideoID from './helpers/getVideoID'
import getVideoData from './helpers/getVideoData'

const {log} = console

const getVideoAttributesByUrl = url => {
  const player = definePlayerByUrl(url)
  const videoID = getVideoID(url, player)
  return getVideoData(player, videoID)
}

getVideoAttributesByUrl('https://vimeo.com/47483575')
  .then(res => log(res))
