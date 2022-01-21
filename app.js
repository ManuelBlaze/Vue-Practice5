// create Vue app
const app = Vue.createApp({
  data() {
    return {
      task: "",
      tasks: [],
      isTasksVisible: true,
    };
  },
  computed: {
    buttonLabel() {
      return this.isTasksVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      // we parse the current task
      const parsedTask = this.task.trim();

      // check if task has at least 1 char
      if (!parsedTask) {
        alert("You need to add at least 1 character!");
        return;
      }

      // add the task to the list and clean input
      this.tasks.push(parsedTask);
      this.task = "";
    },
    changeVisibility() {
      this.isTasksVisible = !this.isTasksVisible;
    },
  },
});

// mount app in DOM
app.mount("#assignment");
