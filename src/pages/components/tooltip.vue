<template>
  <t-page class="padding-4">
    <t-card role="mode">
      <t-card-header>Tooltip</t-card-header>
      <t-card-body>
        <p class="demo-lead">
          <code>t-tooltip</code> wraps a trigger and shows content on hover or focus. Put tooltip text in
          the default slot and the activator in <code>#trigger</code>.
        </p>
        <div>
          <t-radio-group v-model="role" direction="horizontal">
            <t-radio value="mode" role="mode">Mode</t-radio>
            <t-radio value="reverse" role="reverse">Reverse</t-radio>
            <t-radio value="primary" role="primary">Primary</t-radio>
            <t-radio value="success" role="success">Success</t-radio>
            <t-radio value="info" role="info">Info</t-radio>
            <t-radio value="warning" role="warning">Warning</t-radio>
            <t-radio value="danger" role="danger">Danger</t-radio>
          </t-radio-group>
        </div>
        <t-divider class="margin-y-4" />
        <section class="demo-section">
          <h3 class="demo-heading">Basic</h3>
          <t-tooltip :role="role">
            Helpful hint text
            <template #trigger>
              <t-button :role="role" variant="outline">Hover me</t-button>
            </template>
          </t-tooltip>
        </section>
        <t-divider class="margin-y-4" />
        <section class="demo-section">
          <h3 class="demo-heading">Placement</h3>
          <div class="placement-grid">
            <t-tooltip placement="top" :role="role">
              Tooltip on top
              <template #trigger>
                <t-button :role="role" variant="outline" size="small">Top</t-button>
              </template>
            </t-tooltip>
            <t-tooltip placement="bottom" :role="role">
              Tooltip on bottom
              <template #trigger>
                <t-button :role="role" variant="outline" size="small">Bottom</t-button>
              </template>
            </t-tooltip>
            <t-tooltip placement="left" :role="role">
              Tooltip on left
              <template #trigger>
                <t-button :role="role" variant="outline" size="small">Left</t-button>
              </template>
            </t-tooltip>
            <t-tooltip placement="right" :role="role">
              Tooltip on right
              <template #trigger>
                <t-button :role="role" variant="outline" size="small">Right</t-button>
              </template>
            </t-tooltip>
          </div>
        </section>
        <t-divider class="margin-y-4" />
        <section class="demo-section">
          <h3 class="demo-heading">Disabled</h3>
          <t-tooltip :role="role" disabled>
            This tooltip will not show
            <template #trigger>
              <t-button :role="role" variant="outline">Disabled trigger</t-button>
            </template>
          </t-tooltip>
        </section>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const role = ref("mode");
</script>

<style scoped>
.demo-lead {
  margin: 0 0 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.88;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.demo-heading {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.75;
}

.placement-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.5rem 1.5rem;
  justify-items: center;
  padding: 2rem 1rem;
}
</style>
