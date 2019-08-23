![](https://user-images.githubusercontent.com/212941/59231343-2a71cd80-8b95-11e9-8bc9-9dfb58467094.png)

### API
Drumbot's API has the following methods:

`GET /drumbot/patterns`

Returns the list of available patterns

`GET /drumbot/patterns/{pattern-name}`

Returns a pattern.

See [the API documention](API.md) For all the details!

## React Starter Kit

Drumbot has provided a starter kit &ndash; a drum machine that runs inside a browser, built with React and the WebAudio API.

[See it in action here](https://noops-challenge.github.io/drumbot/index.html)

To get started with the react example, you'll need recent version of node.js. Fork this repository to your own github account so you can share your work.

```
cd react-starter
npm install
npm start
```

This example requires WebAudio support,

The WebAudio API is relatively new and support can be slightly different in each browser. This drum machine should work on Edge, Firefox, Chrome, and Safari.

Also note that on some mobile devices, WebAudio only plays through headphones &ndash; so if you don't hear anything, plug some in!

The [WebAudio page on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) is a good place to start learning about the WebAudio API.

### Additional Features to Implement

#### Change the sounds

If you're feeling adventurous, try synthesizing your own drum sounds using [oscillators](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createOscillator).

#### Change the speed!

This drum machine doesn't let you set the tempo. Try adding a tempo control!

#### Dynamics

This drum machine plays each sound at an equal volume. Try varying the volume of the sounds or adding a volume knob to each track.

Use the [AudioContext.createGain](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createGain) method to create a gain node to control the volume.

#### Stererereo

You can move sounds around from left to right. Try using [AudioContext.createStereoPanner()](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createStereoPanner) to create a [StereoPannerNode](https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode).

You can even get crazy and move sounds around in 3D with a [PannerNode](https://developer.mozilla.org/en-US/docs/Web/API/PannerNode).

#### Make it Swing!

A revolutionary feature on the [Linn LM-1](https://en.wikipedia.org/wiki/Linn_LM-1), one of the earliest drum machines, was "Swing" - the ability to make the beat "swing" by slightly changing the timing of every other step. Most drum machines since then have included some sort of swing control.  Try adding one to this drum machine.

#### Add visualizations

Use [AudioContext.createAnalyser](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createAnalyser) to analyze the audio data. Create a sound meter or do something else awesome!

More about Drumbot here: https://noopschallenge.com/challenges/drumbot
