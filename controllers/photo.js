const storage = new (require("@google-cloud/storage")).Storage();
const photosBucket = storage.bucket("dog-dossier-photos");

function getPhoto(path) {
    const photo = photosBucket.file(path);
    return Promise.all([photo, photo.getMetadata()]);
}

module.exports.getUserProfilePhoto = (UserId) => getPhoto(`user/${UserId}`);

module.exports.setUserProfilePhoto = (UserId, photo) => {
    if (!photo.mimetype.startsWith("image/")) throw new Error("File must have an image mimetype");
    const gcsPhoto = photosBucket.file(`user/${UserId}`);
    return gcsPhoto.save(photo.data, { metadata: { contentType: photo.mimetype } });
};

module.exports.getDogPhoto = (DogId, name) => getPhoto(`dog/${DogId}/${name}`);