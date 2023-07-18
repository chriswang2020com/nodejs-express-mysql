const sql = require("./db.js");

// constructor
const Mymodel = function(mymodel) {
  this.smiles = myserver.smiles;
  this.MW = myserver.MW;
  this.HBA1 = myserver.HBA1;
  this.HBA2 = myserver.HBA2;
  this.HBD = myserver.HBD;
  this.SlogP = myserver.SlogP;
  this.TPSA = myserver.TPSA;
  this.RotB = myserver.RotB;
  this.pdbqtText = myserver.pdbqtText;
};

Mymodel.getAllColumns = (MW1, MW2, HBA11, result) => {
  let query = `SELECT id, smiles FROM pdbqtData where MW between ${MW1} and ${MW2} limit 2`;

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(res);
    result(null,res);
  });
};

Mymodel.getAllLimit = (limitcount, result) => {
  let query = `SELECT id, smiles FROM pdbqtData limit ${limitcount}`;

  if (limitcount <= 0) {
    result(null, "limitcount must be greater than 0");
  };

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(res);
    result(null,res);
  });
};

Mymodel.getAll = (title, result) => {
  let query = "SELECT id, smiles FROM pdbqtData limit 10";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

  
    result(null, res);
  });
};


module.exports = Mymodel;
