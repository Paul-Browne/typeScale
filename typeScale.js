/*! typeScale v1.1 | MIT License | git.io/LXRG_w | Paul Browne | 2014 */

function typeScale(){
    
    // http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
    
    var a = window,
        b = document,
        c = b.documentElement,
        d = b.getElementsByTagName("body")[0],
        x = a.innerWidth||c.clientWidth||d.clientWidth;
        
    // The actual math part for tweeking the font-size,
    // where 'x' is the viewport width
        
    d.style.fontSize = x/320 + 13.5 + "px",
    
    // Tweeks the line-height ever so slightly,
    // by 1 for every 8000px of width or,
    // by 0.05 every 400px of width
    
    d.style.lineHeight = x/8000 + 1.25
}

// Binds the function to the resize event

window.addEventListener("resize",typeScale),

// Calls the function when the page is loaded

typeScale();
