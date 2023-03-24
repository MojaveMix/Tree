import React from "react";
import ResearchElem from "./ResearchElem";

export default function Recherche({ htmltext, search }) {
  console.log(htmltext);
  return Array.isArray(htmltext) ? (
    htmltext &&
      htmltext.map((ele, index) => (
        <ResearchElem key={index} ele={ele} search={search}></ResearchElem>
      ))
  ) : (
    <ResearchElem key={1} ele={htmltext} search={search}></ResearchElem>
  );
}
