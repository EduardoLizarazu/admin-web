import { getConsumers } from "app/services/admin/consumer/getConsumers";
import MyTable from "./table";

export default async function Consumer() {

    const consumers = await getConsumers(); 

    const consumersPlainObject = consumers.map((consumer) => consumer.toPlainObject());

    return(
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
      <div className="w-full flex-grow p-6">
        <h1 className="text-3xl text-black pb-6">Consumidores</h1>

        <div className="w-full mt-6">
          <p className="text-xl pb-3 flex items-center">
            <i className="fas fa-list mr-3"></i> Table de Consumidores
          </p>
          <div className="bg-white overflow-auto rounded-lg">
            <MyTable suppliers={consumersPlainObject} />
          </div>
        </div>
      </div>
    </div>
    );
}