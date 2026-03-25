import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faFaceGrinStars } from '@fortawesome/free-regular-svg-icons'

function App() {
  // Beat, BeatFade, Bounce, Fade, Flip, Shake, Spin, Spin Reverse, Spin Pulse
  return (
   <div className="container">
    <div className="loader">
      <FontAwesomeIcon icon={faFaceGrinStars} className="loadIcon"/>
    </div>
   </div>
  )
}

export default App
