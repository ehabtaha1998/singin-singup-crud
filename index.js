import express from 'express'
import UserSrouter from './src/modules/users/users.router.js'
import productsrouter from './src/modules/products/products.router.js'
import categoriesrouter from './src/modules/category/category.router.js'
const app = express()
const port = 10000



app.use(express.json())
app.use(UserSrouter)
app.use(productsrouter)
app.use(categoriesrouter)

app.listen(port, () => console.log(`i am live :)`))