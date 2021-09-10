const jwt=require('../auth/jwt');
const zadaci=require('../database/tabela-zadaci');

module.exports={

    prikazi: async function (req, res) {
        try{
          const s = await zadaci.select();
          res.status(200).json(s);
        }
        catch(err){
          console.error(err);
          res.status(500).json(err);
        }
    },
    noviZadatak: async function(req,res){

        try{
          req.body.id_korisnika=req.dekriptovan.id_korisnika;
          //console.log(req.dekriptovan.id_korisnika,req.body);
          const r=await zadaci.insert(req.body);
          res.status(200).json(r);
        } catch(err){
          console.error(err);
          res.status(500).json(err);
        }
      }
}