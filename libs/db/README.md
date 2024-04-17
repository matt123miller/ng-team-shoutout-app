# db

This library was generated with [Nx](https://nx.dev).

## Goals

- [ ] Host a mongo inside docker
- [ ] Use certificates with that mongo somehow
- [ ] Create simple tables and data
- [ ] Connect to this DB from the backend

## Using TLS with the mongo shell

generate key files

`openssl req -newkey rsa:4096 -x509 -sha512 -days 365 -nodes -out certificate.pem -keyout privatekey.pem`

View the certificate in a human readable fashion

`openssl x509 -noout -in certificate.pem -text`

Extract the public key from a certificate

`openssl x509 -noout -in certificate.pem -text`

Remember that from now on, to connect to your MongoDB server using the mongo client, you will need to specify some additional flags:

`mongo --ssl --sslCAFile /etc/ssl/ca.pem --sslPEMKeyFile /etc/ssl/client.pem --host host.example.com`

    --ssl enables TLS channel encryption.
    --sslPEMKeyFile is the path to the client certificate — which needs to be signed by the server certificate.
    --sslCAFile is the path to the root certificate of the Certification Authority (CA) that signed the server certificate. From MongoDB 3.2.6, this parameter is optional, and if not specified, the client will check the certificate against the system CA store.
    --host (optional) verifies that the hostname of the server matches the one in the certificate it presents.
