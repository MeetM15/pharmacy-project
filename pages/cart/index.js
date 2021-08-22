import CartProduct from "../../components/cartProduct/CartProduct";
import AddressItem from "../../components/address/AddressItem";
const CartPage = () => {
  return (
      <div>
        <div
        style={{
            display: "flex",
            // height: "100vh",
            // width: "100%"
        }}
        >
            <span style={{ padding: '5px', paddingLeft: '10px' }}>
                <span style={{ fontSize: '24px', fontWeight: 'bolder' }}>Order Summary</span>
            </span>
        </div>
        <div style={{ backgroundColor: '#e2e2e2', display:'flex', justifyContent : 'space-around', flexDirection: 'column' }}>
            <span style={{ display: 'flex', flexDirection: 'column', margin: '10px', backgroundColor: '#fff' , borderRadius: '10px', width:'95%' , padding: '5px' }}>
                <span style={{ paddingLeft: '15px', padding: '5px', fontWeight: 'bolder', color: '#5e5e5e' }}>
                    PRODUCTS
                </span>
                <CartProduct />
                <span style={{ display: 'flex', justifyContent:'space-around' , margin: '5px'}}>
                    <span style={{ width: '90%' ,paddingBottom: '5px', borderBottom: '2px solid #e2e2e2'}}>
                    </span>
                </span>
                
                <CartProduct />
                <span style={{ display: 'flex', justifyContent:'space-around' , margin: '5px'}}>
                    <span style={{ width: '90%' ,paddingBottom: '5px', borderBottom: '2px solid #e2e2e2'}}>
                    </span>
                </span>
                <span style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', fontWeight: 'bolder' }}>
                    <span style={{ color: '#51cfa1', fontSize: '16px' }}>ADD MORE ITEMS</span>
                    <button style={{ backgroundColor: '#fff', color: '#51cfa1', fontSize: '20px', border: 'none' }}>+</button>
                </span>
            </span>
            
            <span style={{ display: 'flex', flexDirection: 'column', margin: '10px', backgroundColor: '#fff' , borderRadius: '10px', width:'95%' , padding: '5px', marginTop: '10px' }}>
                <span style={{ paddingLeft: '15px', padding: '5px', fontWeight: 'bolder', color: '#5e5e5e', marginBottom: '15px' }}>
                    SELECT ADDRESS
                </span>
                <AddressItem />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', margin: '10px', backgroundColor: '#fff' , borderRadius: '10px', width:'95%' , padding: '5px', marginTop: '10px', paddingBottom: '15px' }}>
                <span style={{ paddingLeft: '15px', padding: '5px', fontWeight: 'bolder', color: '#5e5e5e', marginBottom: '15px' }}>
                    PAYMENT DETAILS
                </span>
                <span style={{ padding: '15px', paddingTop: '0px' }}>
                    <span style={{ display: 'flex', fontSize: '16px', justifyContent: 'space-between', padding: '5px' }}>
                        <span>
                            MRP Total
                        </span>
                        <span>
                            Rs. 519.00
                        </span>
                    </span>
                    <span style={{ display: 'flex', fontSize: '16px', justifyContent: 'space-between', padding: '5px' }}>
                        <span>
                            NetMeds Discount
                        </span>
                        <span>
                            - Rs. 519.00
                        </span>
                    </span>
                    <span style={{ display: 'flex', fontSize: '16px', fontWeight: 'bolder' , justifyContent: 'space-between', padding: '5px' }}>
                        <span>
                            Total Amount*
                        </span>
                        <span>
                            Rs. 519.00
                        </span>
                    </span>
                    <span style={{ display: 'flex', backgroundColor: 'rgb(208 236 223)' , color: '#62c362' , fontSize: '16px', fontWeight: 'bolder' , justifyContent: 'space-between', padding: '5px', borderRadius: '4px' }}>
                        <span>
                            TOTAL SAVINGS*
                        </span>
                        <span>
                            Rs. 519.00
                        </span>
                    </span>
                </span>
            </span>
        </div>
    </div>
  );
};
export default CartPage;
