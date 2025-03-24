import React, { createContext, useReducer, ReactNode } from "react";

type Act = {
  name: string;
  carbonValue: number;
};
type State = {
  activities: Act[];
};

type Action = { type: "ADD_ACTIVITY"; payload: Act };
const initialState: State = { activities: [] };
const activityReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_ACTIVITY":
      return { activities: [...state.activities, action.payload] };
    default:
      return state;
  }
};
export const ActivityContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);
export const ActivityProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  return <ActivityContext.Provider value={{ state, dispatch }}>{children}</ActivityContext.Provider>;
};
