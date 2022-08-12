/*let frutas = ["Hb","Bu","Pz","Ud","Bn","Bz","Gll","Tn"];
var feo = false;
frutas.forEach(i =>  {
   if (i == "Pz") {
      feo = true;
   }
    if(feo) {
      i = "Cz"
    }
});
console.log(frutas); */
let feo = ["Hb","Bu","Pz","Ud","Bn","Bz","Gll","Tn"];
feo.fill("Cz",3)
console.log(feo)





