import AbstractaVista from "./Abstracta.js";

export default class extends AbstractaVista {
  constructor() {
    super();
    this.setTitle("Alumnos");
  }

  async getHtml() {
    return `
    <h1>Profesores</h1>
    <p>Estamos navegando al link de profesores</p>
    `;
  }
}
