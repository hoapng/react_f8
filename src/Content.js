import { memo } from "react";


function Content ({onIncrease}){
  console.log('check');

    return (
      <div>
        <h1>Hello </h1>
        <button onClick={onIncrease}>Click</button>
      </div>
    );
}
export default memo(Content)