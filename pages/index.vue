<template>
  <div class="surface-ground flex items-center justify-center min-h-screen overflow-hidden min-w-screen">
    <div class="flex flex-column items-center justify-center">
      <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
        <div class="w-full bg-white py-8 px-5 sm:px-8" style="border-radius: 53px">
          <div class="text-center mb-5">
            <div class="text-900 text-3xl font-medium mb-8">Welcome to PLNE</div>
          </div>

          <div class="flex flex-wrap gap-3 p-fluid justify-between">
            <FloatLabel>
              <InputNumber id="number-input" v-model="decision" />
              <label for="number-input">Décision</label>
            </FloatLabel>

            <FloatLabel>
              <InputNumber id="number-input" v-model="constrainst" />
              <label for="number-input">Contrainte</label>
            </FloatLabel>
            <Button label="Continuer" outlined class="w-50 p-3 text-xl" @click="submit"></Button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
const decision = ref<number>();
const constrainst = ref<number>();

const submit = () => {

}
</script>
