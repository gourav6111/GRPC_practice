// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// if cd Desktop/GRPC_practice/node_grpc
// protoc -I=. ./protos/news.proto --js_out=import_style=commonjs,binary:./server --grpc_out=./server --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin
//
'use strict';
var grpc = require('grpc');
var protos_news_pb = require('../protos/news_pb.js');

function serialize_news_NewsRequest(arg) {
  if (!(arg instanceof protos_news_pb.NewsRequest)) {
    throw new Error('Expected argument of type news.NewsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_news_NewsRequest(buffer_arg) {
  return protos_news_pb.NewsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_news_NewsResponse(arg) {
  if (!(arg instanceof protos_news_pb.NewsResponse)) {
    throw new Error('Expected argument of type news.NewsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_news_NewsResponse(buffer_arg) {
  return protos_news_pb.NewsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var NewsServiceService = exports.NewsServiceService = {
  // streaming API
news: {
    path: '/news.NewsService/news',
    requestStream: false,
    responseStream: true,
    requestType: protos_news_pb.NewsRequest,
    responseType: protos_news_pb.NewsResponse,
    requestSerialize: serialize_news_NewsRequest,
    requestDeserialize: deserialize_news_NewsRequest,
    responseSerialize: serialize_news_NewsResponse,
    responseDeserialize: deserialize_news_NewsResponse,
  },
};

exports.NewsServiceClient = grpc.makeGenericClientConstructor(NewsServiceService);
