import AbstractaVista from "./Abstracta.js";

export default class extends AbstractaVista {
  constructor() {
    super();
    this.setTitle("Alumnos");
  }

  async getHtml() {
    const arreglo = [10,20,30]
    return `
    <h1>Centrando una Tabla</h1>
    <p>Para centrar una table uso margin left y margin right en auto</p>
    
    <table class="center">
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
      <tr>
        <td>February</td>
        <td>$80</td>
      </tr>
    </table>
      `;
  }
  
}
