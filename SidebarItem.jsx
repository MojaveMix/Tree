import React, { useState} from "react";
import axios from "axios";
import Demo from "./Demo";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "./Card";

export default function SidebarItem({ item, setData }) {
  const [ids, setId] = useState(0);
  const [value,setValue] = useState("");
  

  const handelClick = async (id) => {
    try {
      const response = await axios("http://5.196.78.152:2099/api/sommairesfilles", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        data: {
          idsommaire: id,
        },
      });

        item.childrens =response.data
        // item.childrens = item.childrens ? [...item.childrens ,response.data]:response.data
      console.log(item.childrens)
    } catch (error) {
      console.log(error);
    }
    setId(id);
  };

  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen((current) => !current);
    handelClick(item.id);
   
  };

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }



function AddChild (){
  var li = document.createElement("li");
  let it={libelle:value };
  
  //  item.childrens = item.childrens ? [...item.childrens ,it]:[it]
  // li.append( item.childrens? [...item.childrens ,value]:[value] )
  // console.log(item.childrens)

  li.append(it.libelle)

  document.getElementById(`IDS:${item.id}`).append(li);

  setIsOpen(false)
}


if (item.childrens && item.childrens.length > 0) {

    return (
      <>
      <li className={`${open ? "actives " : ""} tes py-2`}     >
        <button
          href="/#"
          title={item.libelle}
          onClick={handelOpen}
          className="z-30 inline-block text-ellipsis overflow-hidden max-w-[30ch] whitespace-nowrap "
          // onContextMenu={(e)=>{ e.preventDefault();}} 
         >
          {item.libelle}
        </button>
        <button className='btn btn-link btn'   onClick={togglePopup}   >
          <FontAwesomeIcon icon={faPlus}  color="black"   />
        </button>
        <button className='btn btn-link btn'   onClick={()=> setData(item)}   >
          <FontAwesomeIcon icon={faEdit}  color="black"   />
        </button>
          {    
          isOpen && <Popup
                      content={
                      <>
                        <label htmlFor="Ji"  className="mb-2" >Child Name</label>
                         <input className="form-control mb-2 iu" onChange={(e)=>setValue(e.target.value)}   type="text" placeholder={item.libelle} />
                        <button   className="btn btn-primary" onClick={()=>AddChild()}>save</button>
                      </>}
                      handleClose={togglePopup}
                    />
          }
        <ul id={`IDS:${item.id}`} className={`tree ${open ? "show" : ""} tes py-2`} >
          <Demo item={item} ids={ids} setData={setData} />
        </ul>
      </li>
        </>
    );
  } else { 
    return (
   
        

<li className="tes " >
        <button
          title={item.libelle}
          onClick={() => handelClick(item.id)}
         
          className="z-30 inline-block text-ellipsis overflow-hidden max-w-[30ch] whitespace-nowrap "
        >
          {item.libelle}
        </button>
        <button className='btn btn-link btn'   onClick={togglePopup}   >
          <FontAwesomeIcon icon={faPlus}  color="black"   />
        </button>
        <button className='btn btn-link btn'  onClick={()=> setData(item)}  >
          <FontAwesomeIcon icon={faEdit}  color="black"   />
        </button>
        {    
          isOpen && <Popup
                      content={
                      <>
                        <label htmlFor="Ji"  className="mb-2" >Child Name</label>
                         <input className="form-control mb-2 iu" onChange={(e)=>setValue(e.target.value)}   type="text" placeholder={item.libelle} />
                        <button   className="btn btn-primary" onClick={()=>AddChild()}>save</button>
                      </>}
                      handleClose={togglePopup}
                    />
          }
        <ul id={`IDS:${item.id}`} className={`tree ${open ? "show" : ""}  `} >
          
        </ul>
  
      </li>
            
        
    );
  }
}
