import React from "react";
import { useState } from "react";
import  { Button,Form}  from "react-bootstrap";




function Falseposition () {
    const [fx,setfx] = useState(" ");
    const [xr,setxr] = useState(" ");
    const [xl,setxl] = useState(" ");
    const [ans,setans] = useState(" ");
    const [Error,seterror] = useState(" ");
    const [Iteration,setIteration] = useState(" ");

    const Submit =()=>{
        
        var x,x1,fxl,fxr,ans,error=1,a,XL,XR,fx1,xo,y=0,percent;
        XL= Number(xl);
        XR= Number(xr); 
        
        do{
          x=XR;
          fxr=eval(fx);
          x=XL;
          fxl=eval(fx);
          x1=((XL*fxr)-(XR*fxl))/(fxr-fxl);
          x=x1;
          fx1=eval(fx);
          a=fx1*fxr;
          if(a>0){
            xo=XR;
            XR=x1;
          }
          else{
            xo=XL;
            XL=x1;

          }
          error=Math.abs((x1-xo)/x1)*100;
          
          y+=1;
      }
      while(error>=0.000001);
      ans=x1.toFixed(6);
      percent=error.toFixed(6);
        setans(ans);
        seterror(percent);
        setIteration(y);

  }
        
    

   
return(
    <>
    <div className=" text-center">
        <h1 >False Position</h1>
            <Form>
                
                <Form.Group className="mb-3 "  >      
                    <Form.Label className="text-center">input FX XL and XR </Form.Label><br/> 
                    <Form.Control id ="FX"  className=" my-3  w-25" style={{margin : "0 auto"}} placeholder="FX"  onChange={event => setfx(event.target.value)}/>
                    <Form.Control id ="XR"  className=" my-3  w-25" style={{margin : "0 auto"}} placeholder="XR"  onChange={event => setxr(event.target.value)}/> 
                    <Form.Control id ="XL"  className=" my-3  w-25" style={{margin : "0 auto"}} placeholder="XL"  onChange={event => setxl(event.target.value)}/> 
                <Button className="btn-dark " onClick={Submit}>
                        Submit
                </Button>
                </Form.Group>
            </Form>

                
            <div className=" text-center p-5">
                
                Ans : {ans} | 
                Error : {Error} %<br/>
                Iteration:{Iteration}

            
            </div>
        </div>
        
    </>
)




}

export default Falseposition ;