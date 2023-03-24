import Highlighter from "react-highlight-words";

const ResearchElem = ({ ele, search }) => {
  console.log(ele, search);
  if (ele && ele.props != undefined) {
    if (typeof ele.props.children == "object") {
      if (Array.isArray(ele.props.children)) {
        console.log(ele.type);
        console.log(ele.props.children);
        const Custum = ele.type;
        if (Custum === "br") {
          return <br />;
        } else {
          return (
            <Custum>
              {ele.props.children.map((child) => {
                if (typeof child == "object") {
                  return <ResearchElem ele={child} search={search}></ResearchElem>;
                } else {
                  return (
                    <Highlighter
                      highlightClassName="High"
                      searchWords={search}
                      autoEscape={true}
                      textToHighlight={child}
                    />
                  );
                }
              })}
            </Custum>
          );
        }
      } else {
        const Custum = ele.type;
        if (Custum === "br") {
          return <br />;
        } else {
          return (
            <Custum>
              <ResearchElem ele={ele.props.children} search={search}></ResearchElem>
            </Custum>
          );
        }
      }
    } else {
      let Custum = ele.type;

      return (
        <Custum>
          <Highlighter
            highlightClassName="High"
            searchWords={search}
            autoEscape={true}
            textToHighlight={ele.props.children}
          />
        </Custum>
      );
    }
  } else {
    <></>;
  }
};

export default ResearchElem;
