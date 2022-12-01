import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const SelectAddress = ({ showEdit, dataForm, setdataForm, showAdd }) => {
    const [provide, setprovide] = useState([]);
    const [district, setdistrict] = useState([]);
    const [ward, setward] = useState([]);
    const [address, setaddress] = useState(dataForm.address);
    //Lấy dữ liệu tỉnh huyện xã
    useEffect(() => {
        async function loadData() {
            await fetch('https://provinces.open-api.vn/api/?depth=3').then(response => response.json()).then(json => {
                setprovide(json);
            });
        }
        loadData();
    }, []);
    //Lấy địa chỉ 
    useEffect(() => {
        dataForm.address.provide && setaddress(dataForm.address);
    }, [dataForm])

    //Thiết lập giá trị mặc định
    useEffect(() => {
        if (address.provide && provide.length) {
            let dataProvide = provide.filter(item => item.name == address.provide.trim())[0];
            dataProvide && dataProvide.districts && setdistrict(dataProvide.districts);
            let dataDistrict = dataProvide.districts.filter(item => item.name == address.district.trim())[0];
            dataDistrict && dataDistrict.wards && setward(dataDistrict.wards)
        }
    }, [provide, address])

    //Cập nhật form
    const handleOnChange = (event) => {
        let nameAdd = event.target.options[event.target.selectedIndex].text;
        let name = event.target.name;
        let data;
        switch (name) {
            case "provide":
                data = {
                    provide: nameAdd,
                    district: "",
                    ward: "",
                }
                break;
            case "district":
                data = {
                    district: nameAdd,
                    ward: "",
                }
                break;
            default:
                data = {
                    ward: nameAdd,
                }
        }
        setdataForm({ ...dataForm, address: { ...dataForm.address, ...data } })
    }
    return (
        <>
            <select name="provide" defaultValue={'0'} id="provide" onChange={() => handleOnChange(event)} disabled={!showEdit && !showAdd}>
                <option value="0" >Tỉnh</option>
                {provide.length && provide.map((element, index) => {
                    return (
                        <option key={element.code} value={element.code} selected={element.name == address.provide.trim()}>{element.name}</option>
                    )
                })}
            </select>
            <select name="district" id="distric" onChange={() => handleOnChange(event)} disabled={!showEdit && !showAdd}>
                <option value="0">Huyện</option>
                {district.length && district.map((element, index) => {
                    return (
                        <option key={element.code} value={element.code} selected={element.name == address.district.trim()}>{element.name}</option>
                    )
                })}
            </select>
            <select name="ward" id="ward" disabled={!showEdit && !showAdd} onChange={() => handleOnChange(event)}>
                <option value="0">Xã</option>
                {ward.length && ward.map((element, index) => {
                    return (
                        <option key={element.code} value={element.code} selected={element.name == address.ward.trim()}>{element.name}</option>
                    )
                })}
            </select>
        </>
    )
}
export default React.memo(SelectAddress);