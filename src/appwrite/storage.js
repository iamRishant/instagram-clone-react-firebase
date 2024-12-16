import { Client, ID, Storage } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6758a06d00047e9d0998');

const storage = new Storage(client);

const promise = storage.createFile(
    '6758a08500046624e47f',
    ID.unique(),
    document.getElementById('uploader').files[0]
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
