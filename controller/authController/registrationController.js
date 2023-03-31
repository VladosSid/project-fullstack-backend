const { register } = require('../../service/authService');

const registrationController = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        await register(username, email, password);
        res.status(201).json({
            code: 201,
            status: "created",
            user: {
                username,
                email,
            }
        })
    } catch (err) {
        res.status(err.status).json({
            code: err.status,
            status: err.message
        });
    }
}

module.exports = registrationController;