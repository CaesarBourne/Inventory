import { Controller, useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

// import "./form.css";
import CustomResInput from "./FormFields/CustomResInput";

const ResForm = ({ formValues, id, home }: any) => {
  const { control } = useForm();
  const resources = useSelector((state: any) => state.resource.resource);
  console.log('formValues', formValues)
  console.log('id', id)
  const formInputs = formValues.value.map((e: any, index: any) => {
    const { opt, value, label } = e;
    return (
      <section key={index}>
        {/* <label>{label}</label> */}
        <Controller
          name={index.toString()}
          control={control}
          render={({ field }) => {
            return (
              <div>
                <CustomResInput
                  type={opt}
                  // value={field.value}
                  // value={resources[id][formIndex][index].data}
                  value={
                    resources[id].find((v: any) => v.id === formValues.id)
                      .value[index].data
                  }
                  onChange={field.onChange}
                  inpProp={e}
                  label={label || value}
                  index={index}
                  id={id}
                  formId={formValues.id}
                  // {...ResFormForm[e]}
                />
              </div>
            );
          }}
        />
      </section>
    );
  });

  return (
    <div className="form">
      <div className="res__header">
        <p>{formValues.value[0].value}</p>
        <p>x</p>
      </div>
      <div className="resform__body">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {formInputs.slice(2)}
        </div>
      </div>
    </div>
  );
};

export default ResForm;
