var jeans=[
	{
		imgUrl:"https://images.meesho.com/images/products/17829975/454ae_512.jpg",
		type:"Embroidered Rayon Straight Kurti",
		rate:"₹258",
		preprice:"₹358",
		off:"28% off",
		rating:"4.2 *",
		
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"2 Reviews",
		
	},
		{
		imgUrl:"https://images.meesho.com/images/products/22923958/41cc4_512.jpg",
		type:"fancy kurta",
		rate:"₹256",
		preprice:"₹359",
		off:"26% off",
		rating:"3.2 *",
        
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"7 Reviews",

	},
	{
		imgUrl:"https://images.meesho.com/images/products/39517998/bcrba_512.jpg",
		type:"Kashvi Ensemble Women Kurta Sets",
		rate:"₹254",
		preprice:"₹359",
		off:"26% off",
		rating:"3.9 *",
		
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"7 Reviews",
	},
	{
		imgUrl:"https://images.meesho.com/images/products/31114825/cnmjr_512.jpg",
		type:"Charvi Graceful Kurtis",
		rate:"₹404",
		preprice:"₹550",
		off:"26% off",
		rating:"5.2 *",
		
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"5 Reviews",
	},
		{
		imgUrl:"https://images.meesho.com/images/products/17545214/f9d7a_512.jpg",
		type:"Alluring Kurtis",
		rate:"₹181",
		preprice:"₹381",
		off:"26% off",
		rating:"3.1 *",
		
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"9 Reviews",
	},
	{
		imgUrl:"https://images.meesho.com/images/products/17545214/f9d7a_512.jpg",
		type:"Banita Alluring ",
		rate:"₹281",
		preprice:"₹456",
		off:"26% off",
		rating:"4.2 *",
		
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"4 Reviews",
	},
	{
		imgUrl:"https://images.meesho.com/images/products/40411550/bgjy8_512.jpg",
		type:"jeans Alluring ",
		rate:"₹281",
		preprice:"₹456",
		off:"26% off",
		rating:"2.2 *",
		
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"17 Reviews",
	},
	{
		imgUrl:"https://images.meesho.com/images/products/41649613/tz3qy_512.jpg",
		type:"jeans welwet",
		rate:"₹681",
		preprice:"₹7546",
		off:"66% off",
		rating:"3.7 *",
		
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"57 Reviews",
	},
	
	
];
var data=[
	{
		imgUrl:"https://images.meesho.com/images/products/56407091/8bhsv_512.jpg",
		type:"Embroidered Rayon Straight Kurti",
		rate:"₹258",
		preprice:"₹358",
		off:"28% off",
		rating:"4.2 *",
		
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"2 Reviews",
		
	},
		{
		imgUrl:"https://images.meesho.com/images/products/15037795/46bfb_512.jpg",
		type:"fancy kurta",
		rate:"₹256",
		preprice:"₹359",
		off:"26% off",
		rating:"3.2 *",
        
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"7 Reviews",

	},
	{
		imgUrl:"https://images.meesho.com/images/products/63649381/rhsss_512.jpg",
		type:"Kashvi Ensemble Women Kurta Sets",
		rate:"₹254",
		preprice:"₹359",
		off:"26% off",
		rating:"3.9 *",
		
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"7 Reviews",
	},
	{
		imgUrl:"https://images.meesho.com/images/products/45352693/vugox_512.jpg",
		type:"Charvi Graceful Kurtis",
		rate:"₹404",
		preprice:"₹550",
		off:"26% off",
		rating:"5.2 *",
		
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"5 Reviews",
	},
		{
		imgUrl:"https://images.meesho.com/images/products/52069850/hywxn_512.jpg",
		type:"Banita Alluring Kurtis",
		rate:"₹181",
		preprice:"₹381",
		off:"26% off",
		rating:"3.1 *",
		
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"9 Reviews",
	},
	{
		imgUrl:"https://images.meesho.com/images/products/22266877/76343_512.jpg",
		type:"Banita Alluring Kurtis",
		rate:"₹281",
		preprice:"₹456",
		off:"26% off",
		rating:"4.2 *",
		
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"4 Reviews",
	},
	{
		imgUrl:"https://images.meesho.com/images/products/48178537/r6bhz_512.jpg",
		type:"jeans Alluring Kurtis",
		rate:"₹281",
		preprice:"₹456",
		off:"26% off",
		rating:"2.2 *",
		
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"17 Reviews",
	},
	{
		imgUrl:"https://images.meesho.com/images/products/64670546/sh4uo_512.jpg",
		type:"jeans Alluring Kurtis",
		rate:"₹681",
		preprice:"₹786",
		off:"26% off",
		rating:"3.7 *",
		
		discount:"₹100 discount on 1st order",
		free:"Free Delivery",
        review:"57 Reviews",
	},
	
	
];
localStorage.setItem("allData",JSON.stringify(data));
localStorage.setItem("jeans",JSON.stringify(jeans));

let cart_item=[];

let items=JSON.parse(localStorage.getItem("allData"))||[];
let dataContainer=document.createElement("div");
dataContainer.setAttribute("id","containerpro");
document.querySelector("body").append(dataContainer);

let displayItem=(items)=>{
	
	items.map(elem => {
		
		let prodiv=document.createElement("div");
		prodiv.setAttribute("id","itemcontainer");

        let img=document.createElement("img");
        img.setAttribute("src",elem.imgUrl)
        let tp=document.createElement("p");
        
        tp.textContent=elem.type;
        let rate=document.createElement("div");
        
        rate.setAttribute("class","rate");
        let h2=document.createElement("h2");
        h2.textContent=elem.rate;
        let pp=document.createElement("p");

        pp.textContent=elem.preprice;
        let offf=document.createElement("p");
        offf.textContent=elem.off;
        rate.append(h2,pp,offf);
        let disc=document.createElement("div");
        disc.setAttribute("class","discount");
        let dis=document.createElement("p");
        dis.textContent=elem.discount;
        let free=document.createElement("p");
        free.textContent=elem.free;
        disc.append(dis);
        let rati=document.createElement("div");
        rati.setAttribute("class","ratin");
        let rating=document.createElement("div");
        rating.setAttribute("class","rating");
        let h4=document.createElement("h4");
        h4.textContent=elem.rating;
        rating.append(h4);
		
        let  review=document.createElement("p");
        review.textContent=elem.review;
        rati.append(rating,review);
		
        prodiv.append(img,tp,rate,disc,free,rati);
		
		prodiv.addEventListener("click",function(){
			

			addtoCheckout(elem);
		})

        dataContainer.append(prodiv);

	});

}
function addtoCheckout(elem){
	localStorage.setItem("checkoutData",JSON.stringify(elem));

	window.location.href="checkOut.html";
}



displayItem(items)