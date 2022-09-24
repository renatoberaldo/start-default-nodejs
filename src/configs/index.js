require('dotenv').config();

// Do some configurations file
const client = () => {
  console.log(
    'Host: ' +
      process.env.DB_USER +
      ' | User: ' +
      process.env.DB_HOST +
      ' | Admin: ' +
      process.env.DB_ADMiN
  );
};

module.exports = client;
