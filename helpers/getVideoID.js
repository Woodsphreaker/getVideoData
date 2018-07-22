import getPlayerAttribute from './getPlayerAttribute'

export default (url, player) => {
  const [{limiter}] = getPlayerAttribute(player)
  return url.slice(url.lastIndexOf(limiter) + limiter.length)
}
