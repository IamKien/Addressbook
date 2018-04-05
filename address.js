
var fullName = document.getElementById("fullName");
var address = document.getElementById("address");
var phoneNumber = document.getElementById("phoneNumber");
var container = document.getElementById("container");


var addressbook = [];

function addData(name, address, phone){
  addressbook.push({
    name: name,
    address: address,
    phone: phone
  });
}
function showContacts(){
  container.innerHTML = "";

  addressbook.forEach((data, index) => {
    var div = document.createElement('div');
    div.id = index;
    div.innerHTML = `
      <span>${addressbook[index].name} ${addressbook[index].address} ${addressbook[index].phone}</span>
      <i onclick="deleteTodo(${index})" class="fa fa-trash"></i>
      <i onclick="editTodo(${index})" class="fa fa-edit"></i>
    `;
    container.appendChild(div)
  })
}

function deleteTodo(index){
  addressbook.splice(index, 1);
  showContacts();
}

function editTodo(index){
  fullName.value = addressbook[index].name;
  address.value = addressbook[index].address;
  phoneNumber.value = addressbook[index].phone;
  addressbook.splice(index, 1);
  showContacts();
}

function search(){
  var search = prompt("Enter Search");
  var text = search.toLowerCase();
  var find = addressbook.filter( word => word.name.toLowerCase().includes(text));

  alert(JSON.stringify(find));
}

function submit(){
  //get the value from name, phone, addressbook
  // push it into addressbook
  //display it on website
  addData(fullName.value, address.value, phoneNumber.value)

  localStorage.setItem('items', JSON.stringify(addressbook));
  const data = JSON.parse(localStorage.getItem('items'));


  fullName.value = "";
  address.value = "";
  phoneNumber.value = "";

  showContacts();
}
