<template>
  <transition name="fade" appear>
    <div v-if="visible" :style="{ color: color, background: background }" :class="'ui-alert '+ tclass+' '+position">      
      <div class="ui-alert-title">{{ title }}</div>
      <div class="ui-alert-message">{{ trimMessage }}</div>
      <br><span class="ui-alert-delai"> Close in {{ time }} second(s) </span>
      <button class="ui-button-clear" @click="toggle">x</button>          
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Alert',
  props: {
    title: {
      type: String,
      default: 'Hi, toast'
    },
    message: {
      type: String,
      default:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    delai: {
      type: String,
      default: '10'
    },
    position: {
      type: String,
      default: 'top-center'
    },
    background: {
      type: String,
      default: '#F7F7F7'
    },
    color: {
      type: String,
      default: '#555'
    },
    tclass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: true,
      timer: '',
      time: 0
    }
  },
  computed: {
    trimMessage() {
      console.log('message length: ' + this.message.length)
      if (this.message.length > 160) {
        return this.message.substring(0, 160) + '...'
      }
      return this.message
    }
  },
  mounted() {
    this.time = this.delai

    this.timer = setInterval(() => {
      this.time--
      if (this.time == 0) {
        this.visible = false
        this.time = 0
      }
    }, 1000)
  },
  destroyed() {
    clearInterval(this.timer)
    this.time = 0
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    }
  }
}
</script>


<style scoped>
.ui-alert {
  z-index: 100;
  width: 400px;
  min-height: 40px;
  position: absolute;
  padding: 10px;
  border-radius: 0.2em;
  /* background: coral; */
  margin: 20px auto;
  position: absolute;
  overflow: hidden;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */
}

/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
@media screen and (max-width: 700px) {
  .ui-alert {
    width: 90%;
    margin: 10px auto;
  }
}
@media screen and (min-width: 701px) {
  .ui-alert {
    width: 400px;
    margin: 10px auto;
  }
}
.ui-button-clear {
  content: 'x';
  color: #fff;
  width: 20px;
  height: 20px;
  vertical-align: baseline;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  transition: background 0.3s;
  border: none;
  padding-bottom: 2px;
}

.ui-button-clear:focus {
  outline: none;
}

.ui-button-clear:hover {
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.ui-alert .ui-button-clear {
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px 5px 5px 5px;
}

.ui-alert-title {
  margin-bottom: 5px;
  margin-right: 5px;
  /* color: #fff; */
}
.ui-alert-message {
  text-align: justify;
  font-size: 14px;
}
.ui-alert-delai {
  font-size: 12px;
}
.ui-alert.top-center {
  top: 0;
  left: 0;
  right: 0;
}
.ui-alert.top-right {
  margin-right: 10px;
  top: 0;
  right: 0;
}
.ui-alert.top-left {
  margin-left: 10px;
  top: 0;
  left: 0;
}
.ui-alert.bottom-center {
  bottom: 0;
  left: 0;
  right: 0;
}
.ui-alert.bottom-right {
  margin-right: 10px;
  right: 0;
  bottom: 0;
}
.ui-alert.bottom-left {
  margin-left: 10px;
  left: 0;
  bottom: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
