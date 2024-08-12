const Form = require('../models/Form');

exports.submitForm = async (req, res) => {
  try {
    const { name, contact, email, concern } = req.body;
    const formData = new Form({ name, contact, email, concern });

    await formData.save();
    res.status(201).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save form data', error });
  }
};
