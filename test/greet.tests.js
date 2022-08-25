describe('Test my greet function' , function(){
    it("it should return 'Hello, Bongane' when called with 'Bongane' " , function(){
        assert.equal("Hello, Bongane", greet("Bongane"), "this should not be true");
    });
    it("it should return 'Hello, Alex' when called with 'Alex' " , function(){
            assert.equal("Hello, Alex", greet("Alex"), "this should not be true");    
    });
});