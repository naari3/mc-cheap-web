import "reactn";
import { UserType } from "./userType";

declare module "reactn/default" {
  // export interface Reducers {
  //   setColor: (
  //     global: State,
  //     dispatch: Dispatch,
  //     color: string
  //   ) => Pick<State, "color">;
  // }

  export interface State {
    currentUser: UserType;
    loading: boolean;
    message: string;
    token: string;
    serverStatus: "Pending" | "InService" | "Terminating" | "Terminated";
  }
}
