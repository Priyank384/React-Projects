import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() =>{
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_o6BIvpLnQwqC8NVNXpSVJToGcnlRpIjfD7o90RGP&base_currency=${currency}`)
        
        .then((res) => res.json())
        .then((res) => setData(res.data))
        // console.log(data);
    }, [currency])
    useEffect(()=>{console.log(data)}, [data])
    console.log(data);
    return data
}
export default useCurrencyInfo