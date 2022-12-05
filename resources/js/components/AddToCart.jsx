import { useDispatch } from "react-redux";
import allActions from "../store/actions/allActions";
export default function AddToCart({ book, style }) {
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch(allActions.cartActions.addCart(book));
    }
    return (
        <button className={style} onClick={() => handleOnClick()}>THÊM VÀO GIỎ HÀNG</button>
    )
}   