import { Theme, UserLoged, ExpenseIncome } from "../../interfaces/interfaces";
import { ActionType } from "./actionTypes";

export interface Action {
  type: ActionType;
}

export interface AnyAction {
  type: any;
}

export interface UnknownAction extends AnyAction {
  type: string;
}

export interface LoginAction extends Action {
  payload: UserLoged;
}

export interface ThemeAction extends Action {
  payload: Theme;
}

export interface FormAction extends Action {}

export interface NewExpenseIncomeAction extends Action {
  payload: ExpenseIncome;
}
