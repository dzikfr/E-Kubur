const verifyAdmin = (req, res, next) => {
    try {
      const userRole = req.user?.role;
  
      if (userRole !== 'admin') {
        return res.status(403).json({ error: 'Access denied. Admins only.' });
      }
  
      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports = verifyAdmin;