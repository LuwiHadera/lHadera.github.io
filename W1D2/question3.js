let data = [
  { productName: "iphone", category: "phone", quantity: 10 },
  { productName: "laptop", category: "computer", quantity: 100 },
  { productName: "tv", category: "electronics", quantity: 25 },
  { productName: "car", category: "automobile", quantity: 3 },
];

function addItem() {
  let name = document.getElementById("name").value;
  let category = document.getElementById("category").value;
  let quantity = document.getElementById("quantity").value;
  let table = document.getElementById("table");
  let obj = {
    productName: name,
    category: category,
    quantity: quantity,
  };
  data.push(obj);
  
    let row = table.insertRow();
    for (key in obj) {
      let cell = row.insertCell();
      let text = document.createTextNode(obj[key]);
      cell.appendChild(text);
    }
  
 
}

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.getElementById("table");
let Maindata = Object.keys(data[2]);
generateTableHead(table, Maindata);
generateTable(table, data);
