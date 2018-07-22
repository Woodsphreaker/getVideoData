export default [
  {
    name: 'vimeo',
    limiter: '/',
    endpoint: vID => `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vID}`
  },
  {
    name: 'youtube',
    limiter: 'v=',
    endpoint: vID => `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${vID}&format=json`
  }
]
