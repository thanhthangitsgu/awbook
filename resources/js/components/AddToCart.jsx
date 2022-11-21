import { useDispatch } from "react-redux";
import allActions from "../store/actions/allActions";
export default function AddToCart({book, style, action}){
    const dispatch = useDispatch();
    const handleOnClick = () =>{
        dispatch(allActions.detailBookActions.addCart(book));
    }
    return(
        <button className={style} onClick={() => handleOnClick()}>THÊM VÀO GIỎ HÀNG</button>
    )
}