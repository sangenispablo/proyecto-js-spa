// Importo las vistas (view) para ejecutar en cada routes
import Dashboard from "./views/Dashboard.js";
import Alumnos from "./views/Alumnos.js";
import Profesores from "./views/Profesores.js";

const navigateTo = (url) => {
  // uso de window la API history para insertar el href del link
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  // defino mis rutas con su respectiva vista
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/alumnos", view: Alumnos },
    { path: "/profesores", view: Profesores },
  ];

  // recorro el array routes y devulevo un objeto con la ruta y
  // si matchea con pathname de location (API del browser)
  const potencialesMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  // busco los path matcheado
  let match = potencialesMatches.find(
    (potencialesMatch) => potencialesMatch.isMatch
  );

  // si no hay matcheo lo mando al home, aca podria poner un 404
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  // creo la instancia de la vista
  const view = new match.route.view();

  // llamo al metodo async getHtml, acá podria poner la logica para recuperar datos
  // de una BD
  document.querySelector("#app").innerHTML = await view.getHtml();
};

// llamo al evento que carga los history creados con pushState
window.addEventListener("popstate", () => {
  router();
});

// llamo a la funcion router solo cuando se carga el DOM completo
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
