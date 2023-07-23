import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import MeetupView from './MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  data() {
     return {
        isLoading: true,
        error: null,
        meetupData: null,
     }
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    }
  },

  methods: {
    async fetchData() {
      try {
        this.isLoading = true; 
        this.meetupData = await fetchMeetupById(this.meetupId);
        this.isLoading = false;
        this.error = null;
      } catch (err) {
        this.error = err.message;
        this.isLoading = false;
      }
    },
  },

  async mounted() {
    await this.fetchData();
  },


  watch: {
    meetupId: {
      immediate: true,
      deep: true,
      handler() {
         this.fetchData()
      }
    }
  },


  template: `
    <div class="page-meetup">
    <UiContainer v-if="isLoading">
        <UiAlert>Загрузка...</UiAlert>
    </UiContainer>
    <UiContainer v-else-if="error">
        <UiAlert>{{ error }}</UiAlert>
      </UiContainer>
      <!-- meetup view -->
      <MeetupView v-else :meetup="meetupData"/>
    </div>`,
});
