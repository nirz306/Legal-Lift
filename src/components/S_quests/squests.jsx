import sex_har  from "./sexual_harr.png"
import acc from "./road_accc.png"

import Block from './Block'
import Road_acc from './Road_acc'
import { BrowserRouter, Link } from 'react-router-dom/cjs/react-router-dom.min';

const Squests = () => {
  return (
     <div className='components'>
        <div className="road_acc">
          <Block imageUrl={acc} title="road_acc" />
          <Link className="s_link" to="/Road Accident">Road Accident</Link>
        </div>
      
        <div className="sexual_harras">
          <Block imageUrl={sex_har} title="Sexual harassment" />
          <Link className="s_link" to="/Sexual harresment">Sexual harassment</Link>
        </div>
     </div>
  )
}

export default Squests


 