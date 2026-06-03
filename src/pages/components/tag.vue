<template>
  <t-page class="padding-4">
    <t-card role="mode">
      <t-card-header>Example</t-card-header>
      <t-card-body>
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
        <p class="section-label">Default (fill)</p>
        <div class="tag-row">
          <t-tag :role="role">Tag</t-tag>
        </div>
        <t-divider class="margin-y-4" />
        <p class="section-label">Variants</p>
        <div class="tag-row">
          <t-tag :role="role" variant="fill">Fill</t-tag>
          <t-tag :role="role" variant="outline">Outline</t-tag>
          <t-tag :role="role" variant="text">Text</t-tag>
        </div>
        <t-divider class="margin-y-4" />
        <p class="section-label">Sizes</p>
        <div class="tag-row">
          <t-tag :role="role" size="small">Small</t-tag>
          <t-tag :role="role" size="standard">Standard</t-tag>
          <t-tag :role="role" size="large">Large</t-tag>
        </div>
        <t-divider class="margin-y-4" />
        <p class="section-label">Shapes</p>
        <div class="tag-row">
          <t-tag :role="role" shape="flat">Flat</t-tag>
          <t-tag :role="role" shape="rounded">Rounded</t-tag>
          <t-tag :role="role" shape="pill">Pill</t-tag>
        </div>
        <t-divider class="margin-y-4" />
        <p class="section-label">Inline group</p>
        <div class="tag-row">
          <t-tag role="primary" variant="fill">BTC</t-tag>
          <t-tag role="success" variant="outline">Long</t-tag>
          <t-tag role="warning" variant="text">Pending</t-tag>
          <t-tag role="danger" size="small">−2.4%</t-tag>
        </div>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const role = ref("mode");
</script>

<style scoped>
.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.section-label {
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  opacity: 0.85;
}
</style>
