export default function ContactenosPage() {
  return (
    <main>
      <section id="relleno"></section>
      <section id="contacto">
        <div className="contenedor">
          <form className="form" action="/api/send-email" method="post">
            <h2>CONTACTENOS</h2>
            <div className="contenedor-inputs">
              <input type="text" name="nombre" placeholder="nombre" className="input-50" required />
              <input
                type="email"
                name="correo"
                placeholder="correo"
                className="input-100"
                required
              />
              <input
                type="text"
                name="telefono"
                placeholder="telefono"
                className="input-100"
                required
              />
              <textarea name="mensaje" placeholder="Escriba su mensaje aquí"></textarea>
              <input type="submit" value="ENVIAR" id="btn-enviar" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
