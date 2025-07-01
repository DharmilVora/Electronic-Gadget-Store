let av = document.getElementById("explorebtn");
let f = document.getElementById("maincont1");
let btn;
f.style.paddingLeft = "10px";

let hu = document.getElementById("val");
// Create the grid container outside the loop
let vv = document.createElement("div");
vv.style.display = "grid";
vv.style.gridTemplateColumns = "repeat(4, 1fr)"; // 4 items per row

function display(r) {
    for (let i = 0; i < r.length; i++) {
        let ca=localStorage.getItem("crt");
        let aaas=parseInt(ca);
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
        btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.id=r[i].id;
        btw.appendChild(btn);
        g.appendChild(btw);
        let sa=btn.id;
        let cdr=document.getElementById(sa);
        cdr.addEventListener("click",()=>{
            localStorage.setItem(`crtt${aaas}`,btn.id);
        });
        // Append each item to the grid
        vv.appendChild(g);
    }
    // Append the grid container once, after the loop
    f.appendChild(vv);
}

async ()=>{
    let response = await fetch("exa.json");
    let r = await response.json();
    // Save to localStorage properly
    localStorage.setItem("products", JSON.stringify(r));
    display(r);
};
