import { Link, useLocation } from "react-router-dom";
import "./singeList.css";
import { Publish } from "@material-ui/icons";

export default function SingleList() {
    const location = useLocation();
    const list = location.list;


  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <span className="productName">{list.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{list._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre:</span>
                      <span className="productInfoValue">{list.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">year:</span>
                      <span className="productInfoValue">{list.year}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">type:</span>
                      <span className="productInfoValue">{list.type}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Movie Title</label>
                  <input type="text" placeholder={list.title} />
                  <label>Genre</label>
                  <input type="text" placeholder={list.genre} />
                  <label>Year</label>
                  <input type="text" placeholder={list.year} />
                  <label>Type</label>
                  <input type="text" placeholder={list.type} />
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
              </div>
                  <button className="productButton">Update</button>
          </form>
      </div>
    </div>
  );
}
