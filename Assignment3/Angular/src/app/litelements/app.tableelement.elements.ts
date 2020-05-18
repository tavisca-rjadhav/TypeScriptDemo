import {LitElement, html, customElement, property, css} from 'lit-element';
import { Product } from '../models/app.product';

const myStyle = css `
*  {
	-moz-box-sizing: border-box;
	-o-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
body {
	color: #333;
	font-size: 1em;
}
a:link,
a:visited,
a:hover,
a:active {
	color: #000;
	text-decoration: none;
}
.container {
  margin: 50px auto;
  padding: 0 50px;
  max-width: 960px;
}
table { 
	background: #FFF;
	border-collapse: collapse;
	width: 100%;  
}
td,
th { 
	padding: 4px; 
	border: 1px solid #CCC;
	overflow: hidden;
	text-align: left;
	vertical-align: middle;
}
th { 
	background-color: #DDD; 
	font-weight: 400;
}
th a,
td a { 
	display: block;
	width: 100%;
}
th a.sort-by { 
	padding-right: 18px;
	position: relative;
}
a.sort-by:before,
a.sort-by:after {
	border: 4px solid transparent;
	content: "";
	display: block;
	height: 0;
	right: 5px;
	top: 50%;
	position: absolute;
	width: 0;
}
a.sort-by:before {
	border-bottom-color: #666;
	margin-top: -9px;
}
a.sort-by:after {
	border-top-color: #666;
	margin-top: 1px;
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
    products : Array<Product>;
  

   constructor(){
        super();
      this.products = this.dataSource;
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
   
   sortBy(name){
     console.log(name)
    this.dataSource = this.dataSource.sort(this.sortByProductName);
    

   }

   sortByProductName(p1: Product, p2:Product){
    if(p1.ProductName > p2.ProductName) return 1;
    else if(p1.ProductName === p2.ProductName) return 0;
    else return -1;
  }

  render(){      
    return html `    
    <div class="container">
      <h2>Element Table</h2>
        <table id="products">
            <thead>
                <tr>
                    ${Object.keys(this.dataSource[0]).map(i => html`<th scope="col"><a class="sort-by" @click="${this.sortBy}">${i.replace(/([A-Z]+)/g, " $1")}</a></th>`)}
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
