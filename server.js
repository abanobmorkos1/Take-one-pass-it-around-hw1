const express= require("express")
const app = express()


// Take one Down and Pass it Around

//home page
app.get("/" , (req , res) => {
    res.send(`<h1>99 Bottles of beer on the wall <br> <a href="/98">take one down, pass it around <style>
    h1{
        color : black;
        text-align: center;
    }
    a{
        color : darkGreen;
    }
    </style></h1></a>`)
})

app.get("/:number_of_bottles" , (req ,res) => {
    const bottles = req.params.number_of_bottles
    if(bottles > 0 )
    res.send(` <h1> ${bottles} bottles of beer on the wall <br> <a href="${bottles - 1}">take one down, pass it around</a></h1><style> 
    h1{
        color : red;
        text-align: center;
    }</style>`
    )
    
    else(
        res.send(`<h1><a href="/">Restocking soon</a></h1> 
    <style>
    a{
        color : red;
        position: center;
    }

    h1{
        text-align: center;
    }
    </style>`)    
    )
})
// LISTEN
app.listen(3333, (req , res) =>{
    console.log("listeing on port 3000")
})