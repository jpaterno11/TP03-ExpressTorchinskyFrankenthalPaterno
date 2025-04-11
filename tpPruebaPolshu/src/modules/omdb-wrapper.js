import axios from "axios";
const APIKEY = "88c05cde";
const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
    respuesta : false,
    datos : []
    };
        const response = await axios.get(`http://www.omdbapi.com/?s=${searchText}&page=${page}&apikey=${APIKEY}`);
        if (response.data.Response === "True") {
            returnObject.respuesta = true;
            returnObject.datos = response.data;
        }
    return returnObject;
};

const OMDBSearchComplete = async (searchText) => {
    let returnObject = {
    respuesta : false,
    datos : []
    };
    const response = await  OMDBSearchByPage(searchText) 
    if (response.data.Response === "True") {
        returnObject.respuesta = true;
        returnObject.datos = response.data;
    }
    return returnObject;
};

const OMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
    respuesta : false,
    datos : {}
    };
    const response = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=${APIKEY}`);
    if (response.data.Response === "True") {
        returnObject.respuesta = true;
        returnObject.datos = response.data;
    }
    return returnObject;
};
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};