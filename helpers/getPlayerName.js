import players from '../config/players'

export default url => players.filter(({name}) => url.indexOf(name) > -1)
