import {NativeModules} from 'react-native';
import type {ReactNativeBlobUtilNative, filedescriptor} from "types";

const ReactNativeBlobUtil: ReactNativeBlobUtilNative = NativeModules.ReactNativeBlobUtil;

function createMediafile(fd: filedescriptor, mediatype: string): Promise {
    if ((!'parentFolder' in fd)) fd['parentFolder'] = '';
    return ReactNativeBlobUtil.createMediaFile(fd, mediatype);
}

function writeToMediafile(uri: string, path: string) {
    return ReactNativeBlobUtil.writeToMediaFile(uri, path);
}

function copyToInternal(contenturi: string, destpath: string) {
    return ReactNativeBlobUtil.copyToInternal(contenturi, destpath);
}

function getBlob(contenturi: string, encoding: string) {
    return ReactNativeBlobUtil.getBlob(contenturi, encoding);
}

function copyToMediaStore(fd: filedescriptor, mediatype: string, path: string) {
    return ReactNativeBlobUtil.copyToMediaStore(fd, mediatype, path);
}

export default {
    createMediafile,
    writeToMediafile,
    copyToInternal,
    getBlob,
    copyToMediaStore
};