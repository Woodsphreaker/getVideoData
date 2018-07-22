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

// #### parallel process ####
const processAllList = (data) => {
  const allData = data.map(({vURL}) => getVideoAttributesByUrl(vURL))
  return Promise.all(allData)
}
processAllList(data)
  .then(res => log(res))

// #### sequential process ####
const processAllListSeq = (data) =>
  data.reduce((acc, {vURL}) => {
    return acc.then(store => {
      return getVideoAttributesByUrl(vURL).then(res => {
        return store.concat(res)
      })
    })
  }, Promise.resolve([]))

processAllListSeq(data)
  .then(res => log(res))
