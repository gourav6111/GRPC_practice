var calc = require("../server/protos/calculator_pb");
var calcService = require("../server/protos/calculator_grpc_pb");

// const fs = require("fs");

var grpc = require("grpc");


var server = new grpc.Server();

function calculator(call, callback) {
  console.log("**** recieved at backend ****")
  var calculatorResponse = new calc.CalculatorResponse();

  calculatorResponse.setSum(
    call.request.getNumbers().getFirstNumber() + call.request.getNumbers().getSecondNumber()
  );

  callback(null, calculatorResponse);
}

function main() {
  
    server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
    
    server.addService(calcService.CalculatorServiceService, {
        calculator: calculator,
      });  
    server.start();
    console.log("Server running on port 127.0.0.1:50051");
  }
  
main();


