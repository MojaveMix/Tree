import Sidebar from "./Sidebar";
import React, { useRef, useState } from "react";
import { TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share";
import { useReactToPrint } from "react-to-print";
import parse from "html-react-parser";
import Recherche from "./Recherche";
import 'bootstrap/dist/css/bootstrap.min.css'
import CK from './Ckeditor'
import {
  EnvelopeIcon,
  FolderIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  LinkIcon,
  PrinterIcon,
} from "@heroicons/react/20/solid";
// import useToast from "../../hooks/useToast";
import { FacebookShareButton, FacebookIcon } from "react-share";
// import { useToast } from "react-toastify";

function Tree() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  // const toast = useToast();

  let url = "https://www.npmjs.com/package/react-share-social";

  const ref = useRef();

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  const copy = async () => {
    await navigator.clipboard.writeText(window.location);
    // toast("success", "URL copied");
    alert("URL copied");
  };

  return (
    <div className=" grid grid-cols-12 gap-4 h-full overflow-hidden border p-2 bg-white rounded-lg">
      <div className="col-span-12 lg:col-span-5 h-full overflow-x-scroll">
        <Sidebar setData={setData} data={data} /> 
      </div>
       <div className="col-span-12 lg:col-span-7 flex flex-col h-full overflow-hidden">
        <div className="flex justify-end items-center gap-2">
          <FacebookShareButton url={url} quote={data}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton url={url} quote={data}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <WhatsappShareButton url={url} quote={data}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <a className="btn btn-link bg-gray-400 rounded-full p-1" href={`mailto:test@gmail.com`}>
            <EnvelopeIcon className="w-6 h-6 text-white" />
          </a>
        </div>
        <div className="py-2"></div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button onClick={handlePrint}>
              <PrinterIcon className="w-5 h-5" />
            </button>
            <button onClick={copy}>
              <LinkIcon className="w-5 h-5" />
            </button>
            <button>
              <FolderIcon className="w-5 h-5" />
            </button>
            {data.statut === "Actif" ? (
              <button>
                <HandThumbUpIcon className="w-5 h-5" />
              </button>
            ) : (
              <button>
                <HandThumbDownIcon className="w-5 h-5" />
              </button>
            )}
          </div>
          <div>
            <input
              className="bg-gray-100 p-2 border float-end"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              id="seacg"
              type="text"
              style={{    }}
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
        <div className="py-2"></div>
        <div className="w-full not-selected flex-grow overflow-x-hidden overflow-y-auto"
       
         ref={ref}>
          <div className="card-body not-selected">
            {data.contenu ? (
              search ? (
                <>
                  search
                  <Recherche htmltext={parse(data.contenu)} search={[search]}></Recherche>
                </>
              ) : (

              <>
                <CK dataContent={data.contenu}  libelle={data.libelle} />
              </>
    
              )
            ) : (
              "No article found"
            )}


          </div>
        </div>
      </div>
    </div>
  );
}

export default Tree;
                {/* <div dangerouslySetInnerHTML={{ __html: data.contenu }}></div> */}
