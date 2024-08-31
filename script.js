function Loading_Animation(){
    var timer = document.querySelector("#line #line1-part1 h5");
    var count =0;

    var tl = gsap.timeline();
    tl.from("#line h1,#line h2",{
        y:150,
        stagger:0.3,
        duration:0.6,
        delay:0.5
    })
    tl.from("#line1-part1",{
        // duration: 0.2,
        opacity:0,
        onStart: function(){
            setInterval(function(){
                if(count < 100){
                    
                    count++;
                }
                else{
                    count = 100;
                }
                timer.textContent = count;
            },30)
            
        }
    })

    tl.to("#line h2",{
        opacity:1,
        animationName: "anime"
    })

    tl.to("#loader",{
        opacity:0,
        duration:0.4,
        delay:3,
        
    })

    tl.from("#page1",{
        y:1600,
        delay:0.5,
        opacity:0,
        ease:Power4,
        duration:0.5
    })

    tl.to("#loader",{
        display:none
    })
}

Loading_Animation();