<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to ..." v-model="newTask" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useTasks } from "../stores/Tasks";

export default {
  setup() {
    const taskStore = useTasks();
    const newTask = ref("");

    const handleSubmit = () => {
      let message = newTask.value.trim();
      if (message) {
        taskStore.addTask({
          isFav: false,
          title: message,
          id: Math.floor(Math.random() * 10000),
        });
      }
      newTask.value = "";
    };

    return { taskStore, newTask, handleSubmit };
  },
};
</script>
