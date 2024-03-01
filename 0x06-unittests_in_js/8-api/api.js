const express = require('express');

app = express()

const router = express.Router()
router.get('/', (req, res) => res.send('Welcome to the payment system'))
app.use(router)

app.listen(7865, () => {
  console.log('API available on localhost port 7865')
})
