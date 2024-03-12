import sex_har  from  "../assets/sexual_harr.png"
import Block from './Block'
import acc from  "../assets/road_accc.png";
import { BrowserRouter, Link } from 'react-router-dom/cjs/react-router-dom.min';
import phone from "../assets/phone pursuit.png";
import respect from "../assets/respect realm.png";

const Squests = () => {
  return (
<>
<div className='components'>
    <div className="row1">
        <div className="road_acc">
          <Link className="s_link" to="/Road Accident"><Block imageUrl={acc} title="road_acc" />
          </Link>
        </div>

        <div className="sexual_harras">
          <Link className="s_link" to="/Sexual harresment"><Block imageUrl={sex_har} title="Sexual harassment" /></Link>
        </div>

        <div className="lost_phone">
          <Link className="s_link" to="/Lost phone"><Block imageUrl={phone} title="Sexual harassment" /></Link>
        </div>

    </div>
    <div className="row2">
        <div className="respect_realm">
          <Link className="s_link" to="/respect_realm"><Block imageUrl={respect} title="Respect Realm" />
          </Link>
        </div>

        <div className="sexual_harras">
          <Link className="s_link" to="/Sexual harresment"><Block imageUrl={sex_har} title="Sexual harassment" /></Link>
        </div>

        <div className="sexual_harras">
          <Link className="s_link" to="/Sexual harresment"><Block imageUrl={sex_har} title="Sexual harassment" /></Link>
        </div>

    </div>
</div>
     </>
  );   
}

export default Squests


 