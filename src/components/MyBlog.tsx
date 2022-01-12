import { useEffect } from "react";
import RecommendBlog from "../common-components/RecommendBlog";
import { BlogProps } from "../Model/Blogs";

let dataJson = require('../json/ListMyBlog.json');

function MyBlog() {
  useEffect(() => {
    console.log(dataJson)
  }, [])

  return (
    <div>
      <div className="background-blog relative">
        <div className="absolute top-1/2 left-1/2 transform-translate-50 text-2xl md:text-6xl font-serif">
          <em>Vũ Cát's Blog</em>
        </div>
      </div>
      <div>
        <h1 className="p-4 text-3xl font-bold underline text-center">
          Blogs
        </h1>
        <div>
          { dataJson.map((el: BlogProps) => <RecommendBlog {...el}/>)}
        </div>
      </div>
      
    </div>
  );
}

export default MyBlog;
