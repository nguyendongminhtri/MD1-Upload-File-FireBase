class User {
    id;
    name;
    username;
    email;
    password;

    constructor(id, name, username, email, password) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    setId(id){
        this.id = id;
    }
    getId(){
        return this.id;
    }
}
