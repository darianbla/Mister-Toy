import { storageService } from "./asyncStorage.service.js"
import { utilService } from "./util-service"
import { httpService } from "./http.service.js"

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
}

console.log('Toy service is up')

const KEY = 'toy_DB'
const BASE_URL = 'toy/'
_createToys()

function query(filterBy) {
    // return storageService.query(KEY, filter)
    // return httpService.get(BASE_URL, filter).then(res => res.data)
    return httpService.get(BASE_URL, filterBy)
}

// function _filterToys(filterby, toys) {
//     if (!filter) return toys

//     // const {name, price, labels } =
// }

function getById(toyId) {
    // return storageService.getById(KEY, toyId)
    // return httpService.get(BASE_URL, toyId).then(res => res.data)
    return httpService.get(BASE_URL + toyId)
}

function save(toyToSave) {
    // if (toyToSave._id) return storageService.put(KEY, toyToSave)
    // else return storageService.post(KEY, toyToSave)
    return toyToSave._id ?
        httpService.put(BASE_URL, toyToSave) :
        httpService.post(BASE_URL, toyToSave)

    // if (toyToSave._id) return httpService.put(BASE_URL, toyToSave).then(res => res.data)
    // else return httpService.post(BASE_URL, toyToSave).then(res => res.data)
}

function remove(toyId) {
    // return storageService.remove(KEY, toyId)
    return httpService.delete(BASE_URL + toyId)
    // return httpService.delete(BASE_URL, toyId).then(res => res.data)
}

function getEmptyToy() {
    return {
        _id: '',
        name: '',
        price: '',
        labels: [],
        createdAt: Date.now(),
        inStock: true,
    }
}

function _filterToys(filterBy, toys) {
    if (!filterBy) return toys
    const { name } = filterBy

    const regex = new RegExp(name, 'i')
    toys = toys.filter(toys => regex.test(toys.name))

    return toys
}

function _createToys() {
    let toys = JSON.parse(localStorage.getItem(KEY))

    if (!toys || !toys.length) {
        toys = [
            _createToy('Lego Car', 100),
            _createToy('Baby Doll', 50),
            _createToy('Cowboy hat', 20),
        ]
        localStorage.setItem(KEY, JSON.stringify(toys))
    }
    return toys
}

function _createToy(name, price) {
    return {
        _id: utilService.makeId(),
        name,
        price,
        labels: [],
        createdAt: Date.now(),
        inStock: true,
    }
}