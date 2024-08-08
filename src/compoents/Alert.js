import React from "react";

export default function Alert(props) {
   const capi =(str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1); 
   }
//  props.alert && console.log(props.alert.status, props.alert.msg)
  return (
    props.alert && <div className={`alert alert-${props.alert.status} alert-dismissible fade show container`} role="alert">
      <strong>{capi(props.alert.status)}</strong> {props.alert.msg}
    </div>
  );
}
