class User {
    #data = {};

    constructor(dataContact) {
        if (!dataContact) return;
        if (!dataContact.name || dataContact.name.length === 0) return;
        this.#data = {...this.#data, ...dataContact};
    }

    edit(dataContact) {
        if (!dataContact) return;
        if (dataContact.name !== undefined && dataContact.name.length === 0) return;

        this.#data = {...this.#data, ...dataContact};
    }

    get() {
        return this.#data;
    }
}

class Contacts {

    #lastId = 0;
    #data = [];

    add(dataContact) {
        const contact = new User(dataContact);
        const noteKeys = Object.keys(contact.get());

        if (noteKeys.length === 0) return;

        this.#lastId++;
        contact.id = this.#lastId;

        this.#data.push(contact);
    }

    edit(id, dataContact) {
        if (!id) return;

        const contact = this.#data.find(item => item.id === id);

        if (!contact) return;

        contact.edit(dataContact);
    }

    remove(id) {
        if (!id) return;

        const newData = this.#data.filter(item => item.id !== id);

        this.#data = newData;
    }

    get(id, print = false) {
        if (id > 0) {
            const contact = this.#data.find(item => item.id === id);

            if (contact) {
                return print ? contact.get() : contact;
            }
        }

        return this.#data;
    }
}

class ContactsApp extends Contacts {

    constructor() {
        super();
        this.rootElem = document.querySelector('#root');
        this.contactsElem = document.createElement('div');
        this.contactsElem.classList.add('contacts');
        this.rootElem.append(this.contactsElem);
    }


    //rootElem.


}

let contactsApp = new ContactsApp();

//let user1 = new User({id:1, name:'Ivan'});


let contacts = new Contacts();
contacts.add({name: 'Ivan'})
contacts.add({name: 'Mary'})
console.log(contacts.get(2, true));

contacts.edit(2, {phone: '123456', name: 'Anna'})
console.log(contacts.get(2, true));

contacts.remove(1)
console.log(contacts.get(true));


Object.defineProperty(user, 'info',{
    get:function (){
        return this.name;
    },
    set: function (data){
        this.name = data.name;
    }
})