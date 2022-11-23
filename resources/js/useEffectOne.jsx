import { useRef } from "react";
import { useEffect } from "react";
export default function useEffectOnce(fn) {
    const ref = useRef(false);
    useEffect(() => {
        if (ref.current) {
            fn();
        }
        return () => {
            ref.current = true;
        };
    }, []);
}