<template>
  <div class="task">
    <h3>
      {{ task.title }}
    </h3>

    <div class="icons">
      <box-icon
        type="solid"
        name="trash-alt"
        @click="taskStore.removeTask(task.id)"
      ></box-icon>
      <box-icon
        type="solid"
        name="pencil"
        @click="taskStore.$patch({
            editTask: task
        })"
      ></box-icon>
      <box-icon
        :class="{ active: task.isFav }"
        type="solid"
        name="heart"
        @click="taskStore.changeFav(task.id)"
      ></box-icon>
    </div>
  </div>
</template>

<script>
import "boxicons";
import { useTasks } from "../stores/Tasks";
export default {
  props: ["task"],
  setup() {
    const taskStore = useTasks();
    return { taskStore };
  },
};
</script>
