module.exports ={

    add1 (req,res){
        input = parseInt(JSON.stringify(req.body['input']))
        console.log('input = '+ input)
        output = input + 1
        res.send(output.toString())
    },

    function1 (req,res){
        input = parseInt(JSON.stringify(req.body['input']))
        console.log('input = '+ input)
        output = input%2
        res.send(output.toString())
    },

    function2 (req,res){
        input1 = parseInt(JSON.stringify(req.body['input1']))
        input2 = parseInt(JSON.stringify(req.body['input2']))
        console.log('input = '+ input1)
        console.log('input = '+ input2)
        output = (input1*input2) / 2;
        res.send(output.toString())
    }

}