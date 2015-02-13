typeScale 
=========

A very simple and small (270 bytes) when [M&G'd](# "Minified & Gzipped") script to scale typography based on the viewport width.


```javascript
function typeScale(){
    var a = window,
        b = document,
        c = b.documentElement,
        d = b.getElementsByTagName("body")[0],
        x = a.innerWidth||c.clientWidth||d.clientWidth;
    d.style.fontSize = x/375 + 15 + "px",
    d.style.lineHeight = x/8000 + 1.4
}
window.addEventListener("resize",typeScale),
typeScale();
```
#####which equates to...

| Viewport Width| font-size  | em's equivalent | line-height |
| ------------- |------------|-----------------|-------------|
| 400px         | 16.067px   | 1.004167        | 1.45        |
| 800           | 17.133     | 1.070833        | 1.5         |
| 1200          | 18.2       | 1.1375          | 1.55        |
| 1600          | 19.267     | 1.204187        | 1.6         |
| 2000          | 20.33      | 1.278333        | 1.65        |

###[Demo](http://codepen.io/zhirkovski/pen/GgKbxY)

#####Questions

> I don't want the line-height to change.

then remove `d.style.lineHeight = x/8000 + 1.4`, and the comma after the "px" on the previous line.

> How do I change the rate at which the font-size and line-height grow?

``` 
font-size = x/α + β
where   α = rate of growth, 
        x = width of viewport (px),
        β = font-size @ width = 0
```
so in my equation α = 375, which means the font-size will grow 1px for every 375px increase in width, with a starting point of font-size: 15px @ width = 0.

calculating the line-height formula is pretty much the same
``` 
line-height = x/α + β
where     α = rate of growth, 
          x = width of viewport (px),
          β = line-height @ width = 0
```    
so in my equation α = 8000, which means the line-height will grow 0.05 for every 400px increase in width, with a starting point of line-height: 1.4 @ width = 0.

> I want my font-size expressed in ems or percentages

For ems the formula is
```
font-size = (x/α + β)/16
d.style.fontSize = x/6000 + 1.066667 + "em" // at defaults
```
and in percentages 
```
font-size = (x/α + β)*6.25
d.style.fontSize = x/60 + 93.75 + "%" // at defaults
```

> My font is unreadable on mobiles *or* massive on desktops

Every font is different, not just in style. Some fonts look tiny at 16px whilst others look relatively large. So you may very well need to tweek the formulae depending on what font you set as your base type. As a rule of thumb: 

An increase in β will increase the font-size on mobiles.

An increase in α will **decrease** the font-size on desktops.

Remember to compensate though, so If your font looks too small on mobiles but just right on desktops then you should increase β (eg. to 16), but also increase α (eg. to 450).

Hopefully you can tweek the formula to fit your font.

##### Even more condensed
no support for IE8 or earlier

```javascript
function typeScale(){
    var x = window.innerWidth,
        b = document.getElementsByTagName("body")[0].style;
    b.fontSize = x/375+15+"px",
    b.lineHeight = x/8e3+1.4
}
window.addEventListener("resize",typeScale),
typeScale();
```

###### MINIFIED

```javascript
function typeScale(){var e=window.innerWidth,t=document.getElementsByTagName("body")[0].style;t.fontSize=e/375+15+"px",t.lineHeight=e/8e3+1.4}window.addEventListener("resize",typeScale),typeScale();
```
