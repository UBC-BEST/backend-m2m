/**
 * Data representation of Response to Auth POST Requests.
 * @param response Response to send back to user, in  form of map.
 */
export class Response {
    constructor(response) {
        this.response = response; 
    }
}

/**
 * Data representation of Request for SignIn  
 */
export class SignIn {
    constructor(email, password) {
        this.email = email; 
        this.password = password; 
    }
}

 /**
 * Data representation of Request for Signout  
 */
export class Signout {
    constructor(email, password) {
        this.email = email; 
        this.password = password; 
    }
}

 /**
 * Data representation of Request for SignUp 
 */
export class SignUp {
    constructor(email, password) {
        this.email = email; 
        this.password = password; 
    }
}