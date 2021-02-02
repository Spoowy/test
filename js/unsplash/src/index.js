// ES Modules syntax
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  applicationId: "3b4db9396a858661305038b1d9d14a9fc7cecd2be22179e6c8bf777822e9744c",
  secret: "a4995e9488c929305dddebcaa4632b6af4f10e66fc8f5f18631c911a2ea28b29"
});

// init
var unsplash_page = 1;
var unsplash_per_page = 30;
var unsplash_query = "";
var unsplash_pickertype = "image";

// Loads photos on page one
window.searchPhotos = function searchPhotos(query) {
    unsplash_page = 1;
    unsplash_query = query;
    return loadPhotos();
}

/**
 * Reset the photo browser to the default view (page one of popular photos)
 */
window.loadDefaultPhotos = function loadDefaultPhotos() {
    unsplash_page = 1;
    unsplash_query = "";
    $("#unsplashPhotoBin").html("");
    return loadPhotos();
}

// Load more photos
window.loadMorePhotos = function loadMorePhotos() {
    unsplash_page++;
    return loadPhotos();
}

// Load photos
window.loadPhotos = function loadPhotos() {
    return unsplash.search.photos(unsplash_query, unsplash_page, unsplash_per_page)
      .then(toJson)
      .then(json => {
          console.log(json);
          return json;
        // unsplash.photos.downloadPhoto(json["results"][0]);
      });
}

window.downloadPhoto = function downloadPhoto(photo) {
    return unsplash.photos.getPhoto(photo)
      .then(toJson)
      .then(json => {
        unsplash.photos.downloadPhoto(json);
        return json;
      });
}
