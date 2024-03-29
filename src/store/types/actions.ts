import {
  Theme,
  UserLoged,
  ExpenseIncome,
  IncomesValues,
} from "../../interfaces/interfaces";
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

export interface InitialDataAction extends Action {
  payload: IncomesValues;
}

export interface DeleteMovementAction extends Action {
  payload: string;
}

export interface UpdateMovementAction extends Action {
  payload: ExpenseIncome;
}
