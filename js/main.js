var pro_name = document.getElementById("name");
var pro_price = document.getElementById("price");
var pro_cate = document.getElementById("categories");
var pro_img = document.getElementById("img");
var pro_disc = document.getElementById("discreption");

var allProductes = [];

function storagee() {
  var productes = {
    name: pro_name.value,
    price: Number(pro_price.value),
    categories: pro_cate.value,
    discreaption: pro_disc.value,
  };

  allProductes.push(productes);

  declearItems();
  displayItems();

  console.log(allProductes);
}

function declearItems() {
  pro_name.value = "";
  pro_price.value = "";
  pro_cate.value = "";
  pro_img.value = "";
  pro_disc.value = "";
}

function displayItems() {
  var html = "";

  for (var i = 0; i < allProductes.length; i++) {
    html += ` 
              
         
<div class="col-md-4 my-5">
<div class="contant">
    <div class="card Çukur" style="width: 20rem;">
    <img src="./image/_ • • • _.jpeg" class="card-img-top" alt="Çukur">
        <div class="card-body">
          <h5 class="card-title">name:       ${allProductes[i].name}  </h5>
          <h5 class="card-title">price:      ${allProductes[i].price}  </h5>
          <h5 class="card-title">categories:           ${allProductes[i].categories}  </h5>
          <p class="card-text">caption:            ${allProductes[i].discreaption}   </p>
        </div>
         <div id="row_dele" class="d-flex justify-content-between ">
            <button onclick="deleteElement(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
            <button id="pen-b" onclick="updateElement(${i})" class="btn btn-warning pen-b"><i class="fa-solid fa-pen-to-square"></i>on</button>
         </div>
      </div>
</div>
</div>

        `;
  }

  var collections = (document.getElementById("row-dis").innerHTML = html);
  updateElement(i);
}

function deleteElement(dele_n) {
  allProductes.splice(dele_n, 1);
  displayItems();
}

function updateElement(n) {
  var but1 = document.getElementById("bttn");
  var but2 = document.getElementById("pen-b");

  but2.addEventListener("click", function () {
    but1.textContent = "Update";
  });

  for (var i = 0; i < allProductes.length; i++) {
    pro_name.value = allProductes[i].name;
    pro_price.value = allProductes[i].price;
    pro_cate.value = allProductes[i].categories;
    pro_disc.value = allProductes[i].discreaption;
  }

   if('Update'){
    
    // we are using innerHtml here

   }

  
}

