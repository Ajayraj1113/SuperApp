import axios from "axios";

export const getNewsDetails = async () => {
    try {
        const getUrl = `https://newsapi.org/v2/everything?q=Apple&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
        const response = await axios.get(getUrl);
        // console.log(response)

        // return response.data.articles[0];
        return response.data;
    } catch (error) {
        console.log(error);
        // toast message error
        // alert("Something went wrong!, Try after sometime....")
    }
};