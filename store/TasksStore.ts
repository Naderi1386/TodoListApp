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
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  editTask: (id, editedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === id ? editedTask : task)),
    })),
  removeAll: () => set((state) => ({ tasks: [] })),
}));
