import { getConsumers } from "app/services/admin/consumer/getConsumers";

export default async function Consumer() {

    const consumers = await getConsumers(); 

    return(
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <div className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">Tables</h1>

            <div className="w-full mt-6">
                <p className="text-xl pb-3 flex items-center">
                    <i className="fas fa-list mr-3"></i> Table Example
                </p>
                <div className="bg-white overflow-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Nombre</th>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Apellido</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Celular</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Correo</th>                                
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Condominio</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Condominio</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {consumers.map((consumer, index) => (
                                <tr key={consumer.id} className={index % 2 === 0 ?  "hover:bg-gray-100" : "bg-gray-200 hover:bg-gray-300"}>
                                    <td className="w-1/3 text-left py-3 px-4">{consumer.name}</td>
                                    <td className="w-1/3 text-left py-3 px-4">{consumer.lastName}</td>
                                    <td className="w-1/3 text-left py-3 px-4">{consumer.phone}</td>
                                    <td className="w-1/3 text-left py-3 px-4">{consumer.email}</td>
                                    <td className="w-1/3 text-left py-3 px-4">{consumer.condominium}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    </div>
    );
}