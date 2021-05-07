export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validateUserName = (userName) => {
    const re = /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/;
    return re.test(String(userName).toLowerCase());
}

export const validatePassword = (password) => {
    const re = /^[A-Za-z\d]{6,}$/;
    return re.test(String(password));
}
