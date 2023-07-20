import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
   
  props: {
    organizer: String,
    place: String,
    date: Number,
  },

  methods: {
    toLocaleDate(value) {
      let date = new Date(value);
      return date.toLocaleDateString('ru-RU', {year: 'numeric', day: 'numeric', month: 'long'});
    }
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="toLocaleDate(date)">{{ toLocaleDate(date) }}</time>
      </li>
    </ul>`,
});
