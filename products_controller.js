module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.create_products()
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({erroerMessage: 'Oops! Something went wrong. Our engineers have been informed!'});
            console.log(err)
        });
    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_product()
        .then(product => res.statuse(200).send(product))
        .catch (err => {
            res.status(500).send({erroerMessage: 'Oops! Something went wrong. Our engineers have been informed!'})
            console.log(err)
        });
    },

    getAll: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_product()
        .then(product => res.status(200).send(product))
        .catch(err => {
            res.status(500).send({ errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'})
            console.log(err)
        });
    },
    
    update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.update_product()
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },
    
      delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.delete_product()
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      }
    };