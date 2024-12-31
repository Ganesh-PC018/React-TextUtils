import React from "react";
// import React, { useState } from 'react';
// import React, {PropTypes} from 'react';
export default function Alert(props) {
 const capitalize = (str)=>{
    const lower = str.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
 }
  return (
    // if below statement runs(true) the another will run
    props.alert &&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
      {/* <button
        // type="button"
        // class="btn-close"
        // data-bs-dismiss="alert"
        // aria-label="Close"
      >
      </button> */}
    </div>
  );
}
