const express = require('express');

app = express()
app.use(express.json())

const router = express.Router()
router.get('/', (req, res) => res.send('Welcome to the payment system'))

router.get('/cart/:id(\\d+)', (req,  res) => {
  const { id } = req.params
  res.send(`Payment methods for cart ${id}`)
});

router.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  })
});

router.post('/login', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
})


app.use(router)

app.listen(7865, () => {
  console.log('API available on localhost port 7865')
})
