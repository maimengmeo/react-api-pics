import axios from "axios";

const searchImages = async () => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization:
                "Client-ID KxeHIUP4sfxGhc6j9gEQOygamGhR31UmX_GDdAofSMg",
        },
        params: { query: "car" },
    });

    console.log(response);
    return response;
};

export default searchImages;
