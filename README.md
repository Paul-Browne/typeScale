typeScale 
=========

A very simple and small (271 bytes) script to scale typography based on the viewport width. 


```javascript
function typeScale(){
    var a=window,
        b=document,
        c=b.documentElement,
        d=b.getElementsByTagName("body")[0],
        x=a.innerWidth||c.clientWidth||d.clientWidth;
    d.style.fontSize=(x+4320)/5120+"em",
    d.style.lineHeight=125e-6*x+1.25
}
window.addEventListener("resize",typeScale),
typeScale();
```
#####which equates to...

| Viewport Width| font-size (em)|px equivalent | line-height  |
| ------------- |---------------|--------------|--------------|
| 400px         | 0.921875      | 14.75        | 1.3         |
| 800           | 1.00          | 16           | 1.35          |
| 1200          | 1.078125      | 17.25        | 1.4         |
| 1600          | 1.15625       | 18.5         | 1.45          |
| 2000          | 1.234375      | 19.75        | 1.5         |

#####Questions

> I don't want the line-height to change.

then remove `d.style.lineHeight=125e-6*x+1.25`, and the comma after the "em" on the previous line.

> How do I change the rate at which the font-size and line-height grow?

Firstly, it's easier to use the formula for calculating the font-size in pixels, rather than em's, which is 
``` 
fontSize = x/α + β
where  α = rate of growth, 
       x = width of viewport (px),
       β = font-size @ width = 0
```
so in my equation α = 320, which means the font-size will grow 1px for every 320px increase in width, with a starting point of font-size: 13.5px @ width = 0.

For em's the formula is
```
font-size = (x + α*β)/(16*α)
```
and in percentages 
```
font-size = (x + α*β)/(0.16*α)
```

calculating the line-height formula is pretty simple
``` 
line-height = αx + β
where     α = rate of growth, 
          x = width of viewport (px),
          β = line-height @ width = 0
```    
so in my equation α = 0.000125, which means the line-height will grow 0.05 for every 400px increase in width, with a starting point of line-height: 1.25 @ width = 0.

> My font is unreadable on mobiles *or* massive on desktops

Every font is different, not just in style. Some fonts look tiny at 16px whilst others look relatively large. So you may very well need to tweek the formulae depending on what font you set as your base type. As a rule of thumb: 

Increase β so that the font starts off larger (for mobiles).
Decrease β so that the font starts off smaller (for mobiles).
Increase α so that the font ends up smaller (for desktps).
Decrease α so that the font ends up larger (for desktps).

Remember to compensate though, so If your font looks too small on mobiles but just right on desktops then you should increase β (eg. to 15), but also increase α (eg. to 450).

If you still can't get the equation to fit your font, then you may need to use a quadratic equation like:

```
font-size = x²/α - x*β ± γ
```

but hopefully you can tweek the formula to fit your font

[Demo](http://codepen.io/zhirkovski/pen/GgKbxY)

:octocat:
