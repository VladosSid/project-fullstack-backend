const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

require('dotenv').config();

const { authRouter } = require('./routes/api/auth');
const recipesRouter = require('./routes/api/recipes');
const subscribeRouter = require('./routes/api/subscribe');
const searchRouter = require('./routes/api/search');
const ingredientsRouter = require('./routes/api/ingredients');
const ownRecipesRouter = require('./routes/api/ownRecipes');
const favoriteRouter = require('./routes/api/favorite');
const popularRecipeRouter = require('./routes/api/popular-recipe');
const shoppingListRouter = require('./routes/api/shopping-list');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use('/api/subscribe', subscribeRouter);
app.use('/api/users', authRouter);
app.use('/api/recipes', recipesRouter);

app.use('/api/search', searchRouter);

app.use('/api/ingredients', ingredientsRouter);

app.use('/api/ownRecipes', ownRecipesRouter);

app.use('/api/favorite', favoriteRouter);

app.use('/api/popular-recipe', popularRecipeRouter);

app.use('/api/shopping-list', shoppingListRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
