# blind-color-picker

This little project will help when you have a palette of colours and a colour you picked from an image and you want to pick the colour of the palette that is closest to the one you have on the image.

It might look like a weird situation, but it happens.

Imagine you have an app, which will probably have a palette of colours. If you later want to add a component you will most likely want to use the same palette. But the UX designer gave you a psd/png and you are like HOW DO I TELL BETWEEN THESE TEN SHADES OF GREY.

So, if you are basically blind to colour tones, this might help you!

To use simply:

`node blind-colour-picker.js '#FFEE00'`

This will return an ordered array created from your palette in which the order function is the distance from the colour you have input to the colours in the palette.
