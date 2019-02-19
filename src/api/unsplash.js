import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID 7eea1e144ed9124e8caf7727cc03282cbb442e5ee52d126174aec3d2348409c6"
    }
});
