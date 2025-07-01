let vgy = document.getElementById("maincont1");
vgy.style.paddingLeft = "10px";
let huu = document.getElementById("val");
// Create the grid container outside the loop
let vvv = document.createElement("div");
vvv.style.display = "grid";
vvv.style.gridTemplateColumns = "repeat(4, 1fr)"; // 4 items per row

function display(r) {
    for (let i = 0; i < r.length; i++) {
        let h;
        let g = document.createElement("div");
        g.style.height = "450px";
        g.style.width = "400px";
        g.style.backgroundColor = "white";
        g.style.paddingLeft = "15px";

        let d = document.createElement("div");
        d.id = r[i].id;
        d.style.width = "200px";
        d.style.height = "200px";
        d.style.backgroundImage = `url(${r[i].image})`;
        d.style.backgroundSize = "contain";
        d.style.backgroundRepeat = "no-repeat";
        g.appendChild(d);

        let h2 = document.createElement("h2");
        h2.innerText = `${r[i].name}`;
        h2.style.paddingTop = "15px";
        g.appendChild(h2);

        let p = document.createElement("p");
        p.innerText = `${r[i].description}`;
        p.style.paddingTop = "15px";
        g.appendChild(p);

        let p1 = document.createElement("p");
        p1.innerText = `Price: ${r[i].price} Rs`;
        p1.style.paddingTop = "15px";
        g.appendChild(p1);

        let p2 = document.createElement("p");
        p2.innerText = `Stock: ${r[i].stock}`;
        p2.style.paddingTop = "15px";
        g.appendChild(p2);

        let btw = document.createElement("div");
        btw.style.paddingTop = "15px";
        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btw.appendChild(btn);
        g.appendChild(btw);

        btn.addEventListener("click", () => {
            localStorage.setItem("crt",i);
            huu.innerText = localStorage.getItem("crt");
        });

        // Append each item to the grid
        vvv.appendChild(g);
    }
    // Append the grid container once, after the loop
    vgy.appendChild(vvv);
}

document.addEventListener("DOMContentLoaded", function dd(){
    let r = JSON.parse(localStorage.getItem("products"));
    display(r); // Call the display function with parsed data
});
dd();