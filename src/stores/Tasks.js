import { defineStore } from "pinia";

export const useTasks = defineStore("tasks", {
  state: () => ({
    tasks: [
      { id: 1, title: "Drink coffee", isFav: false },
      { id: 2, title: "Make a lunch", isFav: true },
    ],
    editTask: { id: null, title: "", isFav: false },
  }),
  getters: {
    getFav() {
      return this.tasks.filter((t) => t.isFav);
    },
    getEditTasks() {
      return this.editTask;
    },
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    removeTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    changeFav(id) {
      let task = this.tasks.find((task) => task.id === id);
      task.isFav = !task.isFav;
    },
  },
});
