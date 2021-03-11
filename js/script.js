
var btnCalculate = document.getElementById('calculate');
var total = document.getElementById('total');
var ingredients = document.getElementsByTagName('li');
var totalPrice = 10;



btnCalculate.addEventListener('click', function(){
    

    for(var i = 0; i < ingredients.length; i++){
    
        var ing = ingredients[i];
        var ingAdded = ing.children[2].checked;
        var ingPrice = parseInt(ing.children[2].dataset.price);

        if(ingAdded){

            totalPrice += ingPrice;
        }
    
    }

    total.innerHTML = totalPrice;
    console.log(totalPrice);
    
})


// Alert per nome panino
// Applicare lo sconto