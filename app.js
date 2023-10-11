const orders = [
    {
        id: 1,
        pizza: "Hawaii",
        extra: "Kukorica",
        ital: "Pepsi zero",
        ar: 1500
    },
    {
        id: 2,
        pizza: "Sonkás",
        extra: "Gomba",
        ital: "Limonádé",
        ar: 1200
    },
    {
        id: 3,
        pizza: "Szalámis",
        extra: "Sajt",
        ital: "Ice tea",
        ar: 1800
    },
    {
        id: 4,
        pizza: "Magyaros",
        extra: "Kukorica",
        ital: "Coca kóla",
        ar: 2000
    },
    {
        id: 5,
        pizza: "Sajtos",
        extra: "Gomba",
        ital: "Limonádé",
        ar: 1500
    },
    {
        id: 6,
        pizza: "Hawaii",
        extra: "Sonka",
        ital: "Ice tea",
        ar: 2200
    }
]

const box = document.getElementById("box");

window.addEventListener("load", () => {

    orders.map((order) => {

        const div = document.createElement("div");
        div.classList.add("order");

        div.innerHTML = `<ul>
            <li>Pizza: ${order.pizza}</li>
            <li>Extra: ${order.extra}</li>
            <li>Ital: ${order.ital}</li>
            <li>Ár: ${order.ar} Ft</li>
            </ul>`;

        box.appendChild(div);
    })
})