<template>
  <div class="calendar-page">
    <a href="https://antoniandre.github.io/vue-cal/" class="text-center p-5"><h3>Vue cal </h3></a>
    <calendar-schedule/>
  </div>
</template>
<script>
import CalendarSchedule from "@/components/Calendar/CalendarSchedule";

export default {
  name: "calendar-page",
  components: {CalendarSchedule},
}
</script>


