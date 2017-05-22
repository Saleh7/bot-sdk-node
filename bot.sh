#!/bin/bash
CERTS_DIR="$(pwd)/wireBot"
CSR_COUNTRY="DE"
CSR_STATE="Berlin"
CSR_LOCALITY="Berlin"
CSR_ORGANISATION="My Company GmbH"
CSR_COMMON="igeek.io"

git clone https://github.com/Saleh7/hackerNewsBot.git $CERTS_DIR
cd $CERTS_DIR && npm install

openssl genrsa -out $CERTS_DIR/server.key 4096
openssl req -new -subj "/C=$CSR_COUNTRY/ST=$CSR_STATE/L=$CSR_LOCALITY/O=$CSR_ORGANISATION/CN=$CSR_COMMON" -key $CERTS_DIR/server.key -out $CERTS_DIR/csr.pem
openssl x509 -req -days 7300 -in $CERTS_DIR/csr.pem -signkey $CERTS_DIR/server.key -out $CERTS_DIR/server.crt
openssl rsa -in $CERTS_DIR/server.key -pubout -out $CERTS_DIR/pubkey.pem
