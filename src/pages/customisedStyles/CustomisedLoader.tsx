import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinStars } from '@fortawesome/free-regular-svg-icons'
import './loader.css'
export default function CustomisedLoader() {
  // Beat, BeatFade, Bounce, Fade, Flip, Shake, Spin, Spin Reverse, Spin Pulse
  return (
   <div className="container">
    <div className="loader">
      <FontAwesomeIcon icon={faFaceGrinStars} className="loadIcon"/>
    </div>
   </div>
  )
}