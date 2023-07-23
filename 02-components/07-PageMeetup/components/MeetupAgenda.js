import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',

  components: {MeetupAgendaItem},

  props: {
   agenda: Array,
  },

  template: `
    <ul class="agenda">
      <li class="agenda__item" v-for="(agendaItem,index) in agenda">
        <!-- meetup agenda item -->
        <MeetupAgendaItem :agenda-item="agenda[index]" />
      </li>
    </ul>`,
});
