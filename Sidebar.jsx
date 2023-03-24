import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import SidbarItem from "./SidebarItem";

export default function Sidebar({ setData, data }) {
  const [filles, setFilles] = useState([]);

  const fetchData = useCallback(() => {
    axios
      .put("http://5.196.78.152:2099/api/sommairesracine")
      .then((res) => {
        setFilles(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ul className="w-full tree float-start tes">
      {filles.map((item, index) => (
        <SidbarItem key={index} item={item} ids={item.id} setData={setData}  />
      ))}
    </ul>
  );
}
