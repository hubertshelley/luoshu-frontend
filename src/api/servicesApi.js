import axios from "~/api/index.js";

export async function getServices() {
    return await axios.get(
        "/service"
    )
}