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

Mymodel.getAllColumns = (MW1, MW2, HBA11,HBA12, HBA21,HBA22,SlogP1,SlogP2,TPSA1,TPSA2,RotB1,RotB2,
   result) => {
  let query = `SELECT id, smiles FROM pdbqtData where id != 1 `;

  if (MW1 != 1000 || MW2 != 1000) {
    query += ` AND MW BETWEEN ${MW1} AND ${MW2}`;
  }
  if (HBA11 != 1000 || HBA12 != 1000) {
    query += ` AND HBA1 BETWEEN ${HBA11} AND ${HBA12}`;
  }
  if (HBA21 != 1000 || HBA22 != 1000) {
    query += ` AND HBA2 BETWEEN ${HBA21} AND ${HBA22}`;
  }
  if (SlogP1 != 1000 || SlogP2 != 1000) {
    query += ` AND SlogP BETWEEN ${SlogP1} AND ${SlogP2}`;
  }
  if (TPSA1 != 1000 || TPSA2 != 1000) {
    query += ` AND TPSA BETWEEN ${TPSA1} AND ${TPSA2}`;
  }
  if (RotB1 != 1000 || RotB2 != 1000) {
    query += ` AND RotB BETWEEN ${RotB1} AND ${RotB2}`;
  }
  

  query+=` limit 5`;


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
