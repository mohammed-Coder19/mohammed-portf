import Lottie from "lottie-react"
import animationData1 from "../app/assest/s1.json"
import animationData2 from "../app/assest/s2.json"
import animationData3 from "../app/assest/s3.json"
import animationData4 from "../app/assest/s4.json"

import { useEffect, useRef } from "react";
function CardsServices() {
  const Card1 = useRef(null);
  const Card2 = useRef(null);
  const Card3 = useRef(null);
  const Card4 = useRef(null);

useEffect (() => {
  const observer3 = new IntersectionObserver(entries3 => {
    if(entries3[0].isIntersecting) {
      Card1.current.classList.add("active4");
      observer3.unobserve(Card1.current);
    }
  })
  observer3.observe(Card1.current)
})

useEffect (() => {
  const observer5 = new IntersectionObserver(entries5 => {
    if(entries5[0].isIntersecting) {
      Card3.current.classList.add("active5");
      observer5.unobserve(Card3.current);
    }
  })
  observer5.observe(Card3.current)
})


useEffect (() => {
  const observer6 = new IntersectionObserver(entries6 => {
    if(entries6[0].isIntersecting) {
      Card2.current.classList.add("active6");
      observer6.unobserve(Card2.current);
    }
  })
  observer6.observe(Card2.current)
})


useEffect (() => {
  const observer7 = new IntersectionObserver(entries7 => {
    if(entries7[0].isIntersecting) {
      Card4.current.classList.add("active7");
      observer7.unobserve(Card4.current);
    }
  })
  observer7.observe(Card4.current)
})
    return(
        <div className="Cards">
            <div ref={Card1} id="card1" className="container noselect">
  <div className="canvas">
    <div className="tracker tr-1"></div>
    <div className="tracker tr-2"></div>
    <div className="tracker tr-3"></div>
    <div className="tracker tr-4"></div>
    <div className="tracker tr-5"></div>
    <div className="tracker tr-6"></div>
    <div className="tracker tr-7"></div>
    <div className="tracker tr-8"></div>
    <div className="tracker tr-9"></div>
    <div className="tracker tr-10"></div>
    <div className="tracker tr-11"></div>
    <div className="tracker tr-12"></div>
    <div className="tracker tr-13"></div>
    <div className="tracker tr-14"></div>
    <div className="tracker tr-15"></div>
    <div className="tracker tr-16"></div>
    <div className="tracker tr-17"></div>
    <div className="tracker tr-18"></div>
    <div className="tracker tr-19"></div>
    <div className="tracker tr-20"></div>
    <div className="tracker tr-21"></div>
    <div className="tracker tr-22"></div>
    <div className="tracker tr-23"></div>
    <div className="tracker tr-24"></div>
    <div className="tracker tr-25"></div>
    <div id="card">
      <div  className="title">
        <div className="part1s">
      <Lottie className="animation" animationData={animationData1} />
      </div>
      <div className="part2s">
        <h1>Modern designs​🤩​</h1>
        <p>We provide businesses with websites with wonderful, professional and modern designs, and this is what distinguishes us from others 😵</p>
        </div>
      </div>
    
        </div>
        </div>
    </div>

    <div ref={Card2} id="card2" className="container noselect">
  <div className="canvas">
    <div className="tracker tr-1"></div>
    <div className="tracker tr-2"></div>
    <div className="tracker tr-3"></div>
    <div className="tracker tr-4"></div>
    <div className="tracker tr-5"></div>
    <div className="tracker tr-6"></div>
    <div className="tracker tr-7"></div>
    <div className="tracker tr-8"></div>
    <div className="tracker tr-9"></div>
    <div className="tracker tr-10"></div>
    <div className="tracker tr-11"></div>
    <div className="tracker tr-12"></div>
    <div className="tracker tr-13"></div>
    <div className="tracker tr-14"></div>
    <div className="tracker tr-15"></div>
    <div className="tracker tr-16"></div>
    <div className="tracker tr-17"></div>
    <div className="tracker tr-18"></div>
    <div className="tracker tr-19"></div>
    <div className="tracker tr-20"></div>
    <div className="tracker tr-21"></div>
    <div className="tracker tr-22"></div>
    <div className="tracker tr-23"></div>
    <div className="tracker tr-24"></div>
    <div className="tracker tr-25"></div>
    <div id="card">
    <p id="prompt"></p>
  
      <div className="title">
      <div className="part2s">
        <h1>Complete Web App💪</h1>
        <p>We create any website, a portfolio website, or any website you can request, with high efficiency and at prices that you cannot miss. 🤙</p>
        </div>
      <div className="part1s">
      <Lottie className="animation" animationData={animationData2} />
      </div>
      </div>
      <div className="subtitle">
      </div>
      
        </div>
        </div>
    </div>



    <div id="card3" ref={Card3} className="container noselect">
  <div className="canvas">
    <div className="tracker tr-1"></div>
    <div className="tracker tr-2"></div>
    <div className="tracker tr-3"></div>
    <div className="tracker tr-4"></div>
    <div className="tracker tr-5"></div>
    <div className="tracker tr-6"></div>
    <div className="tracker tr-7"></div>
    <div className="tracker tr-8"></div>
    <div className="tracker tr-9"></div>
    <div className="tracker tr-10"></div>
    <div className="tracker tr-11"></div>
    <div className="tracker tr-12"></div>
    <div className="tracker tr-13"></div>
    <div className="tracker tr-14"></div>
    <div className="tracker tr-15"></div>
    <div className="tracker tr-16"></div>
    <div className="tracker tr-17"></div>
    <div className="tracker tr-18"></div>
    <div className="tracker tr-19"></div>
    <div className="tracker tr-20"></div>
    <div className="tracker tr-21"></div>
    <div className="tracker tr-22"></div>
    <div className="tracker tr-23"></div>
    <div className="tracker tr-24"></div>
    <div className="tracker tr-25"></div>
    <div id="card">
    <p id="prompt"></p>
      <div className="title">
        <div className="part1s">
        <Lottie className="animation" animationData={animationData3} />
        
</div>
<div className="part2s">
<h1>Fast services😮‍💨</h1>
<p>The speed I enjoy, you will not find anyone who provides you with this service at this speed 😬.</p>
      </div>
      </div>
      <div className="subtitle">
      </div>
      
        </div>
        </div>
    </div>






    <div id="card4" ref={Card4} className="container noselect">
  <div className="canvas">
    <div className="tracker tr-1"></div>
    <div className="tracker tr-2"></div>
    <div className="tracker tr-3"></div>
    <div className="tracker tr-4"></div>
    <div className="tracker tr-5"></div>
    <div className="tracker tr-6"></div>
    <div className="tracker tr-7"></div>
    <div className="tracker tr-8"></div>
    <div className="tracker tr-9"></div>
    <div className="tracker tr-10"></div>
    <div className="tracker tr-11"></div>
    <div className="tracker tr-12"></div>
    <div className="tracker tr-13"></div>
    <div className="tracker tr-14"></div>
    <div className="tracker tr-15"></div>
    <div className="tracker tr-16"></div>
    <div className="tracker tr-17"></div>
    <div className="tracker tr-18"></div>
    <div className="tracker tr-19"></div>
    <div className="tracker tr-20"></div>
    <div className="tracker tr-21"></div>
    <div className="tracker tr-22"></div>
    <div className="tracker tr-23"></div>
    <div className="tracker tr-24"></div>
    <div className="tracker tr-25"></div>
    <div id="card">
    <p id="prompt"></p>
      <div className="title">
        <div className="part2s">
        <h1>Great ideas​🤯​</h1>
        <p>We have many innovative ideas for your projects that you would like to work with us at a very modern and efficient speed. 🧐</p>
        </div>
        <div className="part1s">
        <Lottie className="animation" animationData={animationData4} />
        </div>
        </div>
      <div className="subtitle">
      </div>
      
        </div>
        </div>
    </div>







</div>

    )
}
export default CardsServices;