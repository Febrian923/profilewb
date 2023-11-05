const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

const bucketName = 'nama-bucket-anda';
const fileName = 'nama-file-foto-profil.jpg';

const file = storage.bucket(bucketName).file(fileName);
const url = `https://storage.googleapis.com/${bucketName}/${fileName}`;

// Kemudian Anda dapat menggunakan URL ini untuk menampilkan gambar di situs web Anda.
