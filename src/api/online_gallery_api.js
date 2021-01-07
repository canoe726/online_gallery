const BASE_URL = 'https://api.harvardartmuseums.org/exhibition';
const DETAIL_URL = '/4236';
const API_KEY = '?apikey=954c59e1-2588-4641-adbc-9e90a3b6ebb0';

let whileFetching = false;
let abortController;

const request = async url => {
    try {
        if(whileFetching) abortController.abort();

        abortController = new AbortController();
        whileFetching = true;

        const response = await fetch(url, {
            signal: abortController.signal
        });

        if(response.ok) {
            const result = await response.json();
            whileFetching = false;
            return result;
        } else {
            const err = await response.json();
            throw err;
        }
    } catch(e) {
        if(e.name === 'AbortError') {
            return {
                status: 'FetchAbort'
            }
        } else {
            return {
                message: e.message,
                status: e.status
            }
        }
    }
}

const getResponse = async url => {
    try {
        const response = await request(url);
        return {
            isError: false,
            data: response
        }
    } catch(e) {
        return {
            isError: true,
            data: e
        }
    }
}

const api = {
    getDetailArtworks: () => getResponse(BASE_URL + DETAIL_URL + API_KEY),
}

export { api }