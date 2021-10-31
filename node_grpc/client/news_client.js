var news_proto = require("../server/protos/news_pb");
var service = require("../server/protos/news_grpc_pb");

var grpc = require("grpc");

function callnews() {
    console.log("Hello From Client");
  
    // Created our server client
    var client = new service.NewsServiceClient(
        "localhost:50051",
        grpc.credentials.createInsecure()
      );
      
    // created a protocol buffer greeting message
    var newsChannel = new news_proto.NewsChannel();

    newsChannel.setChannelName("Mmmmm Media House");
    
    // create our request
    var request = new news_proto.NewsRequest();
    request.setNewschannel(newsChannel);
  
    var call = client.news(request, () => {});

    call.on("data", response => {
      console.log("Headline is -> ", response.getBreakingnews().getHeadline());
      console.log("Advertisement is -> ", response.getAdvertisement());
    });
  
    call.on("status", status => {
      console.log(status.details);
    });
  
    call.on("error", error => {
      console.error(error.details);
    });
  
    call.on("end", () => {
      console.log("Streaming Ended!");
    });
  }

  callnews()