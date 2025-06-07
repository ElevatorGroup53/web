export default function OronaPage() {
  return (
    <main>
      <section id="banner">
        <img src="img/evo7.jpg" />
        <div className="contenedor">
          <h2>ORONA</h2>
          <p>Calidad y modernidad</p>
          <a href="vision.html">Leer más</a>
        </div>
      </section>

      <section id="orona">
        <h3>¿Que hacemos?</h3>
        <div className="contenedor">
          <nav>
            <p>
              La actividad de ORONA se centra en el diseño, fabricación, instalación, mantenimiento
              y modernización de ascensores, escaleras mecánicas, rampas y pasillos.
            </p>

            <p>
              Es nuestro firme compromiso con la sostenibilidad desde un enfoque integral. ORONA es
              la primera empresa del sector de elevación a nivel mundial certificada en Ecodiseño
              ISO 14006.
            </p>
            <p>
              Nuestras certificaciones son garantía de la excelencia en nuestro trabajo. Contamos
              con las certificaciones más importantes de alcance internacional en ecodiseño,
              medioambiente y seguridad en el entorno laboral.
            </p>
          </nav>
        </div>
      </section>

      <section id="caracter">
        <nav className="contenedor">
          <h3>Caracteristicas de Orona en ascensores</h3>
          <div className="contenedor">
            <div className="lista">
              <ul>
                <li>
                  <a href="">
                    <h3>Estructura de cabina</h3>
                  </a>
                  Tipo Jaula, formada por nervios verticales y horizontales, que mejoran la
                  rigidez y el comfort.
                </li>

                <li>
                  <a href="">
                    <h3>Revestimientos</h3>
                  </a>
                  El revestimiento de las cabinas es <strong>NeoCompact</strong>, de 8mm de espesor.
                </li>

                <li>
                  <a href="">
                    <h3>Segmentación</h3>
                  </a>
                  Se dividen categorias Domo=Residencial y Public=Comercial.
                </li>
              </ul>
            </div>
            <div className="lista">
              <ul>
                <li>
                  <a href="">
                    <h3>Iluminación Ecoeficiente</h3>
                  </a>
                  Con LED´s que incluyen apagado automatico
                </li>

                <li>
                  <a href="">
                    <h3>Pulsadores de cabina y piso</h3>
                  </a>
                  Boton circular que recuerda la forma del logotipo de la marca
                </li>

                <li>
                  <a href="">
                    <h3>Indicadores de cabina</h3>
                  </a>
                  Se diferencian por segmento.
                </li>
              </ul>
            </div>
            <div className="lista">
              <ul>
                <li>
                  <a href="">
                    <h3>Botoneras de piso</h3>
                  </a>
                  Se diferencian por segmento
                </li>

                <li>
                  <a href="">
                    <h3>Indicadores de piso</h3>
                  </a>
                  Se diferencian por segmento (Con o sin Chaflán) y es posible elegir 7 segmentos ,
                  Matricial o TFT.
                </li>

                <li>
                  <a href="">
                    <h3>Packs</h3>
                  </a>
                  Domo=Residencial, Public=Comercial
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <section id="galeria">
        <div className="contenedor">
          <div className="item">
            <h3>Estructura de cabina</h3>
            <a href="#img1">
              <img src="/img/5estructura%20de%20cabina.jpg" alt="" />
            </a>
          </div>
          <div className="item">
            <h3>Revestimientos</h3>
            <a href="#img2">
              <img src="/img/6revestimientos.jpg" alt="revestimientos" />
            </a>
          </div>
          <div className="item">
            <h3>Segmentación</h3>
            <a href="#img3">
              <img src="/img/7segmentacion.jpg" alt="segmentacion" />
            </a>
          </div>
          <div className="item">
            <h3>Iluminación ecoeficiente</h3>
            <a href="#img4">
              <img src="/img/8iluminacion.jpg" alt="iluminacion" />
            </a>
          </div>
          <div className="item">
            <h3>Pulsadores de cabina y piso</h3>
            <a href="#img5">
              <img src="/img/9pulsadores.jpg" alt="pulsadores" />
            </a>
          </div>
          <div className="item">
            <h3>Indicadores de cabina</h3>
            <a href="#img6">
              <img src="/img/10indicadores.jpg" alt="indicadores" />
            </a>
          </div>
          <div className="item">
            <h3>Botoneras de piso</h3>
            <a href="#img7">
              <img src="/img/11botoneras.jpg" alt="botoneras" />
            </a>
          </div>
          <div className="item">
            <h3>Indicadores de piso</h3>
            <a href="#img8">
              <img src="/img/12indicadores%20de%20piso.jpg" alt="indicador de piso" />
            </a>
          </div>
          <div className="item">
            <h3>Packs</h3>
            <a href="#img9">
              <img src="/img/13packs.jpg" alt="pack" />
            </a>
          </div>
          <div className="item">
            <h3>Resumen del pack</h3>
            <a href="#img10">
              <img src="/img/47resumen%20estructura%20packs.jpg" alt="resumen de estructura" />
            </a>
          </div>
        </div>
      </section>

      <section id="filtro">
        <div className="contenedor">
          <input type="radio" name="filtro" id="filtro1" />
          <label htmlFor="filtro1">Pack DOMO Reference</label>
          <input type="radio" name="filtro" id="filtro2" />
          <label htmlFor="filtro2">Pack DOMO Selection</label>
          <input type="radio" name="filtro" id="filtro3" />
          <label htmlFor="filtro3">Pack PUBLIC Reference</label>
          <input type="radio" name="filtro" id="filtro4" />
          <label htmlFor="filtro4">Pack PUBLIC Selection</label>

          <div id="imagenes">
            <div className="DR">
              <img src="img/16pack%20dr1.jpg" alt="pack" />
              <img src="img/17pack%20dr2.jpg" alt="pack" />
              <img src="img/18pack%20dr3.jpg" alt="pack" />
              <img src="img/19pack%20dr4.jpg" alt="pack" />
              <img src="img/20pack%20dr5.jpg" alt="pack" />
              <img src="img/21pack%20dr6.jpg" alt="pack" />
              <img src="img/22pack%20dr7.jpg" alt="pack" />
              <img src="img/23pack%20dr8.jpg" alt="pack" />
            </div>
            <div className="DS">
              <img src="img/25pack%20ds1.jpg" alt="pack" />
              <img src="img/26pack%20ds2.jpg" alt="pack" />
              <img src="img/27pack%20ds3.jpg" alt="pack" />
              <img src="img/28pack%20ds4.jpg" alt="pack" />
              <img src="img/29pack%20ds5.jpg" alt="pack" />
            </div>
            <div className="PR">
              <img src="img/32pack%20pr1.jpg" alt="pack" />
              <img src="img/33pack%20pr2.jpg" alt="pack" />
              <img src="img/34pack%20pr3.jpg" alt="pack" />
              <img src="img/35pack%20pr4.jpg" alt="pack" />
              <img src="img/36pack%20pr5.jpg" alt="pack" />
            </div>

            <div className="PS">
              <img src="img/38pack%20ps1.jpg" alt="pack" />
              <img src="img/39pack%20ps2.jpg" alt="pack" />
              <img src="img/40pack%20ps3.jpg" alt="pack" />
              <img src="img/41pack%20ps4.jpg" alt="pack" />
              <img src="img/42pack%20ps5.jpg" alt="pack" />
              <img src="img/43pack%20ps6.jpg" alt="pack" />
              <img src="img/44pack%20ps7.jpg" alt="pack" />
              <img src="img/45pack%20ps8.jpg" alt="pack" />
              <img src="img/46pack%20ps9.jpg" alt="pack" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
