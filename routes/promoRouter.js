const express=require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const promoRouter=express.Router();
promoRouter.use(bodyParser.json());


promoRouter.route('/:promoID')

.get( (req,res,next) => {
    res.end('Will send details of the promotion: ' + req.params.promoID +' to you!');
})

.post( (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promotions/'+ req.params.promoID);
})

.put( (req, res, next) => {
  res.write('Updating the promotion: ' + req.params.promoID + '\n');
  res.end('Will update the promotion: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete( (req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promoID);
});

/////////////for dishes endpoints

promoRouter.route('/')

.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})

.post( (req, res, next) => {
 res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})

.put( (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /promotions');
})
 
.delete( (req, res, next) => {
    res.end('Deleting all promotions');
});

module.exports=promoRouter;
