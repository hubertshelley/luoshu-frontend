import axios from "~/api/index.js";

async function getConfigurations() {
    await axios.get(
        "/configuration"
    )
}