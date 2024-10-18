const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Index.vue") },
      { path: "/signin", component: () => import("pages/SignIn.vue") },
      { path: "/create", component: () => import("pages/Create.vue") },
      { path: "/edit/:id", component: () => import("pages/Edit.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
