function user(n,e,a,w){

    this.name = n;
    this.email = e;
    this.address = a;
    this.wallet = w;
}


function userdata(e){
    event.preventDefault()
    //console.log("hi")

    let form = document.getElementById("form")
    let name = form.name.value
    let email = form.email.value
    let address = form.address.value
    let wallet = form.amount.value

    let u1 = new user(name,email,address,wallet)
    console.log(u1)

    let u1data = JSON.parse(localStorage.getItem("user")) || []
    u1data.push(u1)
    console.log(u1data)

    localStorage.setItem("user",JSON.stringify(u1data))
}