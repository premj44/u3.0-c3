
let data = JSON.parse(localStorage.getItem("purchase"))
//console.log(data)

function appenddata(data){
  let box =   document.getElementById("purchased_vouchers")
   
  let img = document.createElement("img")
  img.src = data.image

  let name = document.createElement("h3")
  name.innerText = data.name

  let price = document.createElement("h3")
  price.innerText = data.price

   box.append(img,name,price)

}

appenddata(data)