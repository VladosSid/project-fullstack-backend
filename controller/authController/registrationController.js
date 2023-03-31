const { register } = require('../../service/authService');

const registrationController = async (req, res) => {
    const { login, email, password } = req.body;
    try {
        await register(login, email, password);
        res.status(201).json({
            code: 201,
            status: "created",
            user: {
                login,
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