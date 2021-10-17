// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// if cd Desktop/GRPC_practice
// protoc -I=node_grpc/protos --python_out=node_grpc/server/protos node_grpc/protos/calculator.proto
//
// if cd Desktop/GRPC_practice/node_grpc
// protoc -I=protos --python_out=server/protos protos/calculator.proto
//
'use strict';
var grpc = require('grpc');
var protos_calculator_pb = require('../protos/calculator_pb.js');

function serialize_calculator_CalculatorRequest(arg) {
  if (!(arg instanceof protos_calculator_pb.CalculatorRequest)) {
    throw new Error('Expected argument of type calculator.CalculatorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_CalculatorRequest(buffer_arg) {
  return protos_calculator_pb.CalculatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_CalculatorResponse(arg) {
  if (!(arg instanceof protos_calculator_pb.CalculatorResponse)) {
    throw new Error('Expected argument of type calculator.CalculatorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_CalculatorResponse(buffer_arg) {
  return protos_calculator_pb.CalculatorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorServiceService = exports.CalculatorServiceService = {
  // unary API
calculator: {
    path: '/calculator.CalculatorService/Calculator',
    requestStream: false,
    responseStream: false,
    requestType: protos_calculator_pb.CalculatorRequest,
    responseType: protos_calculator_pb.CalculatorResponse,
    requestSerialize: serialize_calculator_CalculatorRequest,
    requestDeserialize: deserialize_calculator_CalculatorRequest,
    responseSerialize: serialize_calculator_CalculatorResponse,
    responseDeserialize: deserialize_calculator_CalculatorResponse,
  },
};

exports.CalculatorServiceClient = grpc.makeGenericClientConstructor(CalculatorServiceService);
