const AddressItem = () => {
    return(
        <span style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <span>
                        <input type="radio" name="address"/>
                    </span>
                    <span style={{ fontWeight: 'bolder', fontSize: '15px' }}>
                        ABC , Bangalore , India 
                        Pin - 490021
                    </span>
                </span>
                <span style={{ display: 'flex', justifyContent: 'space-around'  }}>
                    <span>
                        <input type="radio" name="address" size={20}/>
                    </span>
                    <span style={{ fontWeight: 'bolder', fontSize: '15px' }}>
                        ABC , Bangalore , India 
                        Pin - 490021
                    </span>
                </span>
        </span>
    );
}

export default AddressItem;