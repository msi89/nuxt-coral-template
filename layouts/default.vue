<template>
  <div>
    <div class="layout">
      <div id="sidebar" class="sidebar">
        <aside class="menu">
          <div class="menu-header bgk-primary" >
            <div class="menu-header-title">Coral</div>
          </div>
          <p class="menu-label">General</p>
          <div class="menu-list">
            <li><nuxt-link to="/" class="switched"> <i class="material-icons">home</i>Dashboard</nuxt-link></li>
            <li><nuxt-link to="/components"><i class="material-icons">apps</i>Components</nuxt-link></li>
          </div>
          <p class="menu-label">Administration</p>
          <div class="menu-list">
            <li><nuxt-link to="/icons"><i class="material-icons">settings</i>Icons</nuxt-link></li>
            <li>
              <nuxt-link to="#" class="expandible" data-expand="true"><i class="material-icons">settings_input_composite</i>Team Settings</nuxt-link>
              <div class="menu-list-collapse">
                <li><nuxt-link to="#">Members</nuxt-link></li>
                <li><nuxt-link to="#">Plugins</nuxt-link></li>
                <li><nuxt-link to="#">Add a member</nuxt-link></li>
              </div>
            </li>
            <li><nuxt-link to="#"><i class="material-icons">folder</i>Invitations</nuxt-link></li>
            <li><nuxt-link to="#"><i class="material-icons">cloud</i>Cloud Storage</nuxt-link></li>
            <li><nuxt-link to="#"><i class="material-icons">folder</i>Authentication</nuxt-link></li>
          </div>
          <p class="menu-label">Transactions</p>
          <div class="menu-list">
            <li><nuxt-link to="#">Payments</nuxt-link></li>
            <li><nuxt-link to="#">Transfers</nuxt-link></li>
            <li><nuxt-link to="#">Balance</nuxt-link></li>
          </div>
        </aside>
      </div>
      <div class="main">
        <div class="header">
          <div class="brand">
            <a id="btn_toogle_sidebar" href="#" class="nav_btn" @click="toggle"><i class="material-icons">menu</i></a>
          </div>
          <div class="navbar">
            <a href="#" class="nav_btn has-color"><i class="material-icons">apps</i><span class="bulle is-error">12</span></a>
            <div class="dropdown is-right">
              <div class="dropdown-trigger">
                <a href="#" class="nav_btn has-color bubble" aria-haspopup="true" aria-controls="dropdown-menu1"><i class="material-icons">notifications</i></a>
              </div>
              <div id="dropdown-menu1" class="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <div class="dropdown-item">
                    <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
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
            <div class="dropdown is-right">
              <div class="dropdown-trigger">
                <a href="#" class="nav_btn has-color" aria-haspopup="true" aria-controls="dropdown-menu2"><i class="material-icons">person</i></a>
              </div>
              <div id="dropdown-menu2" class="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item">My profile</a>
                  <a class="dropdown-item">Settings</a>
                  <hr class="dropdown-divider">
                  <a href="#" class="dropdown-item">Log out</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div id="content" class="content" @click="dismiss">
          <div class="canvas-fluid">
            <nuxt/>
          </div>
        </div>
      </div>
    </div>
    <div id="overlay" class="overlay" @click="dismiss"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nav_open: false
    }
  },
  methods: {
    toggle() {
      var sidebar = document.getElementById('sidebar')
      var content = document.getElementById('content')
      var overlay = document.getElementById('overlay')
      sidebar.classList.add('active')
      content.classList.add('active')
      overlay.classList.add('active')
    },
    dismiss() {
      var sidebar = document.getElementById('sidebar')
      var overlay = document.getElementById('overlay')
      sidebar.classList.remove('active')
      overlay.classList.remove('active')
    }
  }
}
</script>
