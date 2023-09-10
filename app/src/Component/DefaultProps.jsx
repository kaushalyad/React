import React from "react";
export const DefaultProps = ({ title, id }) => {
  return <>
     <h1>this is not default {title}</h1>
     <h1>this is not default {id}</h1>
     </>;
};

DefaultProps.defaultProps={
  title:"this is default title" ,
  id:'deafult id' 
}
