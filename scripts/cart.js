
let cartdata=JSON.parse(localStorage.getItem("Cart"))||[];
console.log("cartdata",cartdata);



cartdata.map(elem=>{
    let prod=document.getElementById("imgDiv");
    let img=document.createElement("img");
    img.src=elem.imgUrl;

  prod.append(img)
})