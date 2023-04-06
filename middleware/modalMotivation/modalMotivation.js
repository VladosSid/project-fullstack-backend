const handleRegisterDays = async (user, days = 2) => {
  try {
    const now = new Date();
    const create = new Date();
    const diff = now.getTime() - create.getTime();
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    console.log(diffDays);
    console.log(diffDays % days === 0);
    if (diffDays % days === 0) {
      const count = diffDays / days;
      return `Wow! You have been using the application for ${count} days!`;
    }
  } catch (error) {
    console.log(error);
  }
};

// const message = handleMotivation(user.createAt)
//   ? handleMotivation(user.createAt)
//   : 'Sucscribing succes';

// const message = handleMotivation(user.createAt) ?? 'Sucscribing succes';

module.exports = handleRegisterDays;
