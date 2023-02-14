import { useState } from "react";
import Table from "./Table";



export default function NewScreen() {
  const [modal, setModal] = useState(false);

  return (
    <div className="newScreen">
      <div>
      <Table modal={modal} setModal={setModal}></Table>
      </div>
    </div>
  );
}
