DIY-PixelPerfect
----------------
DIY-PixelPerfect is a crude bookmarklet inspired by Pixel Perfect (http://pixelperfectplugin.com/ , https://github.com/openhouseconcept/PixelPerfect)

*Reasons for making this:*

* I like PixelPerfect but it doesn't work in Chrome :( This does :)
* PixelPerfect may be abandon (It doesn't work past Firefox v5.0.1) but I'm currently on v7.0

*Install*

* Create a new bookmark in Chrome.
* Name it whatever you like i.e. 'DIY-PixelPerfect'.
* Copy and paste the contents of bookmarklet into the URL field for the bookmark.

*What it does*

The bookmarklet injects a &lt;img&gt; into the page, prompts you for the URL of your mockup and sets the CSS of the image to: 

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