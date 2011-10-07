This is a crude bookmarklet inspired by Pixel Perfect (https://github.com/openhouseconcept/PixelPerfect)
*It works in Chrome
*PixelPerfect may be abandon (It doesn't work past Firefox v5.0.1)


The bookmarklet injects a &lt;img&gt; into the page, prompts you for the URL of your ockup and sets the CSS of the image to: 

```CSS
{
z-index: 1000;
display: block;
position: absolute;
top: 0px;
left: 0px;
opacity: .8;
}
```

You can inspect the element with Chrome and alter the position and opacity as you wish (bare bones style via the Chrome Inspector.)