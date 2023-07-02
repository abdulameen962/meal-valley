function next(name) {
    document.getElementById(name).onclick = () => {
        const parent = event.target.parentElement;
        const img = parent.children[0].src;
        const header = parent.children[1].innerHTML;
        const text = parent.children[2].innerHTML;
        const price = parent.children[3].innerHTML;
        location.href = "./product.html";
        localStorage.setItem("header", header);
        localStorage.setItem("text", text + "Meal Valley is the best restaurant ever. I have been eating at the restaurant for over 10 years now.Very good customer service,delicious food and in a safe and good environment to eat.I totally reconmend it to everyone.Meal Valley is the best restaurant ever. I have been eating at the restaurant for over 10 years now.Very good customer service,delicious food and in a safe and good environment to eat.I totally reconmend it to everyone.Meal Valley is the best restaurant ever.")
        localStorage.setItem("image", img);
        localStorage.setItem("price", price);
    }
}
next("food_1");
next("food_2");
next("food_3");
next("food_4");
next("food_5");
next("food_6");
next("food_7");
next("food_8");
next("food_9");
next("food_10");
next("food_11");
next("food_12");
next("food_13");
next("food_14");
next("food_15");
next("food_16");
next("food_17");
next("food_18");
next("food_19");
next("food_20");