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
next("entry1");
next("entry2");
next("entry3");
next("entry4");