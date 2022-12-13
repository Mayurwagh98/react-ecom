import React, { useState } from "react";
// import { products } from "./ToppicksData";
import axios from "axios";
import { useEffect } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import { Roller } from "./Loaders/Roller";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ReactPaginate from "react-paginate";

let Product_paginate = () => {
  // ----------------------------- Hooks -----------------------------------
  let [data, setData] = useState([]); //getting whole data
  let [page, setPage] = useState(1);
  // let [sorthtol, setSorthtol] = useState([]);
  // let [sortltoh, setSortltoh] = useState([]);
  let [filterData, setFilterData] = useState(data);
  let [loading, setLoading] = useState(true);

  // https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=1
  let getData = async () => {
    await axios
      // .get("https://fakestoreapi.com/products/")
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=${page}`
      )

      .then((res) => {
        data = res.data.data;
        setTimeout(() => {
          setLoading(false); // making loading status false, as the data is already loaded
        }, 1000);
        setData(data);
        // console.log(data)
        filterData = data;
        setFilterData(filterData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, [page]); // passing the array dependncy because it should render everytimg user change the page

  useEffect(() => {
    getData();
  }, [sorthtol]); // passing the array dependncy because it should render everytimg user clicks on sort H to L

  let addtoCart = (item) => {
    // console.log(item)
    let localData = JSON.parse(localStorage.getItem("CartItem")) || [];
    // sending the qty = 1 as default, cause by default qty should be 1 because user already added 1 item in the cart
    let qty = 1;
    item = { ...item, qty }; // adding the qty in the LS with the privious item
    localData.push(item);

    localStorage.setItem("CartItem", JSON.stringify(localData));

    alert(`Product added to the cart`);
    // console.log(localData);
  };

  let handleNext = () => {
    if (page < 5) {
      //data ends after page 4, not to render after that this is the condition given
      setPage((page += 1));
    }
    // console.log(data);
  };

  let handlePrev = () => {
    if (page == 1) {
      page = 1;
      // setPage(page)
    } else {
      setPage((page -= 1));
    }

    // getData()
  };

  // ------------------Sorting-----------------

  // let handleSort2 = () => {
  //   sortltoh = data.sort((a, b) => {
  //     return b.price - a.price;
  //   });

  //   setSortltoh(sortltoh);

  //   // console.log(sortltoh);
  // };

  // let handleSort1 = () => {
  //   sorthtol = data.sort((a, b) => {
  //     return a.price - b.price;
  //   });

  //   setSorthtol(sorthtol);
  //   console.log(sorthtol);
  // };
  // -------------------------- Filter -------------------------------------
  let newData;

  let handleFilter = (event) => {
    // let val = document.getElementById("filter").value;
    let val = event.target.value;

    if (val === "300") {
      newData = filterData.filter((item) => {
        return item.price >= "300" && item.price <= "500";
      });

      setData(newData);

      console.log(newData);
    } else if (val === "500") {
      newData = filterData.filter((item) => {
        return item.price >= "500" && item.price <= "700";
      });
      setData(newData);

      console.log(newData);
    } else if (val === "1000") {
      let newData = filterData.filter((item) => {
        return item.price >= "1000" && item.price <= "2000";
      });
      setData(newData);

      console.log(newData);
    } else if (val == "") {
      setData(filterData);
    } else {
      alert(`No products found in this range`);
      // setData(filterData);
    }
  };

  // ------------------------ Pagination ------------------------------------
  const perpage = 3;
  const [currPage, setCurrPage] = useState(0);

  let handleFetch = ({ selected: selectedPage }) => {
    setCurrPage(selectedPage);
  };

  const offset = currPage * perpage; //offset = 0, 10, 20......
  const currPageData = data
    .slice(offset, offset + perpage) // slicing the data
    .map(
      (
        item,
        index //mapping the sliced data
      ) => (
        <Card className="childCard" key={index}>
          <CardActionArea>
            <CardMedia
              component="img"
              // height="450"
              display="block"
              objectFit="cover"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize="17px"
              >
                {item.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button color="primary" onClick={() => addtoCart(item)}>
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      )
    );

  const pageCount = Math.ceil(data.length / perpage); //how many pages botton we want

  return (
    <>
      <h1>Product</h1>
      {/* ----------------Pagination-------------------- */}
      {/* <button
        onClick={handlePrev}
        disabled={page == 1}
        style={{ padding: "5px", fontSize: "20px", margin: "10px" }}
      >
        Prev
      </button> */}
      {/* <button
        onClick={handleNext}
        disabled={page === 4}
        style={{ padding: "5px", fontSize: "20px", margin: "10px" }}
      >
        Next
      </button> */}
      {/* ----------------Sorting----------------------- */}
      <button onClick={handleSort2} style={{ margin: "10px" }}>
        Sort H to L
      </button>
      <button onClick={handleSort1} style={{ margin: "10px" }}>
        Sort L to H
      </button>
      {/* ---------------Filter------------------ */}
      <select onChange={handleFilter} id="filter">
        <option value="">All</option>
        <option value="300">Price:- 300 to 500</option>
        <option value="500">Price:- 500 to 700</option>

        <option value="1000">Price:- 1000 to 2000</option>
      </select>

      {loading ? (
        <h1 style={{}}>
          <Roller />
        </h1>
      ) : (
        <div className="material_cards">{currPageData}</div>
      )}
      <ReactPaginate
        previousLabel={"<- Prev"}
        nextLabel={"Next ->"}
        pageCount={pageCount}
        onPageChange={handleFetch}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination_link_disabled"}
        activeClassName={"pagination_link_active"}
      />
    </>
  );
};

export { Product_paginate };
