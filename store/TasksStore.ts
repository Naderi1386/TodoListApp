import { TaskType } from "@/types/TaskType";
import { create } from "zustand";

type Store = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  removeTask: (id: string) => void;
  editTask: (id: string, editedTask: TaskType) => void;
  removeAll: () => void;
};

export const useStore = create<Store>()((set) => ({
  tasks: [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum ad aliquid facere quisquam possimus!",
      title: "test 1",
      isCompleted: false,
      id: "a",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum ad aliquid facere quisquam possimus!",
      title: "test 2",
      isCompleted: true,
      id: "b",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum ad aliquid facere quisquam possimus!",
      title: "test 3",
      isCompleted: false,
      id: "c",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum ad aliquid facere quisquam possimus!",
      title: "test 4",
      isCompleted: true,
      id: "d",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum ad aliquid facere quisquam possimus!",
      title: "test 5",
      isCompleted: false,
      id: "e",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum ad aliquid facere quisquam possimus!",
      title: "test 6",
      isCompleted: true,
      id: "f",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum ad aliquid facere quisquam possimus!",
      title: "test 7",
      isCompleted: true,
      id: "g",
    },
  ],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  editTask: (id, editedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === id ? editedTask : task)),
    })),
  removeAll: () => set((state) => ({ tasks: [] })),
}));
