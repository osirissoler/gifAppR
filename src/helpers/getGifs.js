export const getGifs = async (catergories) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(catergories)}&api_key=2RVWnwuZtjHCs97yeqj3WHFJ4ehGc3fn`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs

}