import getPlayerName from './getPlayerName'

export default (url = '') => {
  const [{name: player}] = getPlayerName(url)
  return player
}
