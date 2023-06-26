import axios from "~/api/index.js";

async function getConfigurations() {
    return await axios.get(
        "/configuration"
    )
}