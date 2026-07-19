export default [
  {
    path: "/",
    name: "main-root",
    component: () => import("../layouts/main.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../pages/home.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "document-root",
    component: () => import("../layouts/document.vue"),
    children: [
      {
        path: "/installation",
        name: "installation",
        component: () => import("../pages/installation.vue"),
      },

      {
        path: "/components",
        name: "components-root",
        component: () => import("../pages/components.vue"),
      },

      {
        path: "/components/action",
        name: "components-action",
        component: () => import("../pages/components/action.vue"),
      },

      {
        path: "/components/app",
        name: "components-app",
        component: () => import("../pages/components/app.vue"),
      },

      {
        path: "/components/avatar",
        name: "components-avatar",
        component: () => import("../pages/components/avatar.vue"),
      },

      {
        path: "/components/button",
        name: "components-button",
        component: () => import("../pages/components/button.vue"),
      },

      {
        path: "/components/cable",
        name: "components-cable",
        component: () => import("../pages/components/cable.vue"),
      },

      {
        path: "/components/card",
        name: "components-card",
        component: () => import("../pages/components/card.vue"),
      },

      {
        path: "/components/checkbox",
        name: "components-checkbox",
        component: () => import("../pages/components/checkbox.vue"),
      },

      {
        path: "/components/collapse",
        name: "components-collapse",
        component: () => import("../pages/components/collapse.vue"),
      },

      {
        path: "/components/container",
        name: "components-container",
        component: () => import("../pages/components/container.vue"),
      },

      {
        path: "/components/layout",
        name: "components-layout",
        component: () => import("../pages/components/layout.vue"),
      },

      {
        path: "/components/decision-modal",
        name: "components-decision-modal",
        component: () => import("../pages/components/decision-modal.vue"),
      },

      {
        path: "/components/divider",
        name: "components-divider",
        component: () => import("../pages/components/divider.vue"),
      },

      {
        path: "/components/dropdown",
        name: "components-dropdown",
        component: () => import("../pages/components/dropdown.vue"),
      },

      {
        path: "/components/field",
        name: "components-field",
        component: () => import("../pages/components/field.vue"),
      },

      {
        path: "/components/form-group",
        name: "components-form-group",
        component: () => import("../pages/components/form-group.vue"),
      },

      {
        path: "/components/gesture-indicator",
        name: "components-gesture-indicator",
        component: () => import("../pages/components/gesture-indicator.vue"),
      },

      {
        path: "/components/image",
        name: "components-image",
        component: () => import("../pages/components/image.vue"),
      },

      {
        path: "/components/modal",
        name: "components-modal",
        component: () => import("../pages/components/modal.vue"),
      },

      {
        path: "/components/page",
        name: "components-page",
        component: () => import("../pages/components/page.vue"),
      },

      {
        path: "/components/present",
        name: "components-present",
        component: () => import("../pages/components/present.vue"),
      },

      {
        path: "/components/radio",
        name: "components-radio",
        component: () => import("../pages/components/radio.vue"),
      },

      {
        path: "/components/refresher",
        name: "components-refresher",
        component: () => import("../pages/components/refresher.vue"),
      },

      {
        path: "/components/route",
        name: "components-route",
        component: () => import("../pages/components/route.vue"),
      },

      {
        path: "/components/segmented-field",
        name: "components-segmented-field",
        component: () => import("../pages/components/segmented-field.vue"),
      },

      {
        path: "/components/select",
        name: "components-select",
        component: () => import("../pages/components/select.vue"),
      },

      {
        path: "/components/skeleton",
        name: "components-skeleton",
        component: () => import("../pages/components/skeleton.vue"),
      },

      {
        path: "/components/slide-range",
        name: "components-slide-range",
        component: () => import("../pages/components/slide-range.vue"),
      },

      {
        path: "/components/switch",
        name: "components-switch",
        component: () => import("../pages/components/switch.vue"),
      },

      {
        path: "/components/tabs",
        name: "components-tabs",
        component: () => import("../pages/components/tabs.vue"),
      },

      {
        path: "/components/tag",
        name: "components-tag",
        component: () => import("../pages/components/tag.vue"),
      },

      {
        path: "/components/toast",
        name: "components-toast",
        component: () => import("../pages/components/toast.vue"),
      },

      {
        path: "/components/tooltip",
        name: "components-tooltip",
        component: () => import("../pages/components/tooltip.vue"),
      },

      {
        path: "/components/toolbar",
        name: "components-toolbar",
        component: () => import("../pages/components/toolbar.vue"),
      },
    ],
  },
];
