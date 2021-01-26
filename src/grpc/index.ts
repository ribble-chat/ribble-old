import grpc from "@grpc/grpc-js";
import protoloader from "@grpc/proto-loader";

export async function initializeGRPC() {
  const pkgDef = await protoloader.load(`./ribble-grpc/protos/greet.proto`);
  const root = grpc.loadPackageDefinition(pkgDef);
  console.log(root);
  console.log(root);
  console.log(root);
  console.log(root);

  // const credentials = grpc.credentials.createInsecure();
  // const client = new grpc.Client();
  // client.makeUnaryRequest();
}
