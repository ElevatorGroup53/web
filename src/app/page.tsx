export default function Home() {
  return (
    <main>
      <section id="banner1">
        <div className="slider">
          <ul>
            <li>
              <img src="/img/evo9.jpg" alt="" />
            </li>
            <li>
              <img src="/img/evo20.jpg" alt="" />
            </li>
            <li>
              <img src="/img/evo21.jpg" alt="" />
            </li>
            <li>
              <img src="/img/evo22.jpg" alt="" />
            </li>
            <li>
              <img src="/img/evo16.jpg" alt="" />
            </li>
            <li>
              <img src="/img/evo17.jpg" alt="" />
            </li>
            <li>
              <img src="/img/evo19.jpg" alt="" />
            </li>
          </ul>
        </div>

        <div className="contenedor">
          <h2>Elevator Group Panama</h2>
          <p>Para elevar su confort hasta las mayores alturas</p>
        </div>
      </section>

      <section id="bienvenidos">
        <div className="contenedor">
          <h2>Bienvenido</h2>
          <p>
            Elevator Group Panamá es especialista en soluciones de transporte vertical 
            que combinan tecnología, seguridad y diseño. Ofrecemos elevadores, montacargas, plataformas, 
            escaleras eléctricas y sistemas de accesibilidad adaptados a cada necesidad, 
            con respaldo técnico y atención personalizada. 
            Elevamos tu experiencia, desde el primer piso hasta la cima.
          </p>
        </div>
      </section>

      <section id="blog">
        <h3>Lo ultimo en Innovación</h3>
        <div className="contenedor">
          <article>
            <img src="/img/evo10.jpg" alt="" />
            <h4>Ascensores</h4>
          </article>
          <article>
            <img src="/img/evo14.jpg" alt="" />
            <h4>Escaleras Electricas</h4>
          </article>
          <article>
            <img src="/img/evo15.jpg" alt="" />
            <h4>Modernización</h4>
          </article>
          <article>
            <img src="/img/ejemplo16.jpg" alt="" />
            <h4>Montacargas</h4>
          </article>
        </div>
      </section>
    </main>
  );
}
