import React, { useEffect } from "react";
import ItemListContainer from "../Items/ItemListContainer";

function HomePage() {
  useEffect(() => {
    document.title = "EZ Shopping";
  }, []);
  return <ItemListContainer />;
}

export default HomePage;
