import players from '../config/players'

export default playerName => players.filter(({name}) => name === playerName)
