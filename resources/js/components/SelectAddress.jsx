import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const SelectAddress = ({setshowedit, showEdit}) => {
    const [address, setaddress] = useState([]);
    const [district, setdistrict] = useState([]);
    const [ward, setward] = useState([]);

    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/?depth=3').then(response => response.json()).then(json => setaddress(json));
    }, []);

    const handleOnChangeProvide = (event) => {
        let temp = address.filter(item => item.code == event.target.value);
        setdistrict(temp[0].districts);
    }

    const handleOnChangeDistrict = (event) => {
        let temp = district.filter(item => item.code == event.target.value);
        setward(temp[0].wards); 
    }

    
    return (
        <>
            <select name="ward" id="provide" onChange={() => handleOnChangeProvide(event)} disabled={!showEdit}>
                <option value="0" >Tỉnh</option>
                {address.length && address.length > 0 && (
                    address.map((element, index) => {
                        return (
                            <option value={element.code} key={index}>{element.name}</option>
                        )
                    })
                )}
            </select>
            <select name="ward" id="distric" onChange={() => handleOnChangeDistrict(event)} disabled={!showEdit}>
                <option value="0">Huyện</option>
                {district.length && district.length > 0 && (
                    district.map((element, index) => {
                        return (
                            <option value={element.code} key={index}>{element.name}</option>
                        )
                    })
                )}
            </select>
            <select name="ward" id="ward" disabled={!showEdit}>
                <option value="0">Xã</option>
                {ward.length && ward.length > 0 && (
                    ward.map((element, index) => {
                        return (
                            <option value={element.code} key={index}>{element.name}</option>
                        )
                    })
                )}
            </select>
        </>
    )
}
export default React.memo(SelectAddress);