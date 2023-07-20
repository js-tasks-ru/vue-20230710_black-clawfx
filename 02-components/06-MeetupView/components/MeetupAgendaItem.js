import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true,
    }
  },

  computed: {
    selectedIcon() {
      return `/src/assets/icons/icon-${agendaItemIcons[this.agendaItem.type]}.svg`
    },

    selectedTitle() {
      return this.agendaItem.title || agendaItemDefaultTitles[this.agendaItem.type];
    }
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="\`\${selectedIcon}\`" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ selectedTitle }}</h3>
        <p class="agenda-item__talk" v-if="agendaItem.type === 'talk'">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description !== null">{{ this.agendaItem.description }}</p>
      </div>
    </div>`,
});
