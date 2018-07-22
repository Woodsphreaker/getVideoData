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
  data.reduce((acc, {vURL}) =>
    acc.then(store =>
      getVideoAttributesByUrl(vURL).then(res =>
        store.concat(res)
      )
    ), Promise.resolve([]))

processAllListSeq(data)
  .then(res => log(res))

// #### just one registry ###
getVideoAttributesByUrl('https://vimeo.com/47483575')
  .then(res => log(res))
