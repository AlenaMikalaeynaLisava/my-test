import axios from 'axios'
import {requestAPI} from '../Constants/Constants'

export const ApiData = async ()=>{
    try {
        const {data} = await axios.get(requestAPI);
        return data;
    } catch(error){
        return null;
    }
};