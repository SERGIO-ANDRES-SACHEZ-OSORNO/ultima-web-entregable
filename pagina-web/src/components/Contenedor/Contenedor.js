import React from "react";
import "./Contenedor.css";

import Imagenes from "./Imagenes/Imagenes.js";

const Contenedor =()=> {
  return (
            <section className="img">
              <section className="img one">              
                <img className="uno i" src={Imagenes[0].Llavero} alt=""></img>
              </section>
              <section className="img two">
              <img className="dos i" src={Imagenes[0].Aseo} alt=""></img>
              </section>
              <section className="img three">
              <img className="tres i" src={Imagenes[0].Kit_perfumeria} alt=""></img>
              </section>
              <section className="img four">
              <img className="cuatro i" src={Imagenes[0].Perfumeria} alt=""></img>
              </section>
              <section className="img five">
              <img className="cinco i" src={Imagenes[0].Vela1} alt=""></img>
              </section>
              <section className="img six">
              <img className="seis i" src={Imagenes[0].Vela2} alt=""></img>
              </section>
            </section>
  );
};
export default Contenedor;