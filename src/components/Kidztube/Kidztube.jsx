import React from 'react'
import Block from '../S_quests/Block'
import rasicm from "../assets/shades of struggle.png"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "../S_quests/squests.css"
import c_rights from "../assets/c_rights.png"
import stranger from "../assets/strager safety.png"
import detention from "../assets/unauthorised detension.png"
 
const Kidztube = () => {
  return (
    <>
   <div className='components'>
      <div className="row1">
        <div className="rasicm">
            <Link className="link" to="/rasicm"><Block imageUrl={rasicm} title="rasicm" /></Link>
        </div>

        <div className="consumer_rights">
            <Link className="link" to="/consumer_rights"><Block imageUrl={c_rights} title="consumer_right" /></Link>
        </div>

        <div className="stranger_safety">
            <Link className="link" to="/stranger_safety"><Block imageUrl={stranger} title="stranger_safety" /></Link>
        </div>

      </div>
      <div className="row2">
        <div className="detention">
            <Link className="link" to="/detention"><Block imageUrl={detention} title="detention" /></Link>
        </div>

        <div className="consumer_rights">
            <Link className="link" to="/consumer_rights"><Block imageUrl={c_rights} title="consumer_right" /></Link>
        </div>

        <div className="consumer_rights">
            <Link className="link" to="/consumer_rights"><Block imageUrl={c_rights} title="consumer_right" /></Link>
        </div>

      </div>
</div>
     </>
  )
}
export default Kidztube