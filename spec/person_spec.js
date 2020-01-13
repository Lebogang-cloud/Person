let Person = require("../src/person")
let person = new Person('Ryan',30,'male',['being a hardarse', ' agile', ' ssd hard drives']);

describe ('the generic data and functionality of a human', function() {
    it("should contain collection of attributes and functions", function(){
        expect(person.hello()).toEqual('Hello, my name is Ryan and I am 30 years old male. My interests are being a hardarse, agile, ssd hard drives.')
    })
});
    
