import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Messages";
import CrudContext from "../context/CrudContext";
import { useContext } from "react";

function CrudApi() {
  const { db, loading, error } = useContext(CrudContext);
  return (
    <>
      <h2>CRUD API con Context API</h2>
      <article className="grid-1-2">
        <CrudForm></CrudForm>
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status} ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable></CrudTable>}
      </article>
    </>
  );
}

export default CrudApi;
