<template>
  <div>
    <main>
      <div class="canvas-fluid">
        <div class="row">
          <!-- dropdown and buttons -->
          <section class="col-sm-6" style="min-height: 300px">
            <!-- DROPDOWN  -->
            <div>
              <h2>Dropdown Button</h2>
              <div class="dropdown is-active">
                <div class="dropdown-trigger">
                  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Dropdown button</span>
                    <span class="icon is-small"><i aria-hidden="true"/></span>
                  </button>
                </div>
                <div id="dropdown-menu" class="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <a href="#" class="dropdown-item">Dropdown item</a>
                    <a class="dropdown-item">Other dropdown item</a>
                    <a href="#" class="dropdown-item is-active">Active dropdown item</a>
                    <a href="#" class="dropdown-item">Other dropdown item</a>
                    <hr class="dropdown-divider">
                    <a href="#" class="dropdown-item">With a divider</a>
                  </div>
                </div>
              </div>
              <div class="dropdown">
                <div class="dropdown-trigger">
                  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                    <span>Content</span>
                    <span class="icon is-small"><i class="fas fa-angle-down" aria-hidden="true"/></span>
                  </button>
                </div>
                <div id="dropdown-menu2" class="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <div class="dropdown-item">
                      <p>You can insert <strong>any type of content</strong> within the dropdownmenu.</p>
                    </div>
                    <hr class="dropdown-divider">
                    <div class="dropdown-item">
                      <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                    </div>
                    <hr class="dropdown-divider">
                    <a href="#" class="dropdown-item">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- BUTTON -->
            <section>
              <h2>Buttons</h2>
              <div class="group-button">
                <button class="button">Default</button>
                <button class="button btn-primary-light">Primary light</button>
                <button class="button btn-primary">Primary</button>
                <button class="button btn-success">success</button>
                <button class="button btn-success-light">success light</button>
                <button class="button btn-danger">danger</button>
                <button class="button btn-danger-light">danger light</button>
                <button class="button btn-warning">warning</button>
                <button class="button btn-warning-light">warning light</button>
                <button class="button btn-info">info</button>
                <button class="button btn-info-light">info light</button>
              </div>
              <div class="group-button">
                <button class="button rounded">Default</button>
                <button class="button btn-primary-light rounded">Primary light</button>
                <button class="button btn-primary rounded">Primary</button>
                <button class="button btn-success rounded">success</button>
                <button class="button btn-success-light rounded">success light</button>
                <button class="button btn-danger rounded">danger</button>
                <button class="button btn-danger-light rounded">danger light</button>
                <button class="button btn-warning rounded">warning</button>
                <button class="button btn-warning-light rounded">warning light</button>
                <button class="button btn-info rounded">info</button>
                <button class="button btn-info-light rounded">info light</button>
              </div>
            </section>
          </section>
          <!-- field input  -->
          <section class="col-sm-6">
            <h2>Meterial design field</h2>
            <label class="field a-field a-field_a1 page__field">
              <input class="field__input" placeholder="e.g. Stanislav" required>
              <span class="field__label-wrap"><span class="field__label">First name</span></span>
            </label>
            <label class="field a-field a-field_a2 page__field">
              <input class="field__input" placeholder="e.g. Melnikov" required>
              <span class="field__label-wrap"><span class="field__label">Last name</span></span>
            </label>
            <label class="field a-field a-field_a3 page__field">
              <input class="field__input" placeholder="e.g. melnik909@ya.ru" required>
              <span class="field__label-wrap"><span class="field__label">E-mail</span></span>
            </label>
            <label class="field a-field a-field_a2 page__field">
              <input class="field__input field_input_border" placeholder="e.g. Melnikov" required>
              <span class="field__label-wrap"><span class="field__label">Last name</span></span>
            </label>
            <!-- textbox -->
            <section>
              <h2>Basics input </h2>
              <input type="email" class="textbox" placeholder="E-mail">
              <input type="password" class="textbox rounded" placeholder="password">
            </section>
            <!-- INPUT TAG -->
            <section>
              <h2>Input tag</h2>
              <div class="input-tag">
                <div class="input-tag-content"/>
                <input id="tag_input" type="text" class="tag_input" value="">
              </div>
              <div class="col-sm-12">
                <div class="group-button inline right">
                  <button id="btn_get_tags" class="button">get tags</button>
                </div>
                <h5>List tags</h5>
                <ul id="list_tag" class="col-sm-12"/>
              </div>
            </section>
          </section>
          <hr>
          <!-- Checkboxes -->
          <section class="col-sm-3">
            <h2>Checkboxes</h2>
            <div class="group-checkbox">
              <input id="ckh" type="checkbox" checked><label for="ckh">Default</label><br>
              <input id="radio-one" type="checkbox" name="demo1" value="one" class="form-checkbox" checked><label for="checkbox-one">Checkbox1</label><br>
              <input id="radio-two" type="checkbox" name="demo2" value="two" class="form-checkbox"><label for="checkbox-two">Checkbox2</label><br>
              <input id="radio-three" type="checkbox" name="demo3" disabled value="three" class="form-checkbox"><label for="checkbox-three">Disabled</label><br><br>
            </div>
            <label class="control control--checkbox">First checkbox
              <input type="checkbox" checked="checked">
              <div class="control__indicator"/>
            </label>
            <label class="control control--checkbox">Second checkbox
              <input type="checkbox">
              <div class="control__indicator"/>
            </label>
            <label class="control control--checkbox">Disabled
              <input type="checkbox" disabled="disabled">
              <div class="control__indicator"/>
            </label>
            <label class="control control--checkbox">Disabled & checked
              <input type="checkbox" disabled="disabled" checked="checked">
              <div class="control__indicator"/>
            </label>
          </section>
          <!-- Radio buttons -->
          <section class="col-sm-3">
            <h2>Radio buttons</h2>
            <div class="group-radio">
              <input id="radio-one" type="radio" name="demo" value="one" class="form-radio" checked><label for="radio-one">Radio</label><br>
              <input id="radio-two" type="radio" name="demo" value="two" class="form-radio"><label for="radio-one">Radio</label><br><br>
            </div>
            <label class="control control--radio">First radio
              <input type="radio" name="radio" checked="checked">
              <div class="control__indicator"/>
            </label>
            <label class="control control--radio">Second radio
              <input type="radio" name="radio">
              <div class="control__indicator"/>
            </label>
            <label class="control control--radio">Disabled
              <input type="radio" name="radio2" disabled="disabled">
              <div class="control__indicator"/>
            </label>
            <label class="control control--radio">Disabled & checked
              <input type="radio" name="radio2" disabled="disabled" checked="checked">
              <div class="control__indicator"/>
            </label>
          </section>
          <!-- Select boxes -->
          <section class="col-sm-6">
            <h2>Select boxes</h2>
            <div class="select">
              <select>
                <option>First select</option>
                <option>Option</option>
                <option>Option</option>
              </select>
              <div class="select__arrow"/>
            </div>
            <div class="select">
              <select>
                <option>Second select</option>
                <option>Option</option>
                <option>Option</option>
              </select>
              <div class="select__arrow"/>
            </div>
            <div class="select">
              <select disabled="disabled">
                <option>Disabled</option>
                <option>Option</option>
                <option>Option</option>
              </select>
              <div class="select__arrow"/>
            </div>
          </section>
          <hr class="col-sm-12">
          <!-- tabs -->
          <section class="col-sm-12">
            <h2>Tabs</h2>
            <div class="tabs">
              <input id="tabone" type="radio" name="tabs" checked="checked">
              <label for="tabone">General</label>
              <div class="tab">
                <h1>Tab One Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut laboreofficia deserunt mollit anim id est laborum.</p>
              </div>

              <input id="tabtwo" type="radio" name="tabs">
              <label for="tabtwo">Editor</label>
              <div class="tab">
                <h1>Tab Two Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore</p>
              </div>

              <input id="tabthree" type="radio" name="tabs">
              <label for="tabthree">Settings</label>
              <div class="tab">
                <h1>Tab Three Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </section>
          <hr>
          <!-- notifications -->
          <section class="col-sm-12">
            <h2>notifications</h2>
            <div class="notification">
              <button class="clear">x</button>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet,consectetur adipiscing elit</p>
            </div>
            <div class="notification is-primary">
              <button class="clear">x</button>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consecteturadipiscing elit</p>
            </div>
            <div class="notification is-success">
              <button class="clear">x</button>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur  adipiscing elit</p>
            </div>
            <div class="notification is-warning">
              <button class="clear">x</button>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div class="notification is-danger">
              <button class="clear">x</button>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit </p>
            </div>
            <div class="notification is-info">
              <button class="clear">x</button>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div class="group-button">
              <button id="notify" class="button btn-primary-light rounded">Show</button>
            </div>
          </section>
          <!-- arrow  -->
          <section class="col-sm-6">
            <h2>Menu</h2>
            <aside class="menu">
              <p class="menu-label">General</p>
              <div class="menu-list">
                <li><a>Dashboard</a></li>
                <li><a>Customers</a></li>
              </div>
              <p class="menu-label">Administration</p>
              <div class="menu-list">
                <li><a>Team Settings</a></li>
                <li>
                  <a class="is-active">Manage Your Team</a>
                  <ul>
                    <li><a>Members</a></li>
                    <li><a>Plugins</a></li>
                    <li><a>Add a member</a></li>
                  </ul>
                </li>
                <li><a>Invitations</a></li>
                <li><a>Cloud Storage Environment Settings</a></li>
                <li><a>Authentication</a></li>
              </div>
              <p class="menu-label">Transactions</p>
              <div class="menu-list">
                <li><a>Payments</a></li>
                <li><a>Transfers</a></li>
                <li><a>Balance</a></li>
              </div>
            </aside>
          </section>
          <section class="col-sm-6">
            <h2>Alert</h2>
            <div class="group-button">
              <button class="button btn-danger-light" @click="toast()">Toaster</button>
            </div>
           
            <button class="button btn-dander" @click="alert()">Top center</button>
            <button class="button btn-primary" @click="alert1()">Top right</button>
            <button class="button btn-success" @click="alert2()">Top left</button>
            <button class="button btn-info" @click="alert3()">Bottom center</button>
            <button class="button btn-primary-light" @click="alert4()">Bottom right</button>
            <button class="button btn-warning" @click="alert5()">Bottom left</button>
          </section>
        </div>
      </div>
    </main>
    <hr>
    <div class="container">
      <h2>Default table</h2>
      <table id="table1" class="table">
        <thead>
          <th>Nom</th>
          <th>Ville</th>
          <th>Tour 1</th>
          <th>Tour 2</th>
          <th>Position</th>
        </thead>
        <tbody/>
      </table>
      <h2>Responsive table </h2>
      <table id="table2" class="table table-responsive">
        <thead>
          <th>Nom</th>
          <th>Ville</th>
          <th>Tour 1</th>
          <th>Tour 2</th>
          <th>Position</th>
        </thead>
        <tbody/>
      </table>
      <h2>Responsive table with js</h2>
      <table id="table3" class="table table-responsive datagrid">
        <thead>
          <th>Nom</th>
          <th>Ville</th>
          <th>Tour 1</th>
          <th>Tour 2</th>
          <th>Position</th>
        </thead>
        <tbody/>
      </table>
      <h2> Light Responsive table with js</h2>
      <table id="table4" class="table-light light-responsive datagrid ishover">
        <thead>
          <th>Nom</th>
          <th>Ville</th>
          <th>Tour 1</th>
          <th>Tour 2</th>
          <th>Position</th>
        </thead>
        <tbody/>
      </table>
      <h2>Datatable</h2>
      <table id="myDatatable" class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody/>
      </table>
    </div>
    <Toast v-if="toasted" :message=" msg " background="#fff" color="#3BB881"/>
    <Alert v-if="cas" background="coral" title="C'est moi" message="Hello everyone" color="#fff" delai="14" position="top-center"/>
    <Alert v-if="cas1" background="#10ac84" color="#fff" delai="14" position="top-right"/>
    <Alert v-if="cas2" background="#f368e0" color="#fff" delai="14" position="top-left"/>
    <Alert v-if="cas3" background="#8395a7" color="#fff" delai="14" position="bottom-center"/>
    <Alert v-if="cas4" background="#222f3e" color="#fff" delai="14" position="bottom-right"/>
    <Alert background="#0abde3" color="#fff" delai="14" position="bottom-left"/>
  </div>
