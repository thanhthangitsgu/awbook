import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const SelectAddress = ({ showEdit, dataForm, setdataForm, showAdd }) => {
    const [address, setaddress] = useState([]);
    const [district, setdistrict] = useState([]);
    const [ward, setward] = useState([]);
    const useraddress = dataForm.address;

    useEffect(() => {
        async function loadData() {
            await fetch('https://provinces.open-api.vn/api/?depth=3').then(response => response.json()).then(json => {
                setaddress(json);
            });
        }
        loadData();
    }, []);

    useEffect(() => {
        let temp = useraddress.provide ? address.filter(item => item.name.replace('Thành phố', 'TP.') == useraddress.provide.trim()) : "";
        let dist = temp == "" ? "" : temp[0].districts;
        !showAdd && temp != "" && setdistrict(dist);
        let ward = dist.length ? dist.filter(item => item.name.replace('Thành phố', 'TP.') == useraddress.district.trim()) : "";
        !showAdd && ward != "" && setward(ward[0].wards);
    }, [address, useraddress]);

    const handleOnChangeProvide = (event) => {
        let temp = address.filter(item => item.code == event.target.value);
        setdistrict(temp[0].districts);
        let newAddress = { ...useraddress, provide: event.target.options[event.target.selectedIndex].innerText };
        setdataForm({ ...dataForm, address: newAddress });
    }

    const handleOnChangeDistrict = (event) => {
        let temp = district.filter(item => item.code == event.target.value);
        setward(temp[0].wards);
        let newAddress = { ...useraddress, district: event.target.options[event.target.selectedIndex].innerText };
        setdataForm({ ...dataForm, address: newAddress });
    }

    const handleOnChangeWard = (event) => {
        let newAddress = { ...useraddress, ward: event.target.options[event.target.selectedIndex].innerText };
        setdataForm({ ...dataForm, address: newAddress });
    }
    return (
        <>
            <select name="provide" id="provide" onChange={() => handleOnChangeProvide(event)} disabled={!showEdit && !showAdd}>
                <option value="0" >Tỉnh</option>
                {address.length && address.length > 0 && (
                    address.map((element, index) => {
                        return (
                            <option value={element.code} key={index} selected={showAdd ? null : element.name.replace('Thành phố', 'TP.') == useraddress.provide.trim()}>{element.name.replace('Thành phố', 'TP.')}</option>
                        )
                    })
                )}
            </select>
            <select name="provide" id="distric" onChange={() => handleOnChangeDistrict(event)} disabled={!showEdit && !showAdd}>
                <option value="0">Huyện</option>
                {district.length && district.length > 0 && (
                    district.map((element, index) => {
                        return (
                            <option value={element.code} key={index} selected={element.name == useraddress.district.trim()}>{element.name.replace('Thành phố', 'TP.')}</option>
                        )
                    })
                )}
            </select>
            <select name="prove" id="ward" disabled={!showEdit && !showAdd} onChange={() => handleOnChangeWard(event)}>
                <option value="0">Xã</option>
                {ward.length && ward.length > 0 && (
                    ward.map((element, index) => {
                        return (
                            <option value={element.code} key={index} selected={element.name == useraddress.ward.trim()}>{element.name}</option>
                        )
                    })
                )}
            </select>
        </>
    )
}
export default React.memo(SelectAddress);