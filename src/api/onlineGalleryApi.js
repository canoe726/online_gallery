const BASE_URL = 'http://www.online-gallery.co.kr:8081/';
const INFO_URL = 'info';
const HOME_BANNER = 'home/banner';
const HOME_EXHIBITION = 'home/exhibition';
const HOME_ARTIST = 'home/artist';
const EXHIBITION = 'exhibition';
const PICTURE = 'picture';
const ARTIST = 'artist';

let whileFetching = false;
let abortController;

const request = async (url) => {
    try {
        if (whileFetching) {
            abortController.abort();
        }

        abortController = new AbortController();
        whileFetching = true;

        const response = await fetch(url, {
            mode: 'cors',
            signal: abortController.signal
        });
        
        if (response.ok) {
            const result = await response.json();
            whileFetching = false;
            return result;
        } else {
            const err = await response.json();
            throw err;
        }
    } catch (e) {
        if (e.name === 'AbortError') {
            return {
                status: 'FetchAbort'
            };
        } else {
            return {
                message: e.message,
                status: e.status
            };
        }
    }
};

const getResponse = async (url) => {
    try {
        const response = await request(url);
        return {
            isError: false,
            data: response
        };
    } catch (e) {
        return {
            isError: true,
            data: e
        };
    }
};

const api = {
    getInfo: () => getResponse(BASE_URL + INFO_URL),
    getHomeBanner: () => getResponse(BASE_URL + HOME_BANNER),
    getHomeExhibition: () => getResponse(BASE_URL + HOME_EXHIBITION),
    getHomeArtist: () => getResponse(BASE_URL + HOME_ARTIST),
    getExhibition: () => getResponse(BASE_URL + EXHIBITION),
    getExhibitionById: (id) => getResponse(BASE_URL + EXHIBITION + `/${id}`),
    getPicture: () => getResponse(BASE_URL + PICTURE),
    getPictureId: (id) => getResponse(BASE_URL + PICTURE + `/${id}`),
    getArtist: () => getResponse(BASE_URL + ARTIST),
    getArtistById: (id) => getResponse(BASE_URL + ARTIST + `/${id}`),
};

export { api };