
let ordBtn = document.getElementById("ordBtn");
ordBtn.addEventListener('click',orderfood);
function orderfood(){
    let image=document.getElementById("food");
    let order = document.querySelectorAll('input:checked');
    //console.log(order);
    if(order.length>1){
        //console.log("mul");
        image.src="https://cdn4.singleinterface.com/files/enterprise/coverphoto/178143/AppBnr-99MealOffer-760x330-22-05-23-04-32-39.jpg"
    }else{
        if(order[0]==Fries){
            //console.log("fries");
            image.src="https://mms.businesswire.com/media/20231004176688/en/1905805/4/08411-26-PR_Image_Havesies_Fries_OnionFries_1024x768_CR.jpg?download=1"
        }else if (order[0]==Burgar) {
            //console.log("bargar");
            image.src="https://assets-global.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png"
        } else if(order[0]==drinks){
           // console.log("drink");
           image.src="https://burgerking.com.my/upload/image/Product/24/Soft%20Drink.png"
        }
    }
    let orderId = Math.floor(Math.random()*1000);
    let ordId = document.getElementById("ordId");
    ordId.innerHTML="Order Id:"+orderId;
}