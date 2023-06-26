import axios from "~/api/index.js";

async function getServices() {
    await axios.get(
        "/service"
    )
}

export {
    getServices
};