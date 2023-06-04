<script>
import { ref } from "vue";
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";
import { useTasks } from "./stores/Tasks";

export default {
  components: { TaskForm, TaskList },
  setup() {
    const activeView = ref("All");
    const taskStore = useTasks();

    return { activeView, taskStore };
  },
};
</script>

<template>
  <main>
    <div class="container">
      <header>
        <img src="./assets/Pinialogo.png" alt="pinia logo" />
        <strong>Pinia Tasks</strong>
      </header>

      <div class="task-form">
        <TaskForm />
      </div>
    </div>
  </main>

  <div>
    <div class="container">
      <div class="task-body">
        <div class="actions">
          <button @click="activeView = 'All'">All Tasks</button>
          <button @click="activeView = 'Fav'">Fav Tasks</button>
        </div>

        <template v-if="activeView === 'All'">
          <p>You have {{ taskStore.tasks.length }} tasks left to do</p>
          <div v-for="task in taskStore.tasks" :key="task.id">
            <TaskList :task="task" />
          </div>
        </template>
        <template v-if="activeView === 'Fav'">
          <p>You have {{ taskStore.getFav.length }} favorite tasks left to do</p>
          <div v-for="task in taskStore.getFav" :key="task.id">
            <TaskList :task="task" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
