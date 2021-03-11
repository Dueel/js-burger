
var ingredients = document.getElementsByClassName('ingredients');
var totalPrice = 10;

var lis = document.getElementsByTagName('li');

for(var i = 0; i < lis.length; i++){
    
    li = lis[i];
    li.addEventListener('click', function(){
        
        // var clickedLi = this;
        var clickedLiChildren = this.children;
        var clickedCheckbox = clickedLiChildren[2];
        console.log(clickedCheckbox);
        clickedCheckbox.checked = !clickedCheckbox.checked
    })
}


var btnCalculate = document.getElementById('calculate');

btnCalculate.addEventListener('click', function(){
    
    var nameBurger = document.getElementById('nameBurger').value;
    
    if(nameBurger.length > 1){
        
        for(var i = 0; i < ingredients.length; i++){
            
            var ing = ingredients[i];
            var ingAdded = ing.checked;
            var ingPrice = parseInt(ing.dataset.price);
            
            if(ingAdded){
                
                totalPrice += ingPrice;
            }
        }

        var couponUser = document.getElementById('coupon');
        var coupons = ['SCONTO1', 'SCONTO2', 'SCONTO3']
    
        for(var i = 0; i < coupons.length; i++){
    
            if(couponUser.value == coupons[i]){
                totalPrice *= 0.8;
            }
        }
    
        document.getElementById('total').innerHTML = totalPrice;
        
    } else {
        
        alert('Name you burger!')
    }

})



