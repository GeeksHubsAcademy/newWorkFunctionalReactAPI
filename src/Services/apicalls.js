
import axios from 'axios';


export const bringCharacters = () => {
    
    try {

        return axios.get("https://rickandmortyapi.com/api/character");

    } catch (error) {
        console.log(error);
    }
};