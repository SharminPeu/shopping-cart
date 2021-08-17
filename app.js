function updateProductNumber(product,price,isIncreasing)
{
    const productInput=document.getElementById(product + '-number');
    let productNumber =productInput.value;

    if(isIncreasing==true){
         productNumber=parseInt(productNumber)+1;
        //  another way
      /*   const caseNumber=parseInt(caseInput.value)+1;
        caseInput.value=caseNumber; */
    }
    else{
        if(productNumber>0) 
        {
        // const caseNumber =caseInput.value;
        productNumber=parseInt(productNumber)-1;
        console.log(productNumber)
        }
        else{
            console.log('error')
        }
    }
    productInput.value=productNumber;
    // update  total
    const productTotal=document.getElementById(product + '-total');
    productTotal.innerText= productNumber*price;

    // calculate total
    calculateTotal();
}

function getInputValue(product)
{
    const productInput=document.getElementById(product +'-number');
    const productNumber=parseInt(productInput.value);
 return productNumber;
}
function calculateTotal()
{
const phoneTotal=getInputValue('phone')*1219;
const caseTotal=getInputValue('case')*59;
const subTotal=phoneTotal+caseTotal;
// console.log(subTotal);
const taxAmount=subTotal/10;
const totalPrice=subTotal+taxAmount;
// update  on the html
document.getElementById('sub-total').innerText=subTotal;
document.getElementById('tax-amount').innerText=taxAmount;
document.getElementById('total-price').innerText=totalPrice;

}

// for phone increase decrese events

document.getElementById('Phone-plus').addEventListener('click',function()
{
    updateProductNumber('phone',1219,true);
})
document.getElementById('Phone-minus').addEventListener('click',function()
{
    updateProductNumber('phone',1219,false);
})

// handle  case increse decrese events 
document.getElementById('case-plus').addEventListener('click',function(){
/* const caseInput=document.getElementById('case-number');
const caseNumber=parseInt(caseInput.value)+1;
caseInput.value=caseNumber; */
updateProductNumber('case',59,true);
})

document.getElementById('case-minus').addEventListener('click',function()
{
    updateProductNumber('case',59,false);
    // const caseInput=document.getElementById('case-number');
    /* if(caseInput.value>0)
    {
    const caseNumber =caseInput.value;
    caseInput.value=parseInt(caseNumber)-1;
    console.log(caseNumber)
    }
    else{
        console.log('error')
    } */
})

