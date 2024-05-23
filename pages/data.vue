<template>
  <div class="surface-ground flex items-center justify-center min-h-screen overflow-hidden min-w-screen">
    <div class="flex flex-column items-center justify-center">
      <div
          style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
        <div class="w-full bg-white py-8 px-5 sm:px-8" style="border-radius: 53px">
          <div class="text-center mb-5">
            <div class="text-900 text-3xl font-medium mb-8">Forme canonique</div>
          </div>

          <div class="flex gap-3 p-fluid justify-between items-center">
            <label :class="'w-1/'+(decision+2)" >Fonction objéctif :</label>
            <Dropdown v-model="goal" :options="goalChoices" optionLabel="name" :class="'w-1/'+(decision+2)" />

            <div v-for="(item, index) in Array.from({ length: decision })" :key="index"
                 class="flex gap-3 justify-between" :class="'w-1/'+(decision+2)" >
              <InputGroup class="w-2/3">
                <InputNumber class="w-1/2"/>
                <InputGroupAddon class="w-1/2">X<sub>{{ index + 1 }}</sub></InputGroupAddon>
              </InputGroup>
              <div v-if="index < decision - 1" class="w-1/3 text-center flex items-center justify-center">+</div>
            </div>
          </div>
          <p class="text-center mt-8 mb-3">Contrainte :</p>
          <div
              v-for="(constrainstItem, constrainstIndex) in Array.from({ length: constrainst })"
              class="flex gap-3 w-full justify-between items-center mb-4"
              :key="'c'+constrainstIndex"
          >
            <div
                v-for="(item, index) in Array.from({ length: decision })"
                :key="'c'+constrainstIndex+'d'+index"
                class="flex justify-between gap-3"
                :class="'w-'+((decision*3)-1)+'/' + ((decision*3)+1)"
            >
              <InputGroup class="w-2/3">
                <InputNumber class="w-1/2"/>
                <InputGroupAddon class="w-1/2">X<sub>{{ index + 1 }}</sub></InputGroupAddon>
              </InputGroup>
              <div v-if="index < decision - 1" class="w-1/3 text-center flex items-center justify-center">+</div>
              <Dropdown v-else class="w-1/3" v-model="contraintOperator[constrainstIndex]" :options="operatorChoices" optionLabel="name" />
            </div>
            <InputNumber class="ms-5" :class="'w-1/'+((decision*3)+1)" />
          </div>
          <p class="text-center mb-8">
            <span v-for="(decisionItem, decisionIndex) in Array.from({ length: decision })" :key="'dcp'+decisionIndex">
              X<sub>{{ decisionIndex + 1 }}</sub>
              <span v-if="decisionIndex < decision - 1">,</span>
            </span>
            <span> ≥ 0</span>
          </p>

          <div class="flex flex-wrap gap-3 justify-around mt-5">
            <NuxtLink to="/">
              <Button icon="pi pi-arrow-left" outlined class="text-xl h-full" @click="submit"></Button>
            </NuxtLink>
            <Button label="Continuer" outlined class="w-50 p-3 text-xl" @click="submit"></Button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {GoalEnum, OperatorEnum} from "@models/plne.model";

const router = useRouter()
const plneStore = usePLNEStore()

const {goal, decision, constrainst, contraintOperator} = storeToRefs(plneStore)
const goalChoices = [
  {name: 'Maximiser', value: GoalEnum.MAXIMIZE},
  {name: 'Minimiser', value: GoalEnum.MINIMIZE}
]

const operatorChoices = [
  {name: '≤', value: OperatorEnum.LOWER},
  {name: '≥', value: OperatorEnum.GREATER},
  {name: '=', value: OperatorEnum.EQUAL}
]

const submit = () => {
  router.push('/data')
}

onMounted(() => {
  plneStore.setContrainstOperator(Array.from({ length: constrainst }).map(() => OperatorEnum.LOWER))
})
</script>
