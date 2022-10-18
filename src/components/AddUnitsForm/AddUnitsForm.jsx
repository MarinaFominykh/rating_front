import React, { useRef } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import Form from "../Form/Form.jsx";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";

function AddUnitsForm({
  onClose,
  isOpen,
  allUnits,
  onAddUnits,
  message,
  onClick,
}) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "array",
  });

  function onSubmit(e) {
    onAddUnits(e.array);

    reset();
  }

  return (
    <Form
      onClose={onClose}
      isOpen={isOpen}
      title="Список игроков"
      button="Сохранить"
      //   onSubmit={handleSubmit(console.log)}
      onSubmit={handleSubmit(onSubmit)}
      message={message}
      isDisabled={!isValid}
    >
      {fields.map(({ id }, index) => {
        return (
          <div className="form_unit-container">
            <label>
              Ник игрока
              <select
                name={`array[${index}].unit`}
                {...register(`array[${index}].unit`)}
                onChange={(e) => {
                  e.target.value === "newItem" && onClick();
                }}
                required

                // value={`${values}.items[${index}].name`}
                // onChange={handleChange}
              >
                <option></option>
                {allUnits.map((unit) => {
                  return (
                    <OptionUnit
                      name={unit.name}
                      key={unit._id}
                      unitId={unit._id}
                    />
                  );
                })}
                <option value="newItem">...добавить игрока</option>
              </select>
              {/* <Error error={`${errors}?.array[${index}].unit?.${message}`} /> */}
            </label>
            <label>
              Роль в игре
              <select
                name={`array[${index}].role`}
                {...register(`array[${index}].role`)}
                required
                // value={values.roleAddUnitsForm}
                // onChange={handleChange}
              >
                <option></option>
                <option value="мирный">мирный</option>
                <option value="мафия">мафия</option>
                <option value="дон">дон</option>
                <option value="шериф">шериф</option>
              </select>
            </label>
            <label>
              Модкилл в игре
              <input
                name={`array[${index}].modKill`}
                {...register(`array[${index}].modKill`)}
                type="checkbox"
              ></input>
            </label>

            <label>
              Лучший игрок
              <input
                name={`array[${index}].bestPlayer`}
                {...register(`array[${index}].bestPlayer`)}
                type="checkbox"
              ></input>
            </label>
            <button type="button" onClick={() => remove(index)}>
              Удалить
            </button>
          </div>
        );
      })}
      <button type="button" onClick={() => append({})}>
        Добавить игрока
      </button>
    </Form>
  );
}

export default AddUnitsForm;
