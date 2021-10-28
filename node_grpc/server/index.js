var calc = require("../server/protos/calculator_pb");
var calcService = require("../server/protos/calculator_grpc_pb");

var news_proto = require("../server/protos/calculator_pb");
var news_service = require("../server/protos/calculator_grpc_pb");

var grpc = require("grpc");


var server = new grpc.Server();

function calculator(call, callback) {
  console.log("**** recieved at backend for calculator ****")
  var calculatorResponse = new calc.CalculatorResponse();

  calculatorResponse.setSum(
    call.request.getNumbers().getFirstNumber() + call.request.getNumbers().getSecondNumber()
  );

  callback(null, calculatorResponse);
}

function news(call, callback) {
  console.log("**** recieved at backend for news ****")
  var channelName = call.request.getChannel().getChannelName()

  let count = 0,
    intervalID = setInterval(function() {
      var newsResponse = new news_proto.newsResponse();
      newsResponse.setBreakingNews(`Breaking news for ${channelName}`);

      // setup streaming
      call.write(newsResponse);
      if (++count > 9) {
        clearInterval(intervalID);
        call.end(); // we have sent all messages!
      }
    }, 1000);
}

function main() {
  
    server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
    
    server.addService(calcService.CalculatorServiceService, {
        calculator: calculator,
      });  

    server.addService(news_service.NewsServiceService, {
      news: news,
    });  
    server.start();
    console.log("Server running on port 127.0.0.1:50051");
  }
  
main();


