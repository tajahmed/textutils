import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const change = (e) => {
    setText(e.target.value);
  };
  const upCase = () => {
    // let newText = text.toUpperCase();
    setText(text.toUpperCase());
  };
  const loCase = () => {
    // let newText = text.toUpperCase();
    setText(text.toLowerCase());
    props.showAlert("to Lower case", "success");
  };
  const clearText =()=>{
    setText("");
    props.showAlert("the text is cleared", "danger");
  }
  const capText = () => {
    // let arr = text.split(" ")
    // console.log(arr)
    // let str1;
    // for (let i=0; i< arr.length; i++){
    //     let str = arr[i];
    //     str = str[0].toUpperCase()+ str.substring(1);
    //     // console.log(arr[i]);     // console.log(str);        // text.replace(arr[i], str);
    //     if (i == 0 ){
    //         str1 =str;
    //     } else {
    //         str1 = str1 +" "+str;
    //     }
    // }
    let str1 = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(str1);

  }

  return (
    <div >
      <div className="mb-3 container" style={props.style}>
        <h1 style={props.style}>{props.heading}</h1>
        <textarea  className="form-control" value={text}  onChange={change}  id="mybox"  rows="3" style={{background : props.mode==='light'? 'white':'grey', color : props.mode==='light'?'#042743':'white'}} ></textarea>
        <button className="my-2 btn btn-primary" id="upperCase" onClick={upCase}>     Convert to UpperCase    </button>
        <button className="mx-2 btn btn-primary" id="loCase" onClick={loCase}>        Convert to LowerCase    </button>
        <button className="mx-2 btn btn-primary" id="clrtxt" onClick={clearText}>        Cleartext        </button>
        <button className="mx-2 btn btn-primary" id="cap" onClick={capText}>        Captalize Text        </button>
      </div>
      <div className="container" style={props.style}>
        <h2>Text Summary</h2>
        <p>No.of words are: {text === ""?0 : text.trim().split(" ").length } and No.of characters: {text.length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
