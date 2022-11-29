import { Field, Form, useFormikContext } from "formik";
import Button from "../Button/Button";
import { IncomesExpensesFormikFormStyled } from "./IncomesExpensesFormikFormStyled";
import CustomInputField from "../CustomInputField/CustomInputField";
import { expensesCategoriesList } from "../../Utils/categories";
import { ExpenseIncome } from "../../interfaces/interfaces";

interface IncomesExpensesFormikFormProps {
  type: "Income" | "Expense";
}

const imageWidth = 37;

export const IncomesExpensesFormikForm = ({
  type,
}: IncomesExpensesFormikFormProps): JSX.Element => {
  const { isValid, values } = useFormikContext<ExpenseIncome>();
  return (
    <IncomesExpensesFormikFormStyled>
      <Form noValidate autoComplete="off" className="form-container">
        <h2>{`New ${type}`}</h2>
        <div className="form-inputs-container">
          <CustomInputField
            class="form-input"
            label={`${type} name`}
            name="name"
            placeholder="Food"
            type="text"
          />

          <CustomInputField
            class="form-input"
            label={`${type} value`}
            name="value"
            placeholder="25"
            type="number"
          />

          <CustomInputField
            class="form-input"
            label={`${type} date`}
            name="date"
            placeholder="15/01/2022"
            type="date"
          />

          {type === "Expense" && (
            <>
              <div className="radio-container">
                <label htmlFor="radio-group">Choose an expense icon</label>
                <ul role="group" id="radio-group" className="form-radio-group">
                  {expensesCategoriesList().map((category) => {
                    if (values.category.name === category.name) {
                      values.category.icon = category.icon;
                    }

                    return (
                      <li>
                        <label>
                          <Field
                            type="radio"
                            name="category.name"
                            value={category.name}
                          />

                          <img
                            src={category.icon}
                            alt="logo"
                            width={imageWidth}
                            className={
                              values.category.name === category.name
                                ? "active"
                                : ""
                            }
                          />
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          )}
        </div>
        <Button
          text={`Add new ${type.toLowerCase()}`}
          type="submit"
          disabled={!isValid}
        />
      </Form>
    </IncomesExpensesFormikFormStyled>
  );
};
