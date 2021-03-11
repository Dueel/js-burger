
var btnCalculate = document.getElementById('calculate');
var total = document.getElementById('total');
var ingredients = document.getElementsByTagName('li');
var couponUser = document.getElementById('coupon');
var nameBurger = document.getElementById('nameBurger');

var totalPrice = 10;
var coupons = ['SCONTO1', 'SCONTO2', 'SCONTO3']


btnCalculate.addEventListener('click', function(){
    
    if(nameBurger.value != 0){

        for(var i = 0; i < ingredients.length; i++){
        
            var ing = ingredients[i];
            var ingAdded = ing.children[2].checked;
            var ingPrice = parseInt(ing.children[2].dataset.price);
    
            if(ingAdded){
    
                totalPrice += ingPrice;
            }
        }
    
        for(var i = 0; i < coupons.length; i++){
    
            if(couponUser.value == coupons[i]){
                totalPrice *= 0.8;
            }
        }
    
        total.innerHTML = totalPrice;
        console.log(totalPrice, couponUser.value);

    } else [
        alert('Name you burger!')
    ]
})


// Alert per nome panino
// Applicare lo sconto