import { memo } from "react";


function Content ({count2}){
  console.log(count2);

    return (
      <div>
        <h1>Hello {count2}</h1>
      </div>
    );
}
export default memo(Content)