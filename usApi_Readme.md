# API ContactsBook

Ресурс призначений для створення власної книги контактів. Реалізована фукція реєстрації з трьома видами підписки користувача("starter", "pro", "business").
Ресурс може створювати, видаляти, змінювати котакти, та реалізована можливість додавання контакту до списку обраних.

## Endpoints user

- POST api/users/singup
  Реєструє користувача на ресурсі ContactsBook. Приймає в тілі запиту email та password.
  Повертає пошту та статус підписки(за замовчування "starter");

- POST api/users/login
  Авторизує користувача. Приймає в тілі запиту email та password.
  Повертає token для аутенфікації каристувача, пошту та статус підписки;

- GET api/users/logout
  Виконує logout за токеном наданим через хедер Autorized;

- GET api/users/current
  Повертає данні(email та subscription) авторизованого коростувача. Приймає Токін через хедер Autorized;

- PATCH api/users/subscription
  Змінює статус підписки коритсувача("starter", "pro", "business"). Приймає в тілі запиту параметр ( subscription: статус підписки). Повертає пошту та оновленний статус підписки користувача;

## Endpoints contacts

- GET api/contacts/
  Повертає повний список контактів авторизованого користувача;

- GET api/contacts/{contactId}
  Повиртає один контакт за вказаним "contactId" авторизованого користувача;

- POST api/contacts/
  Додає контак до списку контактів.
  Приймає body у .json форматі з обов'язковими ключами name та значенням(String), email та значенням(String), phone та значенням(String) та не обов'язковим полем favorite(якщо favorite не указане, автоматично додає зі значенням false);

- DELETE api/contacts/{contactId}
  Видаляе контакт зі списку контактів за вказаним contactId;

- PUT api/contacts/{contactId}
  У вказаного контакта за contactId змінює name, email або phone;
  Приймає body у .json форматі з не обов'язковими ключами name та значенням(String), email та значенням(String), phone та значенням(String);

- PATCH api/contacts/{contactId}/favorite
  Додаэ або видаляэ зы списку обраних вказаний контакт.
  Приймає body у .json форматі з обов'язковим ключем favorite та значенням;
