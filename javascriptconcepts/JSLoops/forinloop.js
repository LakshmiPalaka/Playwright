menuitems = {
    item1: "Dosa",
    item2: "Idli",
    item3: "Vada",
    item4: "Pongal"
}

for (let item in menuitems) {
    console.log(item)               // this will print the keys of the menuitems object       
    console.log(menuitems[item])    // this will print the values of the menuitems object
}