const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Joi = require("@hapi/joi");

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json());

function validateinput(num1, num2){
  const schema=Joi.object({
    num1:Joi.number().integer().min(1).max(10000).required(),
    num2:Joi.number().integer().min(1).max(10000).required()
  });
  const result= schema.validate(num1, num2);
  return result;
}

app.post('/div', async (req, res) => {
    //console.log(req.body);
    const check = validateinput(req.body);
    
    if(check.error){
      res.status(400).send(check.error.message);
      return;
    }

    let n1= req.body.num1;
    let n2= req.body.num2;
    let result = n1/n2;
    res.json(`${result}`)
  }
);

app.listen(3000, 
  () => console.log('Server listening on port 3000.'));