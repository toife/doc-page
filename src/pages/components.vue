<template>
  <t-page>
    <section class="doc-page padding-x-4 padding-y-4">
      <t-card>
        <t-card-body>
          <p class="eyebrow">COMPONENT LIBRARY</p>
          <h1>All Components</h1>
          <p class="lead">
            Explore the full Toife component set by category and open each demo page directly.
          </p>
        </t-card-body>
      </t-card>

      <section class="groups">
        <t-card v-for="group in componentGroups" :key="group.title">
          <t-card-body>
            <h2>{{ group.title }}</h2>
            <ul>
              <li v-for="item in group.items" :key="item.to">
                <router-link :to="item.to" class="component-link">
                  <span>{{ item.label }}</span>
                  <!-- <code>{{ item.tag }}</code> -->
                </router-link>
              </li>
            </ul>
          </t-card-body>
        </t-card>
      </section>
    </section>
  </t-page>
</template>

<script setup lang="ts">
type ComponentItem = {
  to: string;
  label: string;
  tag: string;
};

type ComponentGroup = {
  title: string;
  items: ComponentItem[];
};

const componentGroups: ComponentGroup[] = [
  {
    title: "Form",
    items: [
      { to: "/components/field", label: "Field", tag: "t-field" },
      { to: "/components/segmented-field", label: "Segmented field", tag: "t-segmented-field" },
      { to: "/components/checkbox", label: "Checkbox", tag: "t-checkbox" },
      { to: "/components/radio", label: "Radio", tag: "t-radio" },
      { to: "/components/switch", label: "Switch", tag: "t-switch" },
      { to: "/components/button", label: "Button", tag: "t-button" },
      { to: "/components/form-group", label: "Form group", tag: "t-form-group" },
      { to: "/components/dropdown", label: "Dropdown", tag: "t-dropdown" },
      { to: "/components/select", label: "Select", tag: "t-select" },
      { to: "/components/slide-range", label: "Slide range", tag: "t-slide-range" },
    ],
  },
  {
    title: "Layout",
    items: [
      { to: "/components/container", label: "Container", tag: "t-container" },
      { to: "/components/layout", label: "Grid", tag: "t-grid" },
      { to: "/components/card", label: "Card", tag: "t-card" },
      { to: "/components/collapse", label: "Collapse", tag: "t-collapse" },
      { to: "/components/divider", label: "Divider", tag: "t-divider" },
      { to: "/components/app", label: "App", tag: "t-app" },
      { to: "/components/cable", label: "Cable", tag: "t-cable" },
      { to: "/components/page", label: "Page", tag: "t-page" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { to: "/components/tabs", label: "Tabs", tag: "t-tabs" },
      { to: "/components/toolbar", label: "Toolbar", tag: "t-toolbar" },
      { to: "/components/route", label: "Route stack", tag: "t-route-wrapper" },
    ],
  },
  {
    title: "Overlays & Feedback",
    items: [
      { to: "/components/modal", label: "Modal", tag: "t-modal" },
      { to: "/components/present", label: "Present", tag: "t-present" },
      { to: "/components/decision-modal", label: "Decision modal", tag: "t-decision-modal" },
      { to: "/components/toast", label: "Toast", tag: "t-toast" },
      { to: "/components/action", label: "Action", tag: "t-action" },
    ],
  },
  {
    title: "Content",
    items: [
      { to: "/components/avatar", label: "Avatar", tag: "t-avatar" },
      { to: "/components/image", label: "Image", tag: "t-image" },
      { to: "/components/skeleton", label: "Skeleton", tag: "t-skeleton" },
      { to: "/components/tag", label: "Tag", tag: "t-tag" },
    ],
  },
  {
    title: "Interaction",
    items: [
      { to: "/components/gesture-indicator", label: "Gesture indicator", tag: "t-gesture-indicator" },
      { to: "/components/refresher", label: "Refresher", tag: "t-refresher" },
    ],
  },
];
</script>

<style scoped>
.doc-page {
  margin: 0 auto;
}

.eyebrow {
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: #555555;
}

h1 {
  margin: 0.3rem 0 0;
  font-size: 2rem;
  line-height: 1.2;
}

.lead {
  margin: 0.75rem 0 0;
  color: #444444;
  line-height: 1.65;
}

.groups {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.9rem;
}

h2 {
  margin: 0;
  font-size: 1.05rem;
}

ul {
  margin: 0.75rem 0 0;
  padding: 0;
  list-style: none;
}

li+li {
  margin-top: 0.4rem;
}

.component-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  text-decoration: none;
  color: #111111;
  border: 1px solid #ececec;
  border-radius: 8px;
  padding: 0.46rem 0.6rem;
  background: #fafafa;
}

.component-link:hover {
  background: #f3f3f3;
}

code {
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 0.74rem;
  color: #3f3f3f;
}
</style>
