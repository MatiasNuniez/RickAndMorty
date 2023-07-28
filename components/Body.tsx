import React from "react";

const Body = () => {
  return (
    <div id="inicio">
      <div className="img" id="sobreMi">
        <img
          src="/images/5.jpg"
          width={300}
          height={250}
          alt="img"
          className="imagen"
        />
        <p>
          Hola, mi nombre es Matias Nuñez y tengo 24 años. Soy estudiante de
          analista de sistemas en Uader FCyT Concepcion del Uruguay y estoy en busqueda de mi primer trabajo como profesional en FrontEnd trainee/jr.{" "}
        </p>
      </div>
      <div className="exp" id="proyectos">
        <h3>Experiencia Laboral</h3>
        <p>- Blog Personal</p>
      </div>
      <div className="cursos-proyectos">
        <h3>Mis Proyectos</h3>
        <ul className="listas">
          <li>
            <a href="https://github.com/MatiasNuniez/programUSDLaCentral">ProgramUSDLaCentral</a>
          </li>
          <li>
            <a href="https://github.com/MatiasNuniez/TpFinalNosql">TpFinalNosql</a>
          </li>
          <li>
            <a href="https://github.com/MatiasNuniez/app-turnos-dboff">App-turnos-dboff </a>
          </li>
          <li>
            <a href="https://github.com/MatiasNuniez/app-turnos-dbmongo">App-turnos-dbmongo</a>
          </li>
          <li>
            <a href="https://github.com/MatiasNuniez/app-turnos-dbsql">App-turnos-dbsql</a>
          </li>
          <li>
            <a href="https://github.com/MatiasNuniez/Login-react-native">App-Login-ReactNative</a>
          </li>
          <li>
            <a href="https://github.com/MatiasNuniez/programCentralStockandProfits">programCentralStockandProfits</a>
          </li>
        </ul>
        <h3 className="cursos" id="cursos">Mis Cursos</h3>
        <ul className="listas">
          <li>
            <a href="https://github.com/MatiasNuniez/Curso-nextjs">Curso-Nextjs-fazt</a>
          </li>
          <li>
            <a href="https://github.com/MatiasNuniez/curso-react-native">Curso-React-Native</a>
          </li>
          <li>
            <a href="https://github.com/MatiasNuniez/Curso-Vue1-Udemy">Curso-Vue-Udemy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Body;
