module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();
  
  // search by limit
  router.get("/limit/:limitcount", tutorials.findAllLimit);

  // search by MW
  router.get("/search/:MW1/:MW2/:HBA1/:HBA2", tutorials.findAllColumns);

  router.get('/download', function(req, res){
    const file = './download/new.json';
    res.download(file); 
  });

  // // Create a new Tutorial
  // router.post("/", tutorials.create);

  // // Retrieve all Tutorials
  // router.get("/", tutorials.findAll);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  app.use('/api/tutorials', router);
};
