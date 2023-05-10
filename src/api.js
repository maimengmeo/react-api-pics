import axios from "axios";

const serachImages = async () => {
    const response = await axios.get("https://api.unplash.com/search/photos", {
        headers: {
            Authorization:
                "Client-ID KxeHIUP4sfxGhc6j9gEQOygamGhR31UmX_GDdAofSMg",
        },
        params: { query: "car" },
    });

    return response;
};

export default serachImages;
