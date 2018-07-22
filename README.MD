# Video Info

Returns the most common data in a video of the most used players 

### Prerequisites

Node server or babel + packet generator for browsers
Axios for api communication

### Installing

NPM Modules

```
just run the npm install
```

## Running

```
just run the npm start
```

## Example

```javascript
getVideoAttributesByUrl('https://vimeo.com/47483575')
  .then(res => log(res))

// Exit process
{
    provider_name: 'Vimeo'
    , provider_url: 'https://vimeo.com/'
    , title: 'Javascript: Up To Speed'
    , author_name: 'Big Machine'
    , author_url: 'https://vimeo.com/bigmachine'
    , description: 'In this single-episode production, Rob dives into the various aspects of working with "modern" Javascript. Syntax rules aren\'t discussed in-depth as the focus of this screencast is to get you up to speed with what\'s happening in the Javascript world. If you\'re a web developer and only dabbled with Javascript - or if you\'re a .NET developer (*especially* if you\'re a .NET developer) - understanding Javascript is becoming increasingly important. That\'s the goal of this screencast: getting you up to speed so you can explore the Javascript world confidently.',
    thumbnail_url: 'https://i.vimeocdn.com/video/361783058_295x166.jpg'
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Woodsphreaker/videoinfo/blob/master/LICENSE) file for details
