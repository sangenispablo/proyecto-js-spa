import AbstractaVista from "./Abstracta.js";

export default class extends AbstractaVista {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }
  
  async getHtml() {
    return `
    <img style="align-self: center" src="../img/logo_coderhouse.png" alt="logo">
    <h4 style="align-self: center">
      Unite a la comunidad de aprendizaje online en vivo más grande de
      Latinoamérica
    </h4>
    <p>
      Clases online en vivo dictadas por expertos de la industria, enfoque 100%
      práctico, mentorías personalizadas y acceso a una comunidad de +100.000
      estudiantes.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel
      magni deleniti quo adipisci illum nisi modi unde sunt a! Aspernatur aliquid
      quidem possimus sit ullam nesciunt laudantium repellendus. In.
    </p>
      `;
  }
  
}
