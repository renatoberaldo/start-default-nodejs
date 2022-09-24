function test(req, res, next) {
  res.status(200).json('Test working!');
}

function test2(req, res, next) {
  res.status(200).json('Test 2 working!');
}

module.exports = {
  test,
  test2,
};
