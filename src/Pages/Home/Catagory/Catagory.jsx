import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";


const Catagory = () => {
    const {id}=useParams()
    const categoryNews=useLoaderData()
    return (
        <div>
         {id&&<h2 >this is category News:{categoryNews.length}</h2>}
            {
                categoryNews.map(news=><NewsCard
                key={news._id}
                news={news}
                
                ></NewsCard>)
            }
        </div>
    );
};

export default Catagory;