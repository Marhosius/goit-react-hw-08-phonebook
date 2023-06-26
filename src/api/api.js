import Notiflix from 'notiflix';

export const fetchContacts = () =>
    fetch('https://648e1cf42de8d0ea11e8916e.mockapi.io/phonebook/contacts', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(tasks => {
        return tasks
    }).catch(error => {
        Notiflix.Notify.failure(`${error.message}`)
    })

export const addContact = (data) =>
    fetch('https://648e1cf42de8d0ea11e8916e.mockapi.io/phonebook/contacts', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(tasks => {
        return tasks
    }).catch(error => {
        Notiflix.Notify.failure(`${error.message}`)
    })

export const deleteContact = (id) =>
    fetch(`https://648e1cf42de8d0ea11e8916e.mockapi.io/phonebook/contacts/${id}`, {
        method: 'DELETE'
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(tasks => {
        return tasks.id
    }).catch(error => {
        Notiflix.Notify.failure(`${error.message}`)
    })