import "./globals.css";
import "./css/estilos.css";
import "./css/fontello.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elevator Group",
  description: "Para elevar su confort hasta las mayores alturas",
  icons: ["letras/iconoEgp.png"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header>
          <div className="contenedor">
            <h1>
              <a className="logo" href="">
                <img src="img/letras4.jpg" alt="" />
              </a>
            </h1>
            <input type="checkbox" id="menu-bar" />
            <label className="icon-menu1 black" htmlFor="menu-bar"></label>
            <nav className="menu">
              <ul>
                <li>
                  <a href="/">Inicio</a>
                </li>
                <li className="submenu">
                  <a href="productos">Productos </a>
                  <ul id="despliegue1">
                    <li>
                      <a href="orona">Orona</a>
                    </li>
                    <li>
                      <a href="elezer">Eleser</a>
                    </li>
                    <li>
                      <a href="mp">Mp Ascensores</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="">Servicios</a>
                  <ul id="despliegue2">
                    <li>
                      <a href="venta">Ventas</a>
                    </li>
                    <li>
                      <a href="mantenimiento">Mantenimiento</a>
                    </li>
                    <li>
                      <a href="moderno">Modernización</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contactenos">Contactenos</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}

        <section id="info">
          <h3>Para muchos elevarse, no es algo simple</h3>
          <div className="contenedor">
            <div className="info-group">
              <a href="orona">
                <img src="/img/evo16.jpg" alt="" />
              </a>
              <h4>Ascensores</h4>
            </div>
            <div className="info-group">
              <a href="escaleras">
                <img src="/img/evo17.jpg" alt="" />
              </a>
              <h4>Escaleras Electricas</h4>
            </div>
            <div className="info-group">
              <a href="mantenimiento">
                <img src="/img/evo18.jpg" alt="" />
              </a>
              <h4>Mantenimiento</h4>
            </div>
            <div className="info-group">
              <a href="moderno">
                <img src="/img/evo19.jpg" alt="" />
              </a>
              <h4>Modernización</h4>
            </div>
          </div>
        </section>

        <footer>
          <div className="contenedor">
            <p className="copy">Contactanos: 399-5207 | 6675-6561 | comercial.elevatorgroup@gmail.com</p>
            <div className="sociales">
              <a className="icon-facebook" href=""></a>
              <a className="icon-twitter" href=""></a>
              <a className="icon-instagram" href=""></a>
              <a className="icon-googleplus" href=""></a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
