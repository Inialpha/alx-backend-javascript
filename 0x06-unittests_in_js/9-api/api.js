const express = require('express');

app = express()

const router = express.Router()
router.get('/', (req, res) => res.send('Welcome to the payment system'))

router.get('/cart/:id(\\d+)', (req,  res) => {
  const { id } = req.params
  res.send(`Payment methods for cart ${id}`)
});

app.use(router)

app.listen(7865, () => {
  console.log('API available on localhost port 7865')
})
