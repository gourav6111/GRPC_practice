var news_proto = require("../server/protos/news_pb");
var service = require("../server/protos/news_grpc_pb");

var grpc = require("grpc");

// let fs = require("fs");

function callnews() {
    console.log("Hello From Client");
  
    // Created our server client
    var client = new service.NewsServiceClient(
        "localhost:50051",
        grpc.credentials.createInsecure()
      );
      
    // created a protocol buffer greeting message
    var newsChannel = new news_proto.NewsChannel();

    newsChannel.setChannelName("My channelllll");
    
    // create our request
    var request = new news_proto.NewsRequest();
    request.setNewschannel(newsChannel);
  
    client.news(request, (error, response) => {
        console.log("calling")
        if (!error) {
          console.log("Response is -> ", response.getBreakingNews());
        } else {
          console.error(error);
        }
    });
  }

  callnews()