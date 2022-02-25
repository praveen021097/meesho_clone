let data=JSON.parse(localStorage.getItem("checkoutData"))||[];
let cart_item = JSON.parse(localStorage.getItem('Cart')) || [];
console.log(data);


let appendData=(data)=>{
    let bigimg=document.getElementById("bigImage");
    let minidiv=document.getElementById("miniimge");
    let pricing=document.getElementById("price");
    let ratings=document.createElement("div");
    let button=document.getElementById("addtocart");

    ratings.setAttribute("id","rating");

    let imgmini=document.createElement("img");
    imgmini.src=data.imgUrl;

    let img=document.createElement("img");
    img.src=data.imgUrl;

    let type=document.createElement("p");
    type.innerText=data.type;

    let pri=document.createElement("h4");
    pri.innerText=data.rate;

    let ratestr=document.createElement("span");
    ratestr.innerText=data.rating;

    let ratin=document.createElement("span");
    ratin.innerText=`${Math.floor(Math.random()*5+10)} ratings`;

    let reviews=document.createElement("span");
    reviews.innerText=data.review;
    let br=document.createElement("br");
    let dilivaryMode=document.createElement("p");
    dilivaryMode.innerText="free delivery";
    let buttonContent=document.createElement("p");
    buttonContent.innerText="Add To Cart";

    button.addEventListener("click",function(){
    
        addToCart(data);
    })

    ratings.append(ratestr,ratin,reviews,br,dilivaryMode)
    minidiv.append(imgmini)
    bigimg.append(img);
    pricing.append(type,pri,ratings)
    button.append(buttonContent)
   

}
appendData(data);

function addToCart(data) {
    // console.log(data);
    if (cart_item.length === 0) {
        cart_item.push(data);
        localStorage.setItem("Cart", JSON.stringify(cart_item));
    }
    else {
       
        let c = 0;
        for (let i = 0; i < cart_item.length; i++) {
            if (cart_item[i].image === data.image) {
                console.log(++c);
            }
        }
        if (c === 0) {
            cart_item.push(data);
            localStorage.setItem("Cart", JSON.stringify(cart_item));

        }
    }
	window.location.href="cart.html";
}

