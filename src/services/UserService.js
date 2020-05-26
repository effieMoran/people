

export default class UserService {

    static getUsersData() {
        return fetch('https://randomuser.me/api/?results=5')
            .then(response => response.json());
    }
}
