import jwt from "jsonwebtoken";

export const authonticateWithToken = (req, res, next) => {
  try {
    req.headers.authorization && req.headers.authorization.startsWith("Bearer");
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(403)
        .json("denied request because you are not authorized");
    }
    jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
      if (!token) {
        return res.status(403).json("you are not authorized");
      }
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(500).json("tu ja re");
  }
};

export const checkUserRole = (role) => {
  return (req, res, next) => {
    const userRole = req.user && req.user.role;
    console.log(req.user)
    if (role.includes(userRole)) {
      next();
    } else {
      res.status(403).json({
        message: "permission denied",
      });
    }
  };
};
