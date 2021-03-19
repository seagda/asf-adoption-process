const storage = new (require("@google-cloud/storage")).Storage();
const photosBucket = storage.bucket("dog-dossier-photos");

module.exports.getUserProfilePhoto = (UserId) => {
    const photo = photosBucket.file(`user/${UserId}`);
    return Promise.all([photo, photo.getMetadata()]);
};

module.exports.setUserProfilePhoto = (UserId, photo) => {
    const gcsPhoto = photosBucket.file(`user/${UserId}`);
    return gcsPhoto.save(photo.data, { metadata: { contentType: photo.mimetype } });
};