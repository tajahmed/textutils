import React,{useState} from "react";

export default function About() {
const [darkmode, switchmode] = useState("Enable Dark Mode");
const [limode, swimode] = useState({
    color : 'black',
    backgroundColor : 'white'
})
const toggleMode = () => {
    if(limode.color === 'black'){
        swimode({
            color : 'white',
            backgroundColor : 'black',
            border : '1px solid white'
        })
        switchmode("Enable Light Mode")
    }else { swimode({
        color : 'black',
        backgroundColor : 'white'
    })
    switchmode("Enable dark Mode")
    }        
};

return (
    <div>        
      <div className="accordion container" style={limode} id="accordionExample">
      <h1>About Us</h1>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button  className="accordion-button" style={limode} type="button"  data-bs-toggle="collapse"   data-bs-target="#collapseOne"  aria-expanded="true" aria-controls="collapseOne"  >
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" style={limode} data-bs-parent="#accordionExample"          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It isng that just about any HTML can go within the <code>.accordion-body</code>, thoughoverflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button  className="accordion-button" style={limode} type="button"  data-bs-toggle="collapse"   data-bs-target="#collapseTwo"  aria-expanded="true" aria-controls="collapseTwo"  >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"className="accordion-collapse collapse show" style={limode}  data-bs-parent="#accordionExample"          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It isng that just about any HTML can go within the <code>.accordion-body</code>, thoughoverflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button  className="accordion-button" type="button" style={limode} data-bs-toggle="collapse"   data-bs-target="#collapseThree"  aria-expanded="true" aria-controls="collapseThree"  >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"className="accordion-collapse collapse show" style={limode} data-bs-parent="#accordionExample"          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It isng that just about any HTML can go within the <code>.accordion-body</code>, thoughoverflow.
            </div>
          </div>
        </div>
        <button className="my-3" onClick={toggleMode}> {darkmode} </button>
      </div>
      
    </div>
  );
}
