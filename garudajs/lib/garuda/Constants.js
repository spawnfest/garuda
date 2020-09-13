"use strict";
/*
  Contains all the constants used in the project
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.gzp_decode = exports.gzp_encode = exports.SERVER_EVENT = void 0;
// import {encode, decode} from "@msgpack/msgpack"
exports.SERVER_EVENT = "0";
exports.gzp_encode = (msg, callback) => {
    // console.log("TCL: gzp_encode -> msg", msg)
    let payload = [
        msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload
    ];
    // return callback(encode(payload));
};
exports.gzp_decode = (rawPayload, callback) => {
    // @ts-ignore
    const responseObj = decode(rawPayload);
    // return callback(responseObj)
};
//# sourceMappingURL=Constants.js.map