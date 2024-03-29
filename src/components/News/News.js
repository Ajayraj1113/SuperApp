
import { useEffect, useState } from "react";
import { getNewsDetails } from "../../apis/news"

const News = () => {
    const [news, setNews] = useState([]);

    const fetchNews = () => {
        const result = getNewsDetails();
        // console.log(result)

        result
            .then((res) => setNews(res?.articles[1]))

        // setNews(result);
    }

    useEffect(() => {
        fetchNews();
    }, [])


  return (
    <div
        style={{
            height: "90vh",
            width: "30vw",
            position: "relative",
            borderRadius: "12px",
            // padding: "6px",
        }}
    >
        <img
            src={news?.urlToImage}
            style={{ height: "60vh", borderRadius: "12px", width: "30vw" }}
            alt="News cover"
        />
        <div
            style={{
                height: "26vh",
                borderRadius: "12px",
                width: "30vw",
                background: "white",
                fontSize: "1.5rem",
                padding: "6px",
            }}
        >
            {news?.description}
        </div>
        <div
            style={{
                position: "absolute",
                width: "30vw",
                height: "29vh",
                background: "rgba(0, 0, 0, 0.74)",
                top: "31vh",
                padding: "24px",
                boxSizing: "border-box",
                overflow: "hidden",
            }}
        >
            <p
                style={{
                    color: "white",
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                }}
            >
                {news?.title}
            </p>
        </div>
    </div>
  );
};

export default News;
