import Vue from "vue";
import VueRouter from "vue-router";
import student from "@/views/student/assignment.vue";
import teacher from "@/views/teacher/assignment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/tests/teacher",
    name: "teacher",
    component: teacher
  },
  {
    path: "/tests/student",
    name: "student",
    component: student
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// TODO: hook before each. If the user is a student grant access to routes starting with student/. If a teacher,
// grant access to those starting with teacher/. Else, if the user is logged in grant access to those under shared/.
// otherwise, grant access only to site.vue.

// TODO: move app-bar and app-drawer out of individual views and into app.
// it can be imported by each view and they can specify its mode, i.e. student or teacher.

export default router;
