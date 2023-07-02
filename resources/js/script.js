const app = Vue.createApp({
    data() {
        return {
            onlyVisible: true,
            searchVisible: false,
            navClass: "fas fa-align-right",
            navVisible: false,
            zIndex: 1,
            foodInput: "",
            opacity: 1,
            testRight: "",
            navIndex: "-1",
            foodColumns: ["name", "descr", "imgLink"],
            foodSet: [
                { name: "SASUSKA NOOB", descr: "Sasuska is a recipe that can only be found in Foodie, it has been a recipe for over 15 years.Usually eaten as Lunch.A tasy and delicious one", imgLink: "./resources/images/food1.png", id: "entry1", price: "250" },
                { name: "VEGE COMBO", descr: "A newly added recipe to the collection of Foodie.Usually eaten as dinner.A first class recipe made for a first class you.A 5 star rated meal", imgLink: "./resources/images/food2.png", id: "entry2", price: "300" },
                { name: "MILKY CRACKER FAST", descr: "A breakfast recipe made by Foodie for highly rated people like you.Want to get a cool,tasty and nutritious breakfast. Milky Cracker fast is the way for you", imgLink: "./resources/images/food3.png", id: "entry3", price: "280" },
                { name: "SASUSKA NOOB", descr: "Sasuska is a recipe that can only be found in Foodie, it has been a recipe for over 15 years.Usually eaten as Lunch.A tasy and delicious one", imgLink: "./resources/images/food1.png", id: "entry4", price: "350" },
            ],
            testimonialSet: [{
                    name: "Sergio Ramond",
                    title: "Highly esteemed customer at Meal Valley",
                    imgLink: "./resources/images/person.png",
                    text: "Meal Valley is the best restaurant ever. I have been eating at the restaurant for over 10 years now.Very good customer service,delicious food and in a safe and good environment to eat.I totally reconmend it to everyone",
                }, {
                    name: "Froster Kumar",
                    title: "Highly esteemed customer at Meal Valley",
                    imgLink: "./resources/images/person2.png",
                    text: "Meal Valley is the best restaurant ever. I have been eating at the restaurant for over 10 years now.Very good customer service,delicious food and in a safe and good environment to eat.I totally reconmend it to everyone",
                },
                {
                    name: "Billy Christein",
                    title: "Highly esteemed customer at Meal Valley",
                    imgLink: "./resources/images/person3.png",
                    text: "Meal Valley is the best restaurant ever. I have been eating at the restaurant for over 10 years now.Very good customer service,delicious food and in a safe and good environment to eat.I totally reconmend it to everyone",
                }
            ],
            counter: 0,
            state: "",
            team: [{
                    name: "MR. JOHNNY WHITE",
                    title: "MANAGING DIRECTOR",
                    imgLink: "./resources/images/team1.png"
                },
                {
                    name: "MRS. CLARISA WHITE",
                    title: "FINANCE MANAGER",
                    imgLink: "./resources/images/team2.png"
                },
                {
                    name: "CHEF SARA CHRISTINE",
                    title: "THE HEAD CHEF",
                    imgLink: "./resources/images/team3.png"
                },
                {
                    name: "CHEF SARA CHRISTINE",
                    title: "THE HEAD CHEF",
                    imgLink: "./resources/images/team3.png"
                },
                {
                    name: "MRS. CLARISA WHITE",
                    title: "FINANCE MANAGER",
                    imgLink: "./resources/images/team2.png"
                },
                {
                    name: "MR. JOHNNY WHITE",
                    title: "MANAGING DIRECTOR",
                    imgLink: "./resources/images/team1.png"
                },
            ],
            text1: "",
            tel: "",
            reasons: "",
            message: "",
            teamright: "",
            teamcounter: 0,
            selectClass: "fas fa-angle-up",
            foodvisible: false,
            amazeSet: [{
                    name: "CHICKEN ONIONS SALAD",
                    text: "Price of $150 per plate",
                    imgLink: "./resources/images/amaze1.png",
                    value: "food_1",
                    price: "150",
                    page: "./chicken.html"
                },
                {
                    name: "RICE KEBAB DELITE",
                    text: "Price of $180 per plate",
                    imgLink: "./resources/images/amaze2.png",
                    value: "food_2",
                    price: "180",
                    page: "./rice.html"
                },
                {
                    name: "EGG RICE SALAD",
                    text: "Price of $130 per plate",
                    imgLink: "./resources/images/amaze3.png",
                    value: "food_3",
                    price: "130",
                    page: "./egg.html"
                },
                {
                    name: "RICE KEBAB DELITE",
                    text: "Price of $180 per plate",
                    imgLink: "./resources/images/amaze2.png",
                    value: "food_4",
                    price: "180",
                    page: "./rice.html"
                },
                {
                    name: "EGG RICE SALAD",
                    text: "Price of $130 per plate",
                    imgLink: "./resources/images/amaze3.png",
                    value: "food_5",
                    price: "130",
                    page: "./egg.html"
                },
                {
                    name: "RICE KEBAB DELITE",
                    text: "Price of $180 per plate",
                    imgLink: "./resources/images/amaze2.png",
                    value: "food_6",
                    price: "180",
                    page: "./rice.html"
                },
                {
                    name: "CHICKEN ONIONS SALAD",
                    text: "Price of $150 per plate",
                    imgLink: "./resources/images/amaze1.png",
                    value: "food_7",
                    price: "150",
                    page: "./chicken.html"
                },
                {
                    name: "RICE KEBAB DELITE",
                    text: "Price of $180 per plate",
                    imgLink: "./resources/images/amaze2.png",
                    value: "food_8",
                    price: "180",
                    page: "./rice.html"
                },
                {
                    name: "EGG RICE SALAD",
                    text: "Price of $130 per plate",
                    imgLink: "./resources/images/amaze3.png",
                    value: "food_9",
                    price: "130",
                    page: "./egg.html"
                },
                {
                    name: "RICE KEBAB DELITE",
                    text: "Price of $180 per plate",
                    imgLink: "./resources/images/amaze2.png",
                    value: "food_10",
                    price: "180",
                    page: "./rice.html"
                },
                {
                    name: "EGG RICE SALAD",
                    text: "Price of $130 per plate",
                    imgLink: "./resources/images/amaze3.png",
                    value: "food_11",
                    price: "130",
                    page: "./egg.html"
                },
                {
                    name: "RICE KEBAB DELITE",
                    text: "Price of $180 per plate",
                    imgLink: "./resources/images/amaze2.png",
                    value: "food_12",
                    price: "180",
                    page: "./rice.html"
                },
                {
                    name: "CHICKEN ONIONS SALAD",
                    text: "Price of $150 per plate",
                    imgLink: "./resources/images/amaze1.png",
                    value: "food_13",
                    price: "150",
                    page: "./chicken.html"
                },
                {
                    name: "RICE KEBAB DELITE",
                    text: "Price of $180 per plate",
                    imgLink: "./resources/images/amaze2.png",
                    value: "food_14",
                    price: "180",
                    page: "./rice.html"
                },
                {
                    name: "EGG RICE SALAD",
                    text: "Price of $130 per plate",
                    imgLink: "./resources/images/amaze3.png",
                    value: "food_15",
                    price: "130",
                    page: "./egg.html"
                },
                {
                    name: "RICE KEBAB DELITE",
                    text: "Price of $180 per plate",
                    imgLink: "./resources/images/amaze2.png",
                    value: "food_16",
                    price: "180",
                    page: "./rice.html"
                },
                {
                    name: "EGG RICE SALAD",
                    text: "Price of $130 per plate",
                    imgLink: "./resources/images/amaze3.png",
                    value: "food_17",
                    price: "130",
                    page: "./egg.html"
                },
                {
                    name: "RICE KEBAB DELITE",
                    text: "Price of $180 per plate",
                    imgLink: "./resources/images/amaze2.png",
                    value: "food_18",
                    price: "180",
                    page: "./rice.html"
                },
                {
                    name: "CHICKEN ONIONS SALAD",
                    text: "Price of $150 per plate",
                    imgLink: "./resources/images/amaze1.png",
                    value: "food_19",
                    price: "150",
                    page: "./chicken.html"
                },
                {
                    name: "RICE KEBAB DELITE",
                    text: "Price of $180 per plate",
                    imgLink: "./resources/images/amaze2.png",
                    value: "food_20",
                    price: "180",
                    page: "./rice.html"
                },
            ],
            mainInput: "",
            amazeColumns: ["name", "text", "imgLink"],
            selectIndex: 1,
            index: 1,
            rightFood: "0%",
            text: localStorage.getItem("text"),
            header: localStorage.getItem("header"),
            img: localStorage.getItem("image"),
        }
    },
    mounted() {
        window.onscroll = () => {
            if (window.scrollY > 10) {
                document.querySelector("nav").style.background = "rgba(255, 215, 0, 0.1)";
            } else {
                document.querySelector("nav").style.background = "none";
            }
        }
        if (this.checkout[0].header !== this.tester) {
            console.log("it works");
        } else {
            console.log("it is shit");
        }
    },
    methods: {
        foodshow() {
            this.foodvisible = !this.foodvisible;
            if (this.foodvisible == false) {
                this.selectClass = "fas fa-angle-up";
                this.index = 1;
                this.selectIndex = 1;

            } else {
                this.selectClass = "fas fa-angle-down";
                this.index = -1;
                this.selectIndex = 1;
            }
        },
        left() {
            let counter = this.counter;
            counter = (counter > 1) ? counter - 1 : 0;
            this.teamright = (counter) * 100 + '%';
        },
        right() {
            let counter = this.counter;
            counter = (counter < 1) ? counter + 1 : 0;
            this.teamright = (counter) * 100 + '%';
        },
        show() {
            this.onlyVisible = false;
            this.searchVisible = true;
        },
        hide() {
            this.onlyVisible = true;
            this.searchVisible = false;
        },
        nav() {
            this.navVisible = !this.navVisible;
            if (this.navVisible == false) {
                this.navClass = "fas fa-align-right";
                this.opacity = 1;
                this.navIndex = "-1";
            } else {
                this.navClass = "fas fa-times";
                this.opacity = .4;
                this.navIndex = "1";
                document.querySelector("nav").style.background = "none";
            }
        },
        leftClick() {
            let counter = this.counter;
            counter = (counter > 3) ? counter - 1 : 0;
            this.testRight = (counter) * 100 + '%';
        },
        rightClick() {
            let counter = this.counter;
            counter = (counter < 3) ? counter + 1 : 0;
            this.testRight = (counter) * 100 + '%';
        },
        mail() {
            location.href = "mailto:webworld55220@gmail.com?subject=''";
        },
        contactmail(event) {
            event.preventDefault();
            nameValue = this.text1;
            subjectValue = this.reasons;
            messageValue = this.message + this.tel;
            location.href = `mailto:webworld55220@gmail.com?&subject=${nameValue}&body=${messageValue}`;
            nameValue = "";
            subjectValue = "";
            messageValue = "";
        },
        phone() {
            location.href = "tel:+2349054050533";
        },
        one() {
            location.href = "about.html#food_1"
        },
        two() {
            location.href = "about.html#food_5"
        },
        three() {
            location.href = "about.html#food_9"
        },
        four() {
            location.href = "about.html#food_13"
        },
        five() {
            location.href = "about.html#food_17"
        },
    },
})
app.directive("focus", {
    mounted(el) {
        el.focus()
    }
})
app.component("known-food", {
    template: "#food-template",
    props: {
        entries: Array,
        filterKey: String,
    },
    data: function() {
        return {
            sortKey: ""
        }
    },
    computed: {
        fElement: function() {
            const filterKey = this.filterKey &&
                this.filterKey.toLowerCase()

            let entries = this.entries

            if (filterKey) {
                entries = entries.filter(function(row) {
                    return Object.keys(row).some(function(key) {
                        return (
                            String(row[key]).toLowerCase().indexOf(filterKey) > -1
                        )
                    })
                })
            }
            return entries
        },
        sortColumns() {
            const sortedColumns = {}

            this.columns.forEach(function(key) {
                sortedColumns[key] = 1
            })
            return sortedColumns
        }
    }
})
app.component("testimonial-component", {
    props: {
        columns: Array,
        pos: String,
        state: String
    },
    template: "#testimonial"
})
app.component("social-comp", {
    template: `
    <div class="socials">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-linkedin"></i>
    </div>
    `
})
app.component("team-main", {
    props: {
        teams: Array,
        teamright: String
    },
    template: `
    <div class="official" v-for="team in teams" v-bind:style="{right: teamright}">
        <img :src="team.imgLink" :alt="team.name"/>
        <h3>{{team.name}}</h3>
        <p>{{team.title}}</p>
    </div>
    `
})
app.component("amaze-food", {
    template: "#amaze-food",
    props: {
        rightFood: String,
        filterKey: String,
        entries: Array,
        columns: Array,
        number: Array,
    },
    data: function() {
        return {
            sortKey: ""
        }
    },
    computed: {
        aElement: function() {
            const filterKey = this.filterKey &&
                this.filterKey.toLowerCase()

            let entries = this.entries

            if (filterKey) {
                entries = entries.filter(function(row) {
                    return Object.keys(row).some(function(key) {
                        return (
                            String(row[key]).toLowerCase().indexOf(filterKey) > -1
                        )
                    })
                })
            }
            return entries
        },
        sortColumns() {
            const sortedColumns = {}
            this.columns.forEach(function(key) {
                sortedColumns[key] = 1
            })
            return sortedColumns
        }
    }
})
app.component("remainder-part", {
    template: `
    <div class="mailing">
    <h2 data-aos="fade-up" data-aos-duration="1000">Join our mailing list</h2>
    <form action="https://app.getresponse.com/add_subscriber.html" accept-charset="utf-8" method="post" target="_blank" data-aos="fade-up" data-aos-duration="1000">
        <input type="email" name="email" required placeholder="Enter your email address" v-model="email" /><br/>
        <input type="hidden" name="campaign_token" value="oiGE5" />
        <input type="hidden" name="thankyou_url" value="http://127.0.0.1:5500" />
        <input type="hidden" name="start_day" value="0" />
        <input type="submit" value="Submit now" />
    </form>
</div>
<footer>
    <section class="left" data-aos="fade-down" data-aos-duration="1000">
        <h2>
            <p class="first">Meal</p>
            <p class="second">Valley</p>
        </h2>
        <p>Meal Valley is a world leading restaurant and food provider,it has branches in over 50 countries in the world,served at very important events in the world and companies. We are a world-class restaurant near you that provides food near you.Whether
            it is breakfast,lucnh or dinner.</p>
        <div class="links">
            <social-comp></social-comp>
        </div>
    </section>
    <section class="right" data-aos="fade-down" data-aos-duration="1000">
        <h2>Navigation</h2>
        <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./index.html#contacts">Contacts</a></li>
            <li><a href="./index.html#testimonial">Testimonials</a></li>
            <li><a href="./about.html#team">Team</a></li>
            <li><a href="./about.html#shop">Shop</a></li>
        </ul>
    </section>
</footer>
    `
})
app.component("product-main", {
    props: {
        res: String,
        header: String,
        price: String,
        text: String
    },
    template: `
     <div class="product_shop">
     <div class="left">
       <img :src="res" :alt="header">
     </div>
     <div class="right">
     <h1>{{ header }} </h1>
     <p>{{ text }}</p>
     <p style="opacity:0">{{ price }}</p>
     <slot></slot>
     </div>
     </div>
    `
})
app.mount("#body")