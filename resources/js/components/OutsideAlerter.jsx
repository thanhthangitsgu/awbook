import { useRef } from "react";
import { useEffect } from "react";
function useOutsideAlerter(ref, func) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                func()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default function OutsideAlerter(props, func) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, func);
    return <div ref={wrapperRef} className="popup-box">{props}</div>;
}