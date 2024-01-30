import React, { useState } from "react";

function PanelInfoBox(props) {
  const { infos } = props.data;
  return (<div className={`flex items-center flex-wrap gap-5 lg:[&>*]:w-[23%]  [&>*]:w-full [&>*]:bg-[#4E81FB]`}>
      {infos &&
        infos.map((item, index) => (<div key={index} className='flex items-center flex-col rounded-3xl my-10 gap-5 p-2'>
            {props.name} {item.title} 
              <span> {item.count} {item.title.slice(0,9)}</span>
            </div>
        ))}
    </div>
  );
}

export default PanelInfoBox;
