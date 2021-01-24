import axios from "axios";


// const makeRequest = (path, params) => {
//     axios.get(`https://api.themoviedb.org/3${path}`, {
//         params: {
//             ...params,
//             api_key: "c9349dd29b0c396b729d9fc6016daf67"
//         }
//     })
// }

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: "c9349dd29b0c396b729d9fc6016daf67"
        },
    });

// const getAnything = async (path, params = {}) => {
//     try {
//         const {
//             data: { results },
//             data
//         } = await makeRequest(path, params)
//         return [results || data, null]
//
//
//     } catch (e) {
//         return [null, e]
//     }

const getAnything = async (path, params = {}) => {
    try {
        const {
            data: { results },
            data,
        } = await makeRequest(path, params);
        return [results || data, null];
    } catch (e) {
        console.log(e);
        return [null, e];
    }
};



export const movieAPI = {
    // nowPlaying: () => getAnything('/movie/now_playing'),
    // topRated: () => getAnything('/movie/top_rated'),
    // upComing: () => getAnything('/movie/upcoming')

    nowPlaying: () => getAnything("/movie/now_playing"),
    topRated: () => getAnything("/movie/top_rated"),
    upComing: () => getAnything("/movie/upcoming"),

}


