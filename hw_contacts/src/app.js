class Contact {
    data = {};

    constructor(dataContact) {

        if (!dataContact) return;
        if (!dataContact.name || dataContact.name.length === 0) return;

        this.data = {...this.data, ...dataContact};
    }

    edit(dataContact) {
        if (!dataContact) return;
        if (dataContact.name !== undefined && dataContact.name.length === 0) return;

        this.data = {...this.data, ...dataContact};
    }

    get() {
        return this.data;
    }
}

class Contacts {

    #lastId = 0;
    #data = [];

    constructor() {
        // for (let i = 0; i < 5; i++) {
        //     this.add({name: 'A'});
        // }
    }

    add(dataContact) {
        const contact = new Contact(dataContact);
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
        } else if (!id && print) {
            this.#data.forEach(item => console.log(item.get()));
            return;
        }

        return this.#data;
    }

}

class ContactsApp extends Contacts {

    #contactsListElem = null;
    #contactsFormEdit = null;
    #contactsFormInputs = [];
    #currentContactId = null;

    constructor(idElem) {
        super();

        if (this.storage.length > 0) {
            this.storage.forEach(contactInStorage => {
                this.add(contactInStorage.data);
            })

            this.init(idElem);

        } else {
            this.getData().then(data => {
                data.forEach(contactAPI => {
                    this.add(contactAPI);
                })

                this.init(idElem);
            })
        }
    }

