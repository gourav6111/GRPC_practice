var calculator = require("../server/protos/calculator_pb");
var service = require("../server/protos/calculator_grpc_pb");

var grpc = require("grpc");

// let fs = require("fs");

function callCalculator() {
    console.log("Hello From Client");
  
    // Created our server client
    var client = new service.CalculatorServiceClient(
        "localhost:50051",
        grpc.credentials.createInsecure()
      );
      
    // created a protocol buffer greeting message
    var numbers = new calculator.Numbers();

    numbers.setFirstNumber(2);
    numbers.setSecondNumber(3);
    
    // create our request
    var request = new calculator.CalculatorRequest();
    request.setNumbers(numbers);
  
    client.calculator(request, (error, response) => {
        if (!error) {
          console.log(
            request.getNumbers().getFirstNumber() +
              " + " +
              request.getNumbers().getSecondNumber() +
              " = " +
              response.getSum()
          );
        } else {
          console.error(error);
        }
    });
  }

  callCalculator()