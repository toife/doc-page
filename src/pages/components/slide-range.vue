<template>
  <t-page class="padding-4">
    <t-card role="mode">
      <t-card-header>Slide range</t-card-header>
      <t-card-body>
        <p class="demo-lead">
          <code>t-slide-range</code> là slider có các mốc cố định theo <code>step</code> từ
          <code>min</code> đến <code>max</code>. <code>v-model</code> là giá trị số (hoặc chuỗi).
        </p>
        <div>
          <t-radio-group v-model="role" direction="horizontal">
            <t-radio value="mode" role="mode">Mode</t-radio>
            <t-radio value="primary" role="primary">Primary</t-radio>
            <t-radio value="success" role="success">Success</t-radio>
            <t-radio value="danger" role="danger">Danger</t-radio>
          </t-radio-group>
        </div>
        <t-divider class="margin-y-4" />
        <t-slide-range
          v-model="leverage"
          :role="role"
          :min="0"
          :max="100"
          :step="25"
          unit="%"
        />
        <p class="demo-hint">Value: <code>{{ leverage }}</code></p>
        <t-divider class="margin-y-4" />
        <p class="section-label">Disabled</p>
        <t-slide-range
          v-model="leverage"
          :role="role"
          :min="0"
          :max="100"
          :step="25"
          unit="%"
          disabled
        />
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const role = ref("mode");
const leverage = ref(50);
</script>

<style scoped>
.demo-lead {
  margin: 0 0 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.88;
}

.demo-hint {
  margin: 0.75rem 0 0;
  font-size: 0.85rem;
  opacity: 0.85;
}

.section-label {
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  opacity: 0.85;
}
</style>
