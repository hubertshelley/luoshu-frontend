import axios from "~/api/index.js";

async function getServices() {
    return await axios.get(
        "/service"
    )
}

export {
    getServices
};