module.exports = (req, res, next) => {

  const { username ,password } = req.body;

  if (req.path === '/registration') {
    if (![username, password].every(Boolean)) {
      return res.status(401).json('Введены некорректные данные');
    }   
    else if (req.path === '/login') {
      if (![username, password].every(Boolean)) {
        return res.status(401).json('Введены некорректные данные');
      }
    }
  }
  next();
};