# scrapper-petrolprice

City and price

document.querySelectorAll("h2.txtC+div div.W70, h2.txtC+div div.fl, h2.txtC+div div.fnt18").forEach(function(result){console.log(result.innerText);})

state
document.querySelectorAll("h2.txtC a.noUnderline").forEach(function(result){console.log(result.innerText);})


https://medium.com/@prajramesh93/getting-started-with-node-express-and-mysql-using-sequelize-ed1225afc3e0

TODO:
- store state and city in separate tables and establish associations
- If db not available then store it in json and sync later
