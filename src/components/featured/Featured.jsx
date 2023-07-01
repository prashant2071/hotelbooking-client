import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const {data,loading,error} = useFetch("http://localhost:8081/api/hotel/countByCity?city=madrid,berlin,london");
  console.log("the data is",data)
  return (
    <div className="featured">
      <div className="featuredItems">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/664657.jpg?k=c1d999b8766abab322730158d960eec68af7910fec9ff61b5339636fd74dfb0e&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>pokhara</h1>
          <h2> lakeside area</h2>
        </div>
      </div>
      <div className="featuredItems">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/664666.jpg?k=e7f2be1324d4595363ec6d46d988eb21cee118a5530ce0a19a18cf85c4473d2e&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>kathmandu</h1>
          <h2>bauddha area</h2>
        </div>
      </div>
      <div className="featuredItems">
        <img
          src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5e14c78b97c440419b36f9d4_Hotel%20Himalayan%20Villa%2C%20Nagarkot.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>nagarkot</h1>
          <h2>1221 property</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
