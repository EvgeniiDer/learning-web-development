const list = {
    values: ["Bread", "Milk", "Apple", "Chees", "Juice"],

    printList: function()
    {
        const container = document.getElementById("product-list-container");
        this.values.sort();
        let htmlOutput = "<ol>";
        for(let i = 0; i < this.values.length; i++)
        {
            const product = this.values[i];
            htmlOutput += `<li> ${product} </li>`;
        }
        htmlOutput += "</ol>";
        container.innerHTML = htmlOutput;
        console.log(this.values);
    },
    add: function(product)
    {
        if(product && typeof product === "string")
            this.values.push(product);
        this.values.sort();
    }
}
list.printList();
list.add("Tomato");
list.add("Been");
list.printList();
