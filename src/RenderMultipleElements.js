import React from "react";

//1. Using DIV element
function ButtonComponent1() {
  return (
    <div>
      <button>Button 1</button>&nbsp;
      <button>Button 1</button>
    </div>
  );
}

//2. Using Fragments
function ButtonComponent2() {
  return (
    <React.Fragment>
      <button>Button 2</button>&nbsp;
      <button>Button 2</button>
    </React.Fragment>
  );
}

//3. Using Fragments Shorthand Syntax
function ButtonComponent3() {
  return (
    <>
      <button>Button 3</button>&nbsp;
      <button>Button 3</button>
    </>
  );
}

//4. Using Array Syntax
function ButtonComponent4() {
  return [<button>Button 4</button>, <button>Button 4</button>];
}

//5. Using Fragments Shorthand Syntax
function ButtonComponent5() {
  return (
    <React.StrictMode>
      <button>Button 5</button>&nbsp;
      <button>Button 5</button>
    </React.StrictMode>
  );
}

export default function RenderMultipleElements() {
  return (
    <div>
      <h1>1. Render Multiple Elements</h1>
      <ButtonComponent1 />
      <br />
      <ButtonComponent2 />
      <br />
      <br />
      <ButtonComponent3 />
      <br />
      <br />
      <ButtonComponent4 />
      <br />
      <br />
      <ButtonComponent5 />
    </div>
  );
}
