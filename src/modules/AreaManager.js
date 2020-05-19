const remoteURL = "http://localhost:5000"

export default {
    getAll() {
        return fetch(`${remoteURL}/areas?_embed=attractions`).then(result => result.json())
    }

}