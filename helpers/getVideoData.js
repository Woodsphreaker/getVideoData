import axios from 'axios'
import getPlayerAttribute from './getPlayerAttribute'

export default (player, vID) => {
  const [{endpoint}] = getPlayerAttribute(player)
  return axios(endpoint(vID))
    .then(({data} = {}) => {
      const {provider_name, provider_url, title, author_name, author_url, description, thumbnail_url} = data
      return {
        provider_name,
        provider_url,
        title,
        author_name,
        author_url,
        description,
        thumbnail_url
      }
    })
    .catch(error => error)
}
