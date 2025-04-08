function errorHandler(err, req, res, next) {
    console.log(err, "<<< errorHandler");
  
    if (err.name === "BadRequest") {
      res.status(400).json({ message: err.message });
    } else if (err.name === "NotFound") {
      res.status(404).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  
  module.exports = errorHandler;