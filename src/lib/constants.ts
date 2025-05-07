const CAMPOS_INPUT = {
  unidad: [
    {
      label: "Unidad",
      id: "unidad",
      input: {
        type: "number",
        id: "unidad",
        name: "unidad",
        placeholder: "1",
      },
    },
    {
      label: "Denominación",
      id: "denomination",
      input: {
        name: "denomination",
        type: "select",
        options: [
          5000,
          10000,
          20000,
          50000,
          100000,
        ],
      },
    }
  ],
  // Adding more mockup fields
  detalles: [
    {
      label: "Descripción",
      id: "description",
      input: {
        type: "text",
        id: "description",
        name: "description",
        placeholder: "Ingrese una descripción",
      },
    },
    {
      label: "Fecha",
      id: "fecha",
      input: {
        type: "date",
        id: "fecha",
        name: "fecha",
      },
    },
    {
      label: "Tipo",
      id: "tipo",
      input: {
        name: "tipo",
        type: "select",
        options: [
          "Ingreso",
          "Egreso",
          "Transferencia",
        ],
      },
    },
  ],
  sopa: [
    {
      label: "Descripción sopa",
      id: "description",
      input: {
        type: "text",
        id: "description",
        name: "description",
        placeholder: "Ingrese una descripción",
      },
    },
    {
      label: "Fecha",
      id: "fecha",
      input: {
        type: "date",
        id: "fecha",
        name: "fecha",
      },
    },
    {
      label: "Tipo",
      id: "tipo",
      input: {
        name: "tipo",
        type: "select",
        options: [
          "Ingreso",
          "Egreso",
          "Transferencia",
        ],
      },
    },
  ],
};

export type CamposType = keyof typeof CAMPOS_INPUT;

export {
  CAMPOS_INPUT
};
