<template>
  <v-container fluid class="fpcode-wrap">
    <h2><span>1</span>输入</h2>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field v-model="mpass" solo label="记忆密码" :type="seeMpass ? 'text' : 'password'" solo-inverted :append-icon="seeMpass ? 'visibility' : 'visibility_off'" :append-icon-cb="() => seeMpass = !seeMpass"></v-text-field>
      </v-flex>
      <v-icon color="blue dark-2" large style="width: 100%;">add</v-icon>
      <v-flex xs12>
        <v-text-field v-model="key" solo label="区分代号" type="text" solo-inverted></v-text-field>
      </v-flex>
    </v-layout>

    <h2><span>2</span>获取</h2>
    <v-layout row wrap>
      <v-flex xs10>
        <v-text-field :value="gpassText" solo label="最终密码" :type="seeGpass ? 'text' : 'password'" solo-inverted :append-icon="seeGpass ? 'visibility' : 'visibility_off'" :append-icon-cb="() => seeGpass = !seeGpass" readonly :class="{'copy-result': !!copyResult}"></v-text-field>
      </v-flex>
      <v-flex xs2 class="copy">
        <v-btn color="success" v-clipboard:copy="gpass" v-clipboard:success="onCliboardSuccess" v-clipboard:error="onCliboardError">复制</v-btn>
      </v-flex>
    </v-layout>
    <div class="notice">
      <ul>
        <li>记忆密码：选择一个与个人信息无关的密码，防止社会工程学破解</li>
        <li>区分代号：用于区别不同用途密码的简短代号，如淘宝账号可用“taobao”或“tb”等。</li>
      </ul>
    </div>
  </v-container>
</template>

<script>
import fpCode from 'fpcode';

export default {
  name: 'FpCode',
  data () {
    return {
      mpass: '',
      seeMpass: false,
      key: '',
      seeGpass: false,
      copyResult: ''
    }
  },
  methods: {
    onCliboardSuccess () {
      this.copyResult = '复制成功';
      this.seeGpass = true;
      setTimeout(() => {
        this.copyResult = '';
        this.seeGpass = false;
      }, 1000)
    },
    onCliboardError () {
      this.copyResult = '复制失败,可手动选中复制';
      this.seeGpass = true;
      setTimeout(() => {
        this.copyResult = '';
        this.seeGpass = false;
      }, 1000)      
    }
  },
  computed: {
    gpassText () {
      return this.copyResult || this.gpass
    },
    gpass () {
      return fpCode(this.mpass, this.key, 16) || ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
.fpcode-wrap {
  h2 {
    font-size: 22px;
    color: #0099CC;
    margin: 30px 0 12px;
    span {
      font-size: 22px;
      color: #FFF;
      margin-right: 7px;
      background-color: #0099CC;
      width: 33px;
      height: 33px;
      display: inline-block;
      text-align: center; 
    }
  }

  .input {
    label {
      float: none;
      display: inline;
      padding-right: 5px; 
    }
    input {
      font-size: 14px;
      height: 18px;
      padding: 5px;
      margin-left: 5px; 
    }
  }
  .copy {
    button {
      margin: 0;
      min-width: unset;
      height: 100%;
      width: 100%;
    }
  }

  .copy-result {
    input {
      text-align:  center;
    }
  }

  .notice {
    color: #aba3a3;
    margin-top: 20px;
    li {
      list-style-position: inside;
    }
  }
}

button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
