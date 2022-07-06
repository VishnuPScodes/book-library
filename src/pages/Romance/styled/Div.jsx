



import styled from "styled-components"
import { useSelector } from "react-redux";
// const theme=useSelector((state=>state.nightmode));


export const Div=styled.div`

  //  border: 1px solid black;
    height: 100%;
    width: 100%;
    color: ${(prop)=>
prop.theme==true?"white":"black"
};

background-color: ${(prop)=>
prop.theme==true?"black":"white"
};

`

export const Div2=styled.div`
  color:${(prop)=>
  prop.theme==true?"black":""}
`

export const MenuButtons=styled.div `
     height: 100%;
    width: 100%;
    background-color:${(prop)=>
    prop.theme==true?"white":""
    };
    color:${(prop)=>
    prop.theme==true?"black":""
    }
`









