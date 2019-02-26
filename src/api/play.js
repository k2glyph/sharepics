import axios from "axios";
import Configuration from "../constants/configuration";

export default axios.create({
    baseURL: Configuration.playHost,
    headers: {
        Accept: '*'
    }
});
