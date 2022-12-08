import uuid from "react-uuid";
import billActions from "../actions/billActions";
import axiosClient from "./axiousClient";
import globalFunctions from "../../globalFunctions";
import cartActions from "../actions/cartActions"
const getAll = () => async (dispatch) => {
    await axiosClient.get('api/bill').then((response) => {
        dispatch(billActions.getAll(response));
    })
}
const addOne = (dataForm) => async (dispatch) => {
    await axiosClient.get('api/profile').then((response) => {
        let idUser = response.data.response.id;
        let data = {
            customer_id: idUser,
            payment_id: dataForm.payment_id,
            partner_id: dataForm.partner_id,
            ship_code: uuid(),
            ship_charges: dataForm.ship_charges
        };
        axiosClient.post('api/bill', data).then((res) => {
            dataForm.listBook.length && dataForm.listBook.map((element) => {
                let detail = {
                    bill_id: res.data.data.id,
                    book_id: element.id,
                    amount: element.numberCart,
                    price: globalFunctions.getPrice(element.price, element.promotion.discount),
                    cost: element.price,
                }
                axiosClient.post('api/bill-detail', detail).then((res_2) => {
                    dispatch(cartActions.deletePay(element));
                    dispatch(cartActions.deleteCart(element));
                })
            })
        });
    }).catch()
}
const updateOne = (id, data) => async (dispatch) => {
    await axiosClient.put('api/bill/' + id, data).then((response) => {
        dispatch(billActions.updateOne(response));
        dispatch(getAll());
    })
}
const deleteOne = (id) => async (dispatch) => {
    await axiosClient.delete('api/bill/' + id).then((response) => {
        dispatch(billActions.deleteOne(response));
        dispatch(getAll());
    })
}
const getDetail = (id) => async (dispatch) => {
    await axiosClient.get('api/bill-detail/' + id).then((response) => {
        dispatch(billActions.getDetail(response));
    })
}
export default {
    getAll, addOne, updateOne, deleteOne, getDetail
}