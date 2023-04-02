const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    token: {
        type: String,
        default: null,
    },
    avatarURL: {
        type: String,
    },
    // ======= Массив id рецептов, добавленных в Favorites =========
    favorites: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'recipe',   
        }],
    },
    subscribed: {
        type: String,
        default: "",
    },
    shoppingList: {
        type: [{
            // id продукта
            ingredientId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ingredient',   
            },
            // количество 
            quantity: {
                type: Number,
            },
            // единица измерения
            unit: {
                type: String,
            }
        }],
    }
    // ======= Если доделаю верификацию емейла, пригодятся следующие поля =======
    // verify: {
    //     type: Boolean,
    //     default: false,
    // },
    // verificationToken: {
    //     type: String,
    //     required: [true, 'Verify token is required'],
    // },
    // ==========================================================================

})

userSchema.pre('save', async function() {
    if (this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
    }
})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}