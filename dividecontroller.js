const divide = async(req, res) => {
  //console.log(req.body);
  const schema = Joi.object({
    num1:Joi.number().integer().min(1).max(10000).required(),
    num2:Joi.number().integer().min(1).max(10000).required()
  });
  const check = schema.validate(req.body);
  
  if(check.error){
    res.status(400).send(check.error.message);
    return;
  }
  
  let n1= req.body.num1;
  let n2= req.body.num2;
  let result = n1/n2;
  res.json(`${result}`)    
};

module.exports= divide;