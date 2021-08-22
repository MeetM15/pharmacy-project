import Layout from "../../../components/layout/Layout";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
const offer = (price, mrp) => {
  const offerPrice = (((parseInt(mrp) - parseInt(price)) / parseInt(mrp)) * 100)
    .toString()
    .slice(0, 4);
  return offerPrice + "%";
};
const useStyles = makeStyles((theme) => ({
  mainDiv: {
    border: "1px solid black",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "Left",
    justifyContent: "flex-start",
    fontSize: "clamp(16px,2vw,24px)",
    fontWeight: "500",
    height: "100%",
    width: "99%",
    cursor: "pointer",
    borderRadius: "5px",
    // "& img": {
    //   maxWidth: "120px"
    // }
  },
  priceSpan: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));
const ProductList = ({ product }) => {
  const classes = useStyles();
  return (
    <Layout>
      <h1>{product.name}</h1>
      <div>
        <img
          src={product.img}
          alt={product.name}
          width="350px"
          height="150px"
        />
      </div>

      <div className={classes.mainDiv} style={{ marginTop: "10px" }}>
        <span style={{ marginTop: "10px", marginBottom: "15px" }}>
          <span
            style={{ padding: "15px", fontSize: "18px", marginBottom: "15px" }}
          >
            {product.name}
          </span>
        </span>
        <span>
          <span className={classes.priceSpan}>
            <span
              style={{ display: "flex", flexDirection: "column", width: "60%" }}
            >
              <span>
                <span style={{ padding: "15px" }}>
                  <span style={{ fontSize: "16px" }}>{product.price}</span>
                  <strike style={{ color: "#e0e0e0", fontSize: "12px" }}>
                    {product.mrp}
                  </strike>
                </span>
              </span>
              <span>
                <span style={{ padding: "15px", fontSize: "12px" }}>
                  Inclusive of all taxes
                </span>
              </span>
            </span>
            <span
              style={{
                display: "flex",
                width: "40%",
                padding: "10px",
                border: "1px solid green",
                borderRadius: "5px",
              }}
            >
              {offer(product.price, product.mrp)} OFF
            </span>
          </span>
        </span>
        <span style={{ marginTop: "10px" }}>
          <span className={classes.priceSpan}>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                padding: "15px",
              }}
            >
              <span>
                <span>
                  <span style={{ fontSize: "12px" }}>
                    Country of Origin : INDIA{" "}
                  </span>
                </span>
              </span>
              <span>
                <span style={{ fontSize: "12px" }}>Seller information</span>
              </span>
            </span>
            <span
              style={{
                display: "flex",
                width: "40%",
                padding: "10px",
                background: "#a63d3d",
                borderRadius: "5px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              ADD TO CART
            </span>
          </span>
        </span>
      </div>

      <div className={classes.mainDiv} style={{ marginTop: "15px" }}>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5px",
            marginLeft: "10px",
            padding: "5px",
          }}
        >
          <span style={{ fontSize: "16px", marginBottom: "15px" }}>
            Delivery Option : Cash on delivery
          </span>
          <span style={{ fontSize: "15px", fontWeight: "bold" }}>
            Delivery By August 20, 2021
          </span>
        </span>
      </div>

      <div className={classes.mainDiv} style={{ marginTop: "15px" }}>
        <span style={{ display: "flex" }}>
          <span
            style={{
              fontSize: "18px",
              marginBottom: "5px",
              paddingLeft: "15px",
            }}
          >
            {" "}
            Seller Information{" "}
          </span>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            marginTop: "5px",
          }}
        >
          <span>
            <span style={{ padding: "15px" }}>
              <span style={{ color: "#5e5e5e", fontSize: "15px" }}>
                Manufactured By:
              </span>
            </span>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "5px",
            }}
          >
            <span style={{ paddingLeft: "15px", fontSize: "17px" }}>
              ABC Firm
            </span>
            <span style={{ paddingLeft: "15px", fontSize: "14px" }}>
              hootagalli,mysuru 570018
            </span>
          </span>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            marginTop: "10px",
          }}
        >
          <span>
            <span style={{ padding: "15px" }}>
              <span style={{ color: "#5e5e5e", fontSize: "15px" }}>
                Packed By:
              </span>
            </span>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "5px",
            }}
          >
            <span style={{ paddingLeft: "15px", fontSize: "17px" }}>
              DEF Firm
            </span>
            <span style={{ paddingLeft: "15px", fontSize: "14px" }}>
              hootagalli,mysuru 570018
            </span>
          </span>
        </span>
      </div>

      <div className={classes.mainDiv} style={{ marginTop: "15px" }}>
        <span
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-around",
            color: "green",
            borderBottom: "2px solid green",
          }}
        >
          <span style={{ fontSize: "18px", marginBottom: "5px" }}>
            {" "}
            Description{" "}
          </span>
        </span>
        <span
          style={{
            padding: "10px",
            fontSize: "12px",
            textAlign: "justify",
            color: "#000",
            marginTop: "10px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing
        </span>

        <span
          style={{
            padding: "10px",
            fontSize: "12px",
            textAlign: "justify",
            color: "#000",
            marginTop: "5px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing
        </span>
      </div>
    </Layout>
  );
};
export default ProductList;
export const getServerSideProps = async (context) => {
  const { productID: productName } = context.query;
  const res = await fetch("../../data/products/Products");
  const products = await res.json();
  const singleProduct = products.filter(
    (product) => product.name == productName
  );
  return {
    props: {
      product: singleProduct,
    },
  };
};
