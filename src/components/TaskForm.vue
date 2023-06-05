<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to ..." v-model="newTask" />
    <button type="submit">{{ editTask && editTask.id != null ? "Edit" : "Add" }}</button>
  </form>
</template>

<script>
import { ref, watch } from "vue";
import { useTasks } from "../stores/Tasks";

export default {
  setup() {
    const taskStore = useTasks();
    const newTask = ref("");
    const editTask = ref(null);

    const handleSubmit = () => {
      let message = newTask.value.trim();
      if (message) {
        if (editTask.value && editTask.value.id) {
          editTask.value.title = newTask.value;

          editTask.value = null;


          console.log(taskStore.tasks);
        } else {
          taskStore.addTask({
            id: Math.floor(Math.random() * 10000),
            title: message,
            isFav: false,
          });
        }
      }
      newTask.value = "";
    };

    taskStore.$subscribe((state) => {
      if (state.payload) {
        editTask.value = state.payload.editTask && state.payload.editTask;
        newTask.value = state.payload.editTask && state.payload.editTask.title;
      }
    });

    return { taskStore, newTask, editTask, handleSubmit };
  },
};
</script>
