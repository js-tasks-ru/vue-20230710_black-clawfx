<template>
  <UiCalendarView v-slot="{ day }">
    <UiCalendarEvent 
    v-for="meetup in getMeetupsForDay(day.date)"
    tag="a"
    :key="meetup.id" 
    :href="`/meetups/${meetup.id}`"
    >
      {{ meetup.title }}
    </UiCalendarEvent>
  </UiCalendarView>
</template>

<script>
import UiCalendarView from './UiCalendarView.vue';
import UiCalendarEvent from './UiCalendarEvent.vue';
import dayjs from "dayjs";

export default {
  name: 'MeetupsCalendar',

  components: {
    UiCalendarEvent,
    UiCalendarView,
  },

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  computed: {
   // Вычисляемое свойство для получения митапов для конкретного дня
  getMeetupsForDay() {
      return (date) => {
        const formattedDate = dayjs(date).format("YYYY-MM-DD");
      return this.meetups.filter((meetup) => {
        return dayjs(meetup.date).format("YYYY-MM-DD") === formattedDate;
      });
      };
    },
  }
  
};
</script>

<style scoped></style>
