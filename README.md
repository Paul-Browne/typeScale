typeScale
=========

A very simple script to scale typography based on the viewport width


```javascript
function typeScale(){
    var a=window,
        b=document,
        c=b.documentElement,
        d=b.getElementsByTagName("body")[0],
        x=a.innerWidth||c.clientWidth||d.clientWidth;
    d.style.fontSize=(x+4320)/5120+"em",
    d.style.lineHeight=125e-6*x+1.2
}
window.addEventListener("resize",typeScale),
typeScale();
```

And that's it.

| Viewport Width| font-size (em)|px equivalent | line-height  |
| ------------- |---------------|--------------|--------------|
| 400           | 0.921875      | 14.75        | 1.25         |
| 800           | 1.00          | 16           | 1.3          |
| 1200          | 1.078125      | 17.25        | 1.35         |
| 1600          | 1.15625       | 18.5         | 1.4          |
| 2000          | 1.234375      | 19.75        | 1.45         |