</template>

<script>
import '~/assets/css/datatable.css'
//import jQuery from 'jquery'
// global.jQuery = jQuery
// var $ = global.jQuery
//import '~/static/js/jquery.min.js'
//import '~/static/js/jquery.dataTables.js'
//import '~/static/js/app.js'
import Alert from '@/components/Alert.vue'
import Toast from '@/components/Toast.vue'

export default {
  components: { Toast, Alert },
  ready() {},
  data() {
    return {
      cas: false,
      cas1: false,
      cas2: false,
      cas3: false,
      cas4: false,
      cas5: false,
      toasted: false,
      msg: 'Hi, i am toast'
    }
  },
  mounted() {
    this.getDatas()
    $('#myDatatable').DataTable()
    //input tag value
    $('#btn_get_tags').click(() => {
      var tts = getTages()
      for (var item in tts) {
        window.console.log(tts[item])
        $('#list_tag').append('<li>' + tts[item] + '</li>')
      }
    })
    // table responsive
    document.querySelectorAll('.datagrid').forEach(function(table) {
      let labels = Array.from(table.querySelectorAll('th')).map(function(th) {
        return th.innerText
      })
      table.querySelectorAll('td').forEach(function(td, i) {
        td.setAttribute('data-label', labels[i % labels.length])
      })
    })
  },
  methods: {
    toast() {
      this.toasted = !this.toasted
      this.msg =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    alert() {
      this.cas = !this.cas
    },
    alert1() {
      this.cas1 = !this.cas1
    },
    alert2() {
      this.cas2 = !this.cas2
    },
    alert3() {
      this.cas3 = !this.cas3
    },
    alert4() {
      this.cas4 = !this.cas4
    },
    alert5() {
      this.cas5 = !this.cas5
    },
    getTages() {
      var tags = []
      document.querySelectorAll('.input-tag-item').forEach(itag => {
        tags.push(itag.getAttribute('data-value'))
      })
      return tags
    },
    getDatas() {
      var dt =
        '<tr><td>Assie marc</td><td>Abidjan</td> <td>58min 40s</td> <td>1h23 58min 40s</td> <td>2eme</td></tr>'
      var dt2 =
        '<tr> <td data-label="Nom">Assie marc</td><td data-label="Ville">Abidjan</td><td data-label="Tour 1">58min 40s</td><td data-label="Tour 2">1h23 58min 40s</td><td data-label="Position">2eme</td> </tr>'
      for (let i = 0; i < 5; i++) {
        $('#table1 tbody').append(dt)
        $('#table2 tbody').append(dt2)
        $('#table3 tbody').append(dt)
        $('#table4 tbody').append(dt)
      }
      for (let i = 0; i < 200; i++) {
        $('#myDatatable tbody').append(
          '<tr><td>' +
            i +
            '</td> <td>Oreli</td><td>oreli@mail.ci</td> <td>+22507836510</td> <td>Cocody, 7me tranche</td></tr>'
        )
      }
    }
  }
}
</script>

<style>
h2 {
  color: #2ec866;
}
hr {
  width: 100%;
  height: 0px;
  border: 0.255px solid #2ec866;
  margin: 25px 0px;
}
</style>
