import { useEffect,useState } from "react";

const Context = () => {
    const [theme,setTheme] = useState("light-theme");
    const toggleTheme = () =>{
    if(theme === "dark-theme")
    {
        setTheme("light-theme");
    }else{
        setTheme("dark-theme");
    }
};
useEffect(()=>{
    document.body.className = theme;
},[theme]);
    return(
        <div className="toogle-button">
            <button className="tog-button" onClick={()=>toggleTheme()}>
            </button>
        </div>
    )
}




// useEffect(()=>{},[]);


export default Context

