const pool = require('./connection');
const tabela='zadaci';

const zadaci={
  select: async function() {
    let conn;
    try {
      conn = await pool.getConnection();
      const res = await conn.query("SELECT * from "+tabela);
      //console.log(res); 
      conn.end();
      return res;
    } catch (err) {
      throw err;
    }
  },

  insert: async function(z){
    let conn;
    try {
      conn = await pool.getConnection();
      const res = await conn.query("INSERT INTO "+tabela+" (naziv_zadatka,tekst,izvor,link,datum_dodavanja,id_korisnika,komentar,resenje) VALUES (?,?,?,?,?,?,?,?)", 
      [z.naziv_zadatka,z.tekst,z.izvor,z.link,new Date(),z.id_korisnika,z.komentar,z.resenje]);
      console.log(res); 
      if(res.affectedRows==0)
        throw new Error('Nije uspelo upisivanje u bazu');
      conn.end();
      return res;
    } catch (err) {
      throw err;
    }
  },

}

module.exports=zadaci;