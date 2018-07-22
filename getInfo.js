import data from './data.json'
import axios from 'axios'

const players = [
  {
    name: 'vimeo'
  },
  {
    name: 'youtube'
  }
]

const getLastIndex = (el, search) => el.slice(el.lastIndexOf(search) + search.length)

const getPlayer = url => {
  const [{name = ''} = {}] = players.filter(({name}) => url.indexOf(name) !== -1)
  return name
}

const getVideoID = (url, player) => {
  const players = {
    vimeo: () => getLastIndex(url, '/'),
    youtube: () => getLastIndex(url, 'v=')
  }
  return (players[player])()
}

const getData = (url = '') => axios(url)

const vimeo = vID => {
  const endpoint = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vID}`
  // const data = getData(endpoint)
}

const youtube = vID => {
  const endpoint = `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${vID}&format=json`
  // return getData(endpoint)
}

const getVideoInfo = (vID, vType) => {
  const types = {
    vimeo: vimeo(vID),
    youtube: youtube(vID),
    none: Promise.resolve({})
  }
  return (types[vType] || types['none'])()
}

const {log} = console

log(
  getPlayer('https://www.youtube.com/watch?v=KtDwdoxQL4A')
)
log(
  getPlayer('https://vimeo.com/102553634')
)
log(
  getVideoID('https://www.youtube.com/watch?v=KtDwdoxQL4A', 'youtube')
)
log(
  getVideoID('https://vimeo.com/131191237', 'vimeo')
)
