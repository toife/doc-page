<template>
  <div class="document-layout">
    <div class="document-shell">
      <aside class="document-sidebar" aria-label="Documentation">
        <nav class="document-sidebar-nav">
          <router-link v-slot="{ href, navigate, isExactActive }" custom to="/">
            <a
              :href="href"
              class="document-sidebar-link"
              :class="{ 'router-link-active': isExactActive }"
              @click="navigate"
            >
              Home
            </a>
          </router-link>

          <router-link v-slot="{ href, navigate, isExactActive }" custom to="/installation">
            <a
              :href="href"
              class="document-sidebar-link"
              :class="{ 'router-link-active': isExactActive }"
              @click="navigate"
            >
              Installation
            </a>
          </router-link>

          <router-link v-slot="{ href, navigate, isExactActive }" custom to="/components">
            <a
              :href="href"
              class="document-sidebar-link"
              :class="{ 'router-link-active': isExactActive }"
              @click="navigate"
            >
              Components
            </a>
          </router-link>

          <div
            v-for="group in componentNavGroups"
            :key="group.title"
            class="document-sidebar-group"
          >
            <strong class="document-sidebar-group-title">
              <span class="document-sidebar-group-icon" aria-hidden="true">
                <svg
                  v-if="group.icon === 'form'"
                  class="document-sidebar-group-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                </svg>
                <svg
                  v-else-if="group.icon === 'layout'"
                  class="document-sidebar-group-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                <svg
                  v-else-if="group.icon === 'navigation'"
                  class="document-sidebar-group-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <svg
                  v-else-if="group.icon === 'overlay'"
                  class="document-sidebar-group-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <svg
                  v-else-if="group.icon === 'content'"
                  class="document-sidebar-group-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <svg
                  v-else-if="group.icon === 'interaction'"
                  class="document-sidebar-group-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </span>
              {{ group.title }}
            </strong>
            <router-link
              v-for="item in group.items"
              :key="item.to"
              v-slot="{ href, navigate, isActive }"
              custom
              :to="item.to"
            >
              <a
                :href="href"
                class="document-sidebar-link"
                :class="{ 'router-link-active': isActive }"
                @click="navigate"
              >
                <span class="document-sidebar-link-label">{{ item.label }}</span>
                <code class="document-sidebar-link-tag">{{ item.tag }}</code>
              </a>
            </router-link>
          </div>
        </nav>
      </aside>

      <main class="document-main">
        <t-route-navigator variant="swipe" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RouteNavigatorTransformState } from "@toife/vue";
type ComponentNavItem = { to: string; label: string; tag: string };

type SidebarNavGroupIcon = "form" | "layout" | "navigation" | "overlay" | "content" | "interaction";

type ComponentNavGroup = { title: string; icon: SidebarNavGroupIcon; items: ComponentNavItem[] };

/** Sidebar: grouped component demo routes (prefix t- matches createToife). */
const componentNavGroups: ComponentNavGroup[] = [
  {
    title: "Form",
    icon: "form",
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
    icon: "layout",
    items: [
      { to: "/components/container", label: "Container", tag: "t-container" },
      { to: "/components/layout", label: "Layout", tag: "t-grid, t-flex, t-cell" },
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
    icon: "navigation",
    items: [
      { to: "/components/tabs", label: "Tabs", tag: "t-tabs" },
      { to: "/components/toolbar", label: "Toolbar", tag: "t-toolbar" },
      { to: "/components/route", label: "Route stack", tag: "t-route-wrapper" },
    ],
  },
  {
    title: "Overlays & feedback",
    icon: "overlay",
    items: [
      { to: "/components/modal", label: "Modal", tag: "t-modal" },
      { to: "/components/present", label: "Present", tag: "t-present" },
      { to: "/components/decision-modal", label: "Decision modal", tag: "t-decision-modal" },
      { to: "/components/toast", label: "Toast", tag: "t-toast" },
      { to: "/components/tooltip", label: "Tooltip", tag: "t-tooltip" },
      { to: "/components/action", label: "Action", tag: "t-action" },
    ],
  },
  {
    title: "Content",
    icon: "content",
    items: [
      { to: "/components/avatar", label: "Avatar", tag: "t-avatar" },
      { to: "/components/image", label: "Image", tag: "t-image" },
      { to: "/components/skeleton", label: "Skeleton", tag: "t-skeleton" },
      { to: "/components/tag", label: "Tag", tag: "t-tag" },
    ],
  },
  {
    title: "Interaction",
    icon: "interaction",
    items: [
      { to: "/components/gesture-indicator", label: "Gesture indicator", tag: "t-gesture-indicator" },
      { to: "/components/refresher", label: "Refresher", tag: "t-refresher" },
    ],
  },
];
</script>

<style scoped lang="scss">
.document-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}

.document-header-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.document-nav-link {
  color: inherit;
  text-decoration: none;
  opacity: 0.85;

  &:hover,
  &.router-link-active {
    opacity: 1;
  }
}

.document-shell {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  padding-top: calc(48px + var(--t-safe-area-top));
}

.document-sidebar {
  flex: 0 0 220px;
  max-width: 40vw;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  overflow: auto;
  padding: 0.75rem 0;
}

.document-sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 0.75rem;
}

.document-sidebar-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 1rem;

  &:first-of-type {
    margin-top: 0.75rem;
  }
}

.document-sidebar-group-title {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
  padding: 0.35rem 0.75rem 0.15rem;
  line-height: 1.2;
}

.document-sidebar-group-icon {
  display: inline-flex;
  flex-shrink: 0;
  opacity: 0.72;
  color: rgba(0, 0, 0, 0.55);
}

.document-sidebar-group-svg {
  width: 14px;
  height: 14px;
  display: block;
}

.document-sidebar-link {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
  opacity: 0.9;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &.router-link-active {
    font-weight: 600;
    background: rgba(0, 0, 0, 0.07);
  }
}

.document-sidebar-link-label {
  line-height: 1.2;
}

.document-sidebar-link-tag {
  font-family: ui-monospace, monospace;
  font-size: 0.7rem;
  font-weight: 500;
  opacity: 0.72;
  line-height: 1.2;
}

.document-main {
  flex: 1;
  min-width: 0;
  position: relative;
}
</style>
