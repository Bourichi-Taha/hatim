import React from 'react'
import "../assets/css/my-clients.css"
import {Experience} from "./Experience"
import { Canvas } from "@react-three/fiber";

const MyClients = () => {
  return (
    <div className="my-clients">
      <div className="left-client">
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <Experience />
        </Canvas>
      </div>
      <div className="right-client">
        <h3 className="right-client-title">fun fact</h3>
        <h1 className="right-client-title-desc">Our experience allows to bring disruptive</h1>
        <p className="right-client-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi nobis voluptatibus commodi officia similique ducimus quia aperiam recusandae suscipit? Numquam reprehenderit sunt nulla aliquam.</p>
        <div className="right-client-statistics">
          <div className="right-client-statistic-item">
            <div className="right-item-statistics-cube">
              4K
            </div>
            <p className="right-item-statistics-desc">Projects Done.</p>
          </div>
          <div className="right-client-statistic-item">
            <div className="right-item-statistics-cube">
              1K
            </div>
            <p className="right-item-statistics-desc">Happy Clients.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyClients