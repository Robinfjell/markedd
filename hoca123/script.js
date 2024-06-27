
// ! Cart Sayfasında + ve - butonuna bastığım zaman olacak işlemler;

function increaseValue(productId){
    let valueElement = document.getElementById("value" + productId);
    let value = parseInt(valueElement.innerHTML);
    value++;
    valueElement.innerHTML = value;
    updateSubtotal(productId)
    calculateTotal();
    calculateEcoTax();
    calculateShippingCost();
    calculateResult();
}

function decreaseValue(productId){
    let valueElement = document.getElementById("value" + productId);
    let value = parseInt(valueElement.innerHTML);
    if(value > 1){
        value--;
        valueElement.innerHTML = value;
        updateSubtotal(productId)
        calculateTotal();
        calculateEcoTax();
        calculateShippingCost();
        calculateResult();
    }

}

function updateSubtotal(productId){
    let valueElement = document.getElementById("value" + productId);
    let value = parseInt(valueElement.innerHTML);
    let priceElement = document.querySelector("#product" + productId + " .price");
    let price = parseInt(priceElement.innerHTML);
    let subtotalElement = document.getElementById("subtotal" + productId);
    let subtotal = (value * price) + "$";
    subtotalElement.innerHTML = subtotal;
}

function calculateTotal(){
    let subtotals = document.getElementsByClassName("subtotal");
    let total = 0;
    for (let i = 0; i < subtotals.length; i++){
        total += parseInt(subtotals[i].innerHTML);
    }

    let totalPrice = document.getElementById("totalPrice");
    totalPrice.innerHTML = total + "$";

}

function calculateEcoTax(){
    let totalPrice = document.getElementById("totalPrice");
    let ecoTax = document.getElementById("ecoTax");
    let tax = parseInt(totalPrice.innerHTML) * 0.18;
    ecoTax.innerHTML = tax.toFixed(2) + "$";
}

function calculateShippingCost(){
    let totalPrice = document.getElementById("totalPrice");
    let shippingCost = document.getElementById("shippingCost");
    let shipping = parseInt(totalPrice.innerHTML)* 0.02;

    if(parseInt(totalPrice.innerHTML) < 250){
        shippingCost.innerHTML = "Free";
    }else{
        shippingCost.innerHTML = shipping.toFixed(2) + "$";
    }

}

function calculateResult(){
    let totalPrice = document.getElementById("totalPrice");
    let shippingCost = document.getElementById("shippingCost");
    let ecoTax = document.getElementById("ecoTax");
    let result = document.getElementById("result");
    let totalResult = parseInt(totalPrice.innerHTML) + parseInt(shippingCost.innerHTML) + parseInt(ecoTax.innerHTML);

    if(shippingCost.innerHTML == "Free"){
        result.innerHTML = (parseInt(totalPrice.innerHTML) + parseInt(ecoTax.innerHTML)).toFixed(2) + "$";
    }else{
        result.innerHTML = totalResult.toFixed(2) + "$";
    }

}

function removeProduct(productId) {
    var productElement = document.getElementById("product" + productId);
    productElement.parentElement.remove();
    calculateTotal();
  }



// ! Ürün Filtrelemek İçin Kullandığım Kodlar (Wishlist sayfasındaki inputun içerisine girildiğinde çalışıyor.)

  const searchInput = document.getElementById("inpt");

  searchInput.addEventListener("keyup", function(){
     let searchText = searchInput.value.toLowerCase();

     let kartlar = document.getElementsByClassName("kart");
      for(let i = 0; i < kartlar.length; i++){
        let kart = kartlar[i];
        
        let productName = kart.querySelector(".card-text").innerHTML.toLowerCase();

        if(productName.indexOf(searchText) !== -1){
            kart.style.display = "block"
        }else{
            kart.style.display = "none"
        }
      }
  })
