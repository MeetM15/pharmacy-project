import { useState } from "react";
const CartProduct = () => {
    const [count, setCount] = useState(1)

    const decreementCount = () => {
        if( count !== 1){
            setCount(count - 1);
        }
    }

    const increementCount = () => {
        setCount(count + 1);
    }

    return (
                <span style={{ display: 'flex' , justifyContent: 'space-evenly', marginTop: '10px' }}>
                    <span>
                        <img 
                            src="https://www.netmeds.com/images/product-v1/600x600/411010/nivea_men_protect_care_roll_on_50_ml_0_1.jpg" 
                            alt="hello" 
                            width="70px" 
                            height="70px" 
                        />
                    </span>
                    <span style={{display: 'flex', flexDirection: 'column'}}>
                        <span style={{ fontSize: '20px', marginBottom: '3px' }}>
                            Nivea Men Face-Cream
                        </span>
                        <span style={{ fontSize: '12px',color: 'green', marginBottom: '4px' }}>
                            Only 1 left in stock.
                        </span>
                        <span  style={{ fontSize: '12px',color: '#5e5e5e', marginBottom: '6px' }}>
                           <i> Mfr : Nivea india pvt limited</i>
                        </span>
                        <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ width: '55%' }}>
                                <span style={{ fontSize: '16px', color: '#ec3a3a' }}>Rs 699 </span>
                                <strike style={{ color : '#e0e0e0', fontSize: '12px' }}>Rs 2500</strike>
                            </span>
                            <span style={{ width: '40%', display: 'flex', justifyContent: 'space-around' }}>
                                <button onClick={() => decreementCount()} style={{ border: 'none',fontSize: '18px', borderRadius: '2px' }}>-</button>
                                <span style={{ fontSize: '18px' }}>{count}</span>
                                <button onClick={() => increementCount()} style={{ border: 'none',fontSize: '18px', borderRadius: '2px' }}>+</button>
                            </span>
                        </span>
                        <span style={{ fontSize: '13px', marginBottom: '8px',marginTop: '8px' }}>
                            Delivery Between AUGUST 24 - AUGUST 25
                        </span>
                        <span style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <button style={{ color: '#5e5e5e' , fontWeight: 'bolder', border: 'none', padding: '7px', borderRadius: '4px', width: '35%' }}>
                                REMOVE
                            </button>
                            <button style={{ color: '#5e5e5e' , fontWeight: 'bolder', border: 'none', padding: '7px', borderRadius: '4px', width: '55%' }}>
                                SAVE FOR LATER
                            </button>
                        </span>
                    </span>
                </span>
    );
}
export default CartProduct;