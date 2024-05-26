function PanelInfoBox({info}) {

  return (<div className={`w-full flex md:flex-row flex-col justify-between items-center p-10 bg-[#1C1C28]`}>
      <h2>{info.name} عزیز خوش امدید</h2>
      <span>{info.email}</span>
    </div>  
  );
}

export default PanelInfoBox;