    async getData() {
        let data = [];
        let response = await fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'});

        if (response.status === 200 && response.ok) data = await response.json();
        return data;
    }

    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));

        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    set storage(newData) {
        // let date = new Date(Date.now() + 10*24*60*60*1000);
        // date = date.toUTCString();
        // document.cookie ='storageExpiration=10; expires =' + date;

        if (!this.getCookie('storageExpiration')) {
            let maxAgeValue = 10 * 24 * 60 * 60;
            document.cookie = 'storageExpiration=true; max-age =' + maxAgeValue;
        }

        localStorage.setItem('data', JSON.stringify(newData));
    }

    get storage() {
        let savedDataInStorage = [];

        if (!this.getCookie('storageExpiration')) {
            localStorage.clear();
        } else if (localStorage.getItem('data')) savedDataInStorage = JSON.parse(localStorage.getItem('data'));

        return savedDataInStorage;
    }

    update() {
        this.#contactsListElem.innerHTML = '';

        let data = this.get();
        let d = this.get();

        //console.log(d[1])
        //console.log()

        data.forEach((contact, index) => {
            let id = contact.id;

            contact = this.get(id, true);//contact.get();

            if (!contact.name) return;

            const contactElem = document.createElement('li');
            contactElem.classList.add('contact');
            this.#contactsListElem.append(contactElem);

            const contactNumELem = document.createElement('span');
            contactNumELem.classList.add('contact__num');
            contactNumELem.innerHTML = `${index + 1}`;

            const contactDataELem = document.createElement('div');
            contactDataELem.classList.add('contact__data');
            contactElem.append(contactNumELem, contactDataELem);

            const contactDataName = document.createElement('span');
            contactDataName.innerHTML = `${contact.name}`;
            contactDataELem.append(contactDataName);

            if (contact.phone && contact.phone.length > 0) {
                const contactDataPhone = document.createElement('span');
                contactDataPhone.classList.add('contact__phone');
                contactDataPhone.innerHTML = `${contact.phone}`;
                contactDataELem.append(contactDataPhone);
            }

            const contactRemoveBtn = document.createElement('button');
            contactRemoveBtn.classList.add('contacts__btn_close');
            contactRemoveBtn.innerHTML = '+';
            contactElem.append(contactRemoveBtn);

            contactElem.addEventListener('click', (event) => {
                this.onEdit(event, id);
            })

            contactRemoveBtn.addEventListener('click', (event) => {
                this.onRemove(event, id);
            })

        })

        this.storage = data;
    }

    onRemove(event, id) {
        this.remove(id);
        this.update();
        event.stopImmediatePropagation();
    }

    onAdd(event) {
        this.#contactsFormEdit.classList.add('show')
        this.#currentContactId = null;
    }

    onCloseEditForm() {
        this.#contactsFormEdit.classList.remove('show')

        this.#contactsFormInputs.forEach(inputElem => {
            inputElem.value = '';
        })

        this.#currentContactId = null;
    }

    onSaveContactData() {
        if (this.#currentContactId) {
            const newDataContact = {};

            this.#contactsFormInputs.forEach(inputElem => {
                if(inputElem.value && inputElem.value.length > 0) newDataContact[inputElem.name] = inputElem.value;
                inputElem.value = '';
            })

            this.edit(this.#currentContactId, newDataContact);

        } else {
            this.#contactsFormInputs.forEach(inputElem => {
                this.add({[inputElem.name]: inputElem.value});

                inputElem.value = '';
            })
        }

        this.update();
        this.#contactsFormEdit.classList.remove('show');

        this.#currentContactId = null;
    }

    onEdit(event, id) {
        this.#contactsFormEdit.classList.add('show');
        this.#currentContactId = id;

        const contact = this.get(id);
        const dataContact = contact.get()

        this.#contactsFormInputs.forEach(inputElem => {
            if(dataContact[inputElem.name]) inputElem.value = dataContact[inputElem.name];
        })
    }

    init(idElem) {
        const rootElem = document.querySelector('#' + idElem);

        if (!rootElem) return;

        const contactsElem = rootElem.querySelector('.contacts');
        this.#contactsListElem = rootElem.querySelector('.contacts__list');

        if (!contactsElem || !this.#contactsListElem) return;

        const contactsHeader = document.createElement('div');
        contactsHeader.classList.add('header');
        this.#contactsListElem.before(contactsHeader);

        const contactsTitle = document.createElement('h1')
        contactsTitle.innerHTML = 'Contacts';
        contactsHeader.append(contactsTitle);

        const contactsAddBtn = document.createElement('button');
        contactsAddBtn.classList.add('add_btn');
        contactsAddBtn.innerHTML = 'Add';
        contactsHeader.append(contactsAddBtn);

        //form
        this.#contactsFormEdit = document.createElement('div');
        this.#contactsFormEdit.classList.add('contacts__form_edit');
        contactsElem.append(this.#contactsFormEdit);

        const formEditCloseBtn = document.createElement('button');
        formEditCloseBtn.classList.add('contacts__btn_close');
        formEditCloseBtn.innerHTML = '+';
        this.#contactsFormEdit.append(formEditCloseBtn);

        //name, email, address, phone.
        //name input
        const formEditName = document.createElement('input');
        formEditName.classList.add('form_edit_input');
        formEditName.type = 'text';
        formEditName.name = 'name';
        formEditName.placeholder = 'name';
        this.#contactsFormInputs.push(formEditName);

        const formEditEmail = document.createElement('input');
        formEditEmail.classList.add('form_edit_input');
        formEditEmail.type = 'email';
        formEditEmail.name = 'email';
        formEditEmail.placeholder = 'email';
        this.#contactsFormInputs.push(formEditEmail);

        const formEditPhone = document.createElement('input');
        formEditPhone.classList.add('form_edit_input');
        formEditPhone.type = 'tel';
        formEditPhone.name = 'phone';
        formEditPhone.placeholder = 'phone';
        this.#contactsFormInputs.push(formEditPhone);

        this.#contactsFormEdit.append(formEditName, formEditPhone, formEditEmail);

        const formEditSaveBtn = document.createElement('button');
        formEditSaveBtn.classList.add('form_edit_btn_save');
        formEditSaveBtn.innerHTML = 'save';
        this.#contactsFormEdit.append(formEditSaveBtn);

        contactsAddBtn.addEventListener('click', (event) => {
            this.onAdd(event);
        })

        formEditCloseBtn.addEventListener('click', () => {
            this.onCloseEditForm();
        })

        formEditSaveBtn.addEventListener('click', () => {
            this.onSaveContactData();
        })

        this.update();
    }
}

new ContactsApp('root');