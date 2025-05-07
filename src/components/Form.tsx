import React, { useEffect, useState } from 'react';
import { CAMPOS_INPUT, type CamposType } from '../lib/constants';

interface Props {

}

export default function Form({}: Props) {
  const [formType, setFormType] = useState<CamposType>();
  const [totalValue, setTotalValue] = useState(0);

  const handleFormChange = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = Object.fromEntries(new FormData(form));

    switch (formType) {
      case 'unidad':
        const { unidad, denomination } = formData;
        const newTotalValue = Number(denomination) * Number(unidad)

        setTotalValue(newTotalValue)
        break;
      case 'detalles':
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    console.log("Form type changed");
    console.log(formType);
  }, [formType]);

  return (
    <div>
      <form onChange={handleFormChange}>
        <select defaultValue="" name="types" id="typesSelect" onChange={(e) => setFormType(e.target.value as CamposType)}>
          <option value="" disabled>Seleccione una opción</option>
          {
            Object.keys(CAMPOS_INPUT).map((tipo) => (
              <option
                key={tipo}
                value={tipo.toLowerCase().trim()}
                style={{
                  textTransform: "capitalize",
                }}
              >
                {tipo}
              </option>
            ))
          }
        </select>
        <fieldset>
          {
            formType && (
              CAMPOS_INPUT[formType].map(campo => {
                const {
                  id,
                  label,
                  input: {
                    name,
                    type,
                    id: inputId,
                    options,
                    placeholder
                  }
                } = campo;
                return (
                  <label key={id}>
                    <span>{label}</span>
                    {
                      type === "select" ? (
                        <select name={name} id={inputId}>
                          {
                            options?.map((value) => (
                              <option key={value} value={value}>{value}</option>
                            ))
                          }
                        </select>
                      ) : (
                        <input name={name} type={type} id={id} placeholder={placeholder} />
                      )
                    }
                  </label>
                )
              })
            )
          }
        </fieldset>
      </form>
      <div>
        <p>Total</p>
        <p>$ {totalValue}</p>
      </div>
    </div>
  )
}