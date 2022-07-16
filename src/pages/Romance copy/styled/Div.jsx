



import styled from "styled-components"
import { useSelector } from "react-redux";
import urlencoded from "body-parser/lib/types/urlencoded";
// const theme=useSelector((state=>state.nightmode));


// button for book details page



export const ButtonDet=styled.button`

  //  border: 1px solid black;
  width: '500px';
  height: '400px';
    color: ${(prop)=>
prop.theme==true?"white":"white"
};


background-color: ${(prop)=>
prop.theme==true?"black":"brown"
};


`




export const DivLoader=styled.div`

  //  border: 1px solid black;
    height: 700px;
    width: 100%;
    color: ${(prop)=>
prop.theme==true?"white":"black"
};


background-color: ${(prop)=>
prop.theme==true?"black":""
};


`

export const Div=styled.div`

  //  border: 1px solid black;
    height: 100%;
    width: 100%;
    color: ${(prop)=>
prop.theme==true?"white":"black"
};
/* background-image: ${(prop)=>
prop.theme==true?"none":"url('https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"

}; */

background-color: ${(prop)=>
prop.theme==true?"black":""
};


`
export const Div3=styled.div`
  color:${(prop)=>
  prop.theme==true?"black":"brown"}
`

export const Div2=styled.div`
  margin-right: 2.5%;
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









