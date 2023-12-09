import axios from "axios";
import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const cartConst = createContext(null);
export function createContextProvider({children}){

    const addToCartContext =async (productId)=>{
        try{
            const token = localStorage.getItem("userToken");
            const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/cart`,{productId},{headers:{Authorization:`Tariq__${token}`}})
            if(data.message=='success'){
                toast("product added successfully",{
                    position: 'buttom-center',
                    autoClose :5000 ,
                    hideProggressBar :false,
                    closeOnClick : true,
                    pauseOnHover : true,
                    draggable : true,
                    progress: undefined,
                    theme:"light",
                  });
            }
            return data;
        }
        catch(error){
            console.log(error);
        }
    }
    return <cartConst.Provider value={addToCartContext}>
        {children}
    </cartConst.Provider>
}