import React from 'react';

const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
    const {auditor, convenio, location, coordinates,local,tipo,observacion} = message;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg w-[80%]   ">
        <h1 className='py-4 font-bold text-md'>Confirme que deseas enviar los datos</h1>
        <div className="p-4 mb-4 text-left text-gray-700 bg-gray-100 rounded-md">
            <p>Auditor: {auditor}</p>
            <p>Convenio: {convenio?.label}</p>
            <p>Local: {local}</p>
            <p>Tipo: {tipo?.label}</p>
            <p>Calle: {location?.street}</p>
            <p>Ciudad: {location?.city}</p>
            <p>Estado: {location?.state}</p>
            <p>CP: {location?.postalCode}</p>
            <p>Coordinadas: {coordinates}</p>
            <p>Observación: {observacion}</p>
        </div>
        <div className="flex justify-end py-4 space-x-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
