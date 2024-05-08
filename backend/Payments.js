

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/Payment', { useNewUrlParser: true, useUnifiedTopology: true });

// // Define schema for payment data
// const paymentSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   phoneNumber: String,
//   streetAddress: String,
//   city: String,
//   state: String,
//   zipCode: String,
//   cardNumber: String,
//   exp: String,
//   cvv: String,
//   paymentMethod: String,
// });

// const Payment = mongoose.model('Payment', paymentSchema);

// app.use(bodyParser.json());

// // Route to handle payment data
// app.post('/api/payment', async (req, res) => {
//   try {
//     const paymentData = req.body;
//     const newPayment = new Payment(paymentData);
//     await newPayment.save();
//     res.status(201).send('Payment data saved successfully');
//   } catch (error) {
//     console.error('Error saving payment data:', error);
//     res.status(500).send('Error saving payment data');
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
