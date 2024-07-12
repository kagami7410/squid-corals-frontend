import React, { useEffect, useRef, useState } from 'react'
import './LandingPage.css'
import MultiColouredHammerImage from './assets/hammer-no-bg.png'
import GoldToarchImage from './assets/torch1-no-bg.png'
import GreenToarchImage from './assets/greenToarch-no-bg.jpg'
import RedBlueScolyToarchImage from './assets/scoly-red-blue.png'
import Zoa1Image from './assets/zoa1-removebg.png'
import Zoa2Image from './assets/zoa2.png'
import Zoa3Image from './assets/zoa3.png'
import ClovePolypImage from './assets/clove-polyp.png'
import Video from './assets/video1.mp4'


export const LandingPage = () => {

  const [xPosition, setXPosition] = useState(0);
  const [xPositionHammer, setXPositionHammer] = useState(0);

  const [xPositionGoldToarch, setXPositionGoldToarch] = useState(0);
  const [xPositionGreenToarch, setXPositionGreenToarch] = useState(0);
  const [xPositionRedBlueScoly, setXPositionRedBlueScoly] = useState(0);
  const [xPositionZoa1, setXPositionZoa1] = useState(0);
  const [xPositionZoa2, setXPositionZoa2] = useState(0);
  const [xPositionZoa3, setXPositionZoa3] = useState(0);
  const [xPositionClovePolyp, setXPositionClovePolyp] = useState(0);


  const [showImage, setShowImage] = useState('landingPage-image-container');
  const [showDescription, setShowDescription] = useState('landingPage-image-container');
  const [showVideo, setShowVideo] = useState('recently-added-corals-container');


  const [border, setBorder] = useState('');
  const observedElement = useRef(null);








  useEffect(() => {
    // Get the new X position (for example, randomly)
    let newXPosition = 0
    setTimeout(() => {
      newXPosition = 30; // Ensure it's within the viewport
      setXPosition(newXPosition);
      setXPositionHammer(35);
      setXPositionGoldToarch(65);
      setXPositionGreenToarch(15);
      setXPositionRedBlueScoly(47)
      setXPositionZoa1(61)
      setXPositionZoa2(50)
      setXPositionZoa3(55)
      setXPositionClovePolyp(80)

      setShowImage('landingPage-image-container show')
      setShowDescription('landingPage-description-container show')
      // setBorder('border')


    }, 200)

    // Set the new X position
  }, []);






  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo('recently-added-corals-container video-visible')

          console.log('Element is in view!');
        } else {
          setShowVideo('recently-added-corals-container ')

          console.log('Element is out of view!');
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger callback when 10% of the element is in view
      }
    );

    if (observedElement.current) {
      observer.observe(observedElement.current);
    }

    return () => {
      if (observedElement.current) {
        observer.unobserve(observedElement.current);
      }
    };
  }, []);

  return (
    <div className={`landingPage-container ${border}`}>

      <div className={`landingPage-top-container ${border}`}>
        <div className={`${showDescription} ${border}`}
          style={{ transform: `translateX(${xPosition}%)` }}>
          <div className={`main-headline ${border}`}>Stunning eco-friendly corals for your tank!</div>
          <div className={`short-description ${border}`}>- The UK’s largest sustainable coral provider</div>
          <div className={`shop-corals-button ${border}`}> SHOP CORALS</div>

        </div>

        
        

        <div className={`landingPage-image-main-container ${border}`}>
        <div className={`${showImage} ${border}`}
               style={{ transform: `translateX(-${xPositionClovePolyp}%)` }}>
            <img className={`landingPage-clove-polyp-container ${border}`} src={ClovePolypImage} alt="Example" />
          </div>

        
        <div className={`${showImage} ${border}`}
               style={{ transform: `translateX(-${xPositionZoa3}%)` }}>
            <img className={`landingPage-zoa3-container ${border}`} src={Zoa3Image} alt="Example" />
          </div>

          <div className={`${showImage} ${border}`}
               style={{ transform: `translateX(-${xPositionZoa2}%)` }}>
            <img className={`landingPage-zoa2-container ${border}`} src={Zoa2Image} alt="Example" />
          </div>
          <div className={`${showImage} ${border}`}
               style={{ transform: `translateX(-${xPositionZoa1}%)` }}>
            <img className={`landingPage-zoa1-container ${border}`} src={Zoa1Image} alt="Example" />
          </div>
        <div className={`${showImage} ${border}`}
               style={{ transform: `translateX(-${xPositionGreenToarch}%)` }}>
            <img className={`landingPage-greenToarch-container ${border}`} src={GreenToarchImage} alt="Example" />
          </div>
          <div className={`${showImage} ${border}`}
            style={{ transform: `translateX(-${xPositionRedBlueScoly}%)` }}>
            <img className={`landingPage-redBlueScoly-container ${border}`} src={RedBlueScolyToarchImage} alt="Example" />
          </div>

          <div className={`${showImage} ${border}`}
            style={{ transform: `translateX(-${xPositionGoldToarch}%)`}}>
            <img className={`landingPage-goldToarch-container ${border}`} src={GoldToarchImage} alt="Example" />
          </div>


          

          <div className= {`${showImage} ${border}`}
               style={{ transform: `translateX(-${xPositionHammer}%)`}}>
            <img className={`landingPage-multiColouredHammer-container ${border}`} src={MultiColouredHammerImage} alt="Example" />
          </div>

        </div>





      </div>
      <div ref={observedElement} className={showVideo}>
        <h1>View Our Coral Farm</h1>
        <video 
        src={Video}
        loop
        // autoPlay
        controls
        >
         
        </video>
      </div>
    </div>
  )
}

export default LandingPage;