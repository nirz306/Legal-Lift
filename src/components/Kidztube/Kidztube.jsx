import React from 'react'
import Block from '../S_quests/Block'
import rasicm from "./rascism.png"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "../S_quests/squests.css"
import c_rights from "./c_rights.png"

const Kidztube = () => {
  return (
    <>
    {/* <div className="title">Lets see some exciting videos!!</div> */}
    <div className='components'>

      <div className="rasicm">
          <Link className="link" to="/rasicm"><Block imageUrl={rasicm} title="rasicm" /></Link>
      </div>

      <div className="consumer_rights">
          <Link className="link" to="/consumer_rights"><Block imageUrl={c_rights} title="consumer_right" /></Link>
      </div>
      
    </div>
    </>
  )
}

export default Kidztube
