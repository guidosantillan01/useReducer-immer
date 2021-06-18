import React from "react";

import Filter from "./Filter";

const initialState = {
  filters: {
    timeframeFilters: [
      {
        id: "tf-1",
        value: "2012 - 2013",
        filter: ["2012", "2013"]
      },
      {
        id: "tf-2",
        value: "2013 - 2014",
        filter: ["2013", "2014"]
      }
    ],
    serviceFilters: [
      {
        id: "s-1",
        value: "DWA",
        filter: "dwa"
      }
    ]
  },
  todos: [
    {
      id: "todo-1",
      todo: "Learn immer"
    },
    {
      id: "todo-2",
      todo: "Learn zustand"
    }
  ],
  user: {
    id: "user-1",
    username: "sputnik3000",
    firstname: "Guido",
    lastname: "Santillan",
    hobbies: ["gaming", "coding", "chilling"]
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          timeframeFilters: [
            ...state.filters.timeframeFilters,
            ...action.payload
          ]
        }
      };
    case "REMOVE_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          timeframeFilters: state.filters.timeframeFilters.slice(0, -1)
        }
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addFilters = () =>
    dispatch({
      type: "ADD_FILTERS",
      payload: [
        {
          id: "tf- 3",
          value: "2012 - 2013",
          filter: ["2012", "2013"]
        },
        {
          id: "tf- 3",
          value: "2015 - 2015",
          filter: ["2015", "2015"]
        }
      ]
    });

  const removeFilters = () =>
    dispatch({
      type: "REMOVE_FILTERS"
    });

  return (
    <div className="main">
      <button onClick={addFilters}>push filter</button>
      <button onClick={removeFilters}>pop filter</button>
      <div className="code">
        <div className="code-container">
          <Filter timeframeFilters={state.filters.timeframeFilters} />
        </div>
      </div>
    </div>
  );
}
