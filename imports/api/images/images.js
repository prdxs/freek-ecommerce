import { FS } from 'meteor/cfs:standard-packages';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

var createThumb = function(fileObj, readStream, writeStream) {
    gm(readStream, fileObj.name()).resize('256', '256').stream().pipe(writeStream);
};

var createMedium = function(fileObj, readStream, writeStream) {
    gm(readStream, fileObj.name()).resize('800', '800').stream().pipe(writeStream);
};

Images = new FS.Collection("images", {
    stores: [
        new FS.Store.GridFS("thumbs", { transformWrite: createThumb }),
        new FS.Store.GridFS("medium", { transformWrite: createMedium })
    ]
});