
export const getGifs = async(category) => {
        
    const API_KEY = "se04DYJeIyiVxGfKZN5Ge5EsVQ5Jazcf";
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${ API_KEY }&q=${ category }&limit=10`;

    const response = await fetch(URL);
    const { data } = await response.json();
    // console.log(data)

    const gifs = data.map( img => ({
        id:img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
};

