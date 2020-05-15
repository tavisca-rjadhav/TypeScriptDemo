import {LitElement, html, customElement, property, css} from 'lit-element';

const myStyle = css `
td, th {
    padding: 8px;
    box-sizing: border-box;
    white-space: nowrap;
  }
 
  tr.iron-selected td {
    background-color: rgba(0, 0, 0, 0.1);
  }
  tr:hover td {
    background-color: rgba(0, 0, 0, 0.2);
  }
  tr td.iron-selected:not(:nth-of-type(1)) {
    background-color: rgba(255, 255, 0, 0.2);
  }
`;


@customElement('table-element')
export class TableElement extends LitElement{
  // define properties, to accept input
  // from the container

   // style getter
 static get styles() {
    return [
      myStyle
     ]
 }

  @property({type: Array}) dataSource;
    headers:Array<string> = [];

   constructor(){
        super();
      
   } 

   checkedAll(event){
    console.log(event);
    const myElement = document.querySelector('table-element');

    let checkboxes = <any>myElement.shadowRoot.querySelectorAll('input[type=checkbox]');
        if(event.target.checked == true){
            checkboxes.forEach(element => {
                element.checked =true;
            });
        }
        else{
            checkboxes.forEach(element => {
                element.checked =false;
            });
        }
   
   }


  render(){      
    return html `
    <h2>Element Table</h2>
    <div>
        <table>
            <thead>
                <tr>
                    ${Object.keys(this.dataSource[0]).map(i => html`<th>${i.replace(/([A-Z]+)/g, " $1")}</th>`)}
                    <th><input type="checkbox" name="productCheckbox" name="selectAll" @click="${this.checkedAll}">Select All</th>
                </tr>
                
            </thead>
            <tbody>
            ${this.dataSource.map(i => html` 
                <tr>
                   
                ${Object.keys(this.dataSource[0]).map(j => html`<td>${i[j]}</td>`)} <td><input type="checkbox" name="productCheckbox"> </td>
                    
                </tr> 
                `)}
            </tbody>
        </table>
    </div>
    `;
    }
}
