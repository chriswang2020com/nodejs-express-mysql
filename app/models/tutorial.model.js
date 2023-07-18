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

Mymodel.getAllColumns = (MW1, MW2, HBA1,HBA2, result) => {
  let query = `SELECT id, smiles FROM pdbqtData where`;

  if (MW1 != 1000 || MW2 != 1000) {
    query += ` MW BETWEEN ${MW1} AND ${MW2}`;
  }
  if (HBA1 != 1000 || HBA2 != 1000) {
    query += ` HBA BETWEEN ${HBA1} AND ${HBA2}`;
  }
  query+=` limit 10`;


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
