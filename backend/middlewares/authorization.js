const authorizeUser = (req, res, next) => {
    const { id } = req.params;
    const { role, id: userId } = req.user;
  
    if (role === 'admin' || parseInt(id, 10) === userId) {
      return next();
    }
  
    return res.status(403).json({ error: 'Access denied' });
  };
  
  module.exports = { authorizeUser };  