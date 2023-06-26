import axios from "~/api/index.js";

export async function getConfigurations() {
    return await axios.get(
        "/configuration"
    )
}