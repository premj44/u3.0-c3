
let x = JSON.parse(localStorage.getItem("user"))
//console.log(Object.values(x.wallet))
let a = document.getElementById("wallet_balance")
a.innerText = Object.values(x)

let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"

let container = document.getElementById("voucher_list")

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    
    Append(res[0].vouchers)
    //console.log(res)

})
.catch(function(err){
    console.log(err)
})

function Append(data){
    console.log(data)
    data.forEach(function(ele){

    let voucher = document.createElement("div")
    voucher.setAttribute("class","voucher")

    let img = document.createElement("img")
    img.src = ele.image

    let name = document.createElement("h3")
    name.innerText = ele.name

    let price = document.createElement("h3")
    price.innerText = ele.price

    let btn = document.createElement("button")
    btn.innerText = "Buy"
    btn.setAttribute("class","buy_voucher")
    btn.addEventListener("click",function(){
        mybtn(ele)
    })

    voucher.append(img,name,price,btn)
    container.append(voucher)
    })
}

function mybtn(ele){
    //console.log("hi")
   localStorage.setItem("purchase",JSON.stringify(ele))
   window.location.reload()
}