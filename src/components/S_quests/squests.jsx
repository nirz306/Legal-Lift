import sex_har from "../assets/sexual_harr.png";
import Block from "./Block";
import acc from "../assets/road_accc.png";
 import phone from "../assets/phone pursuit.png";
import respect from "../assets/respect realm.png";
import "../S_quests/squests.css";
import { NavLink } from 'react-router-dom'

const Squests = () => {
  return (
    <>
      <div className="components">
        <div className="row1">
          <div className="road_acc">
            <NavLink className="s_link" to="/Road Accident">
              <Block imageUrl={acc} title="road_acc" />
            </NavLink>
          </div>

          <div className="sexual_harras">
            <NavLink className="s_link" to="/Sexual harresment">
              <Block imageUrl={sex_har} title="Sexual harassment" />
            </NavLink>
          </div>

          <div className="lost_phone">
            <NavLink className="s_link" to="/Lost phone">
              <Block imageUrl={phone} title="Sexual harassment" />
            </NavLink>
          </div>
        </div>
        <div className="row2">
          <div className="respect_realm">
            <NavLink className="s_link" to="/respect_realm">
              <Block imageUrl={respect} title="Respect Realm" />
            </NavLink>
          </div>

          <div className="sexual_harras">
            <NavLink className="s_link" to="/Sexual harresment">
              <Block imageUrl={sex_har} title="Sexual harassment" />
            </NavLink>
          </div>

          <div className="sexual_harras">
            <NavLink className="s_link" to="/Sexual harresment">
              <Block imageUrl={sex_har} title="Sexual harassment" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Squests;
