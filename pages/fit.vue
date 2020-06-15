<template>
  <div class="container">
    <div class="max-w-7xl pt-12 md:pt-0">
      <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
    </div>
    <div class="flex flex-col">
      <TeamSummary />
      <TeamTable />
      <AddRepsForm />
    </div>
  </div>
</template>

<script>
import AddRepsForm from '~/components/AddRepsForm'
import TeamTable from '~/components/TeamTable'
import TeamSummary from '~/components/TeamSummary'

export default {
  components: {
    AddRepsForm,
    TeamTable,
    TeamSummary
  },
  data() {
    return {
      group: {},
      members: [],
      state: 'LOADING'
    }
  },
  computed: {
    groupTargetReps() {
      return 1000
    }
  },
  created() {
    fetch('/api/dashboard')
      .then((res) => res.json())
      .then((data) => {
        console.log({ data })
        this.state = 'DATA_LOADED'
        this.group = data.group
        this.members = data.members
      })
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
