
protoc -I=$PWD/backend/src/main/proto helloworld.proto \
 --js_out=import_style=commonjs,binary:$PWD/frontend/src/api/grpc \
 --grpc-web_out=import_style=typescript,mode=grpcwebtext:$PWD/frontend/src/api/grpc