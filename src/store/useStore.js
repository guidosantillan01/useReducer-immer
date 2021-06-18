import create from "zustand";
import produce from "immer";

// Log every time state is changed
const log = (config) => (set, get, api) =>
  config(
    (args) => {
      console.log("  applying", args);
      set(args);
      console.log("  new state", get());
    },
    get,
    api
  );

// Turn the set method into an immer proxy
const immer = (config) => (set, get, api) =>
  config((fn) => set(produce(fn)), get, api);

const useStore = create(
  log(
    immer((set) => ({
      set: (fn) => set(produce(fn)),
      pushFilter: (payload) =>
        set((state) => state.filters.timeframeFilters.push(payload)),
      popFilter: () => set((state) => state.filters.timeframeFilters.pop()),
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
    }))
  )
);

export default useStore;
