var newsProto = require("../server/protos/news_pb");
var newsService = require("../server/protos/news_grpc_pb");

var grpc = require("grpc");

var server = new grpc.Server();

function news(call, callback) {
  console.log("**** recieved at backend for news ****")
  var channelName = call.request.getNewschannel().getChannelName()
  console.log("news channel recieved at clinet is ", channelName)
  var headline = `From ${channelName} the headlines are bla bla... bla}`
  var advertisement = "Buy 2 get 1 free"

  let count = 0,
    intervalID = setInterval(function() {

      var breaking_news = new newsProto.BreakingNews(headline);
      var NewsResponse = new newsProto.NewsResponse();
      
      NewsResponse.setBreakingnews(breaking_news);
      NewsResponse.setAdvertisement(advertisement)
    //   console.log("new response is ", NewsResponse)
      
      // setup streaming
      call.write(NewsResponse);
      if (++count > 3) {
        clearInterval(intervalID);
        call.end(); // we have sent all messages!
      }
    }, 1000);

}

function main() {
  
    server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());

    server.addService(newsService.NewsServiceService, {
      news: news,
    });  
    
    server.start();
    console.log("Server running on port 127.0.0.1:50051");
  }
  
main();


