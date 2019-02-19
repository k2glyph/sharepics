import {SIGN_IN, SIGN_OUT} from "./types";

export const signIn = (userId, email, name, pictureUrl) => {
    return {
        type: SIGN_IN,
        payload: {
            userId: userId,
            userEmail: email,
            userName: name,
            userPictureUrl: pictureUrl || null
        },
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};
