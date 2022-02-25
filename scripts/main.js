async function getData(search_thing) {
    try {

        
        
        let res = await fetch(`https://amazon23.p.rapidapi.com/product-search?query=${search_thing}&country=IN`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "amazon23.p.rapidapi.com",
                "x-rapidapi-key": "9708b965cemsh23a0a89d312f1dep1176b6jsn4c4425821b21",

            },
        });
        let data = await res.json()
        return data.result;

    } catch (error) {
        console.log("error :", error)
    }

}





function displayItem(data, mainDiv) {
    mainDiv.innerHTML = "";
    data.map(function (elem) {
        var prodiv = document.createElement("div");
        prodiv.setAttribute("id", "itemcontainer");

        var img = document.createElement("img");
        img.setAttribute("src", elem.imgUrl)
        var tp = document.createElement("p");

        tp.textContent = elem.type;
        var rate = document.createElement("div");

        rate.setAttribute("class", "rate");
        var h2 = document.createElement("h2");
        h2.textContent = elem.rate;
        var pp = document.createElement("p");

        pp.textContent = elem.preprice;
        var offf = document.createElement("p");
        offf.textContent = elem.off;
        rate.append(h2, pp, offf);
        var disc = document.createElement("div");
        disc.setAttribute("class", "discount");
        var dis = document.createElement("p");
        dis.textContent = elem.discount;
        var free = document.createElement("p");
        free.textContent = elem.free;
        disc.append(dis);
        var rati = document.createElement("div");
        rati.setAttribute("class", "ratin");
        var rating = document.createElement("div");
        rating.setAttribute("class", "rating");
        var h4 = document.createElement("h4");
        h4.textContent = elem.rating;
        rating.append(h4);
        var review = document.createElement("p");
        review.textContent = elem.review;
        rati.append(rating, review);

        prodiv.append(img, tp, rate, disc, free, rati);
        prodiv.addEventListener("click", function () {
            addToPreveiw(elem);
        })
        mainDiv.append(prodiv);
    });

}
export {getData}