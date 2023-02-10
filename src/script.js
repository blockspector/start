var navbarItems = `

<div class="mt-0 sticky-top" style="
    padding-left: 0px;
">
    <nav class="navbar navbar-expand-sm navbar-light bg-light" style="
    padding-top: 0px;
    ">
        <div class="container-fluid nav justify-content-center">
            <a href="#" class="navbar-brand" style="margin-right: 13px";>
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarCollapse">
                <div class="navbar-nav justify-content-center">
                    <li class="nav-item dropdown justify-content-center">
                      <a class="nav-link justify-content-center" href="#" role="button"  aria-expanded="false" style="padding-right: 13px !important; padding-left: 13px !important;">
                        About
                      </a>
                      <ul class="dropdown-menu justify-content-center">
                        <li><a class="dropdown-item" href="./About.html"> 💿 About</a></li>
                      </ul>
                      <!-- 
                    <li class="nav-item dropdown justify-content-center">
                      <a class="nav-link justify-content-center" href="#" role="button"  aria-expanded="false" style="padding-right: 13px !important;padding-left: 13px !important;">
                        Explore
                      </a>
                      <ul class="dropdown-menu justify-content-center">
                        <li><a class="dropdown-item" href="./CurrentProjects.html"> 🪐 Current Projects</a></li>
                      </ul>
                      <li class="nav-item dropdown justify-content-center">
    <a class="nav-link justify-content-center" href="#" role="button"  aria-expanded="false" style="padding-right: 13px !important;padding-left: 13px !important;">
      Integration
    </a>
    <ul class="dropdown-menu justify-content-center">
      <li><a class="dropdown-item" href="./Integrations.html">🧬 Current Integrations</a></li>
    </ul>
    Start of HEAD  -->
    <li class="nav-item dropdown justify-content-center">
        <a class="nav-link" href="#" role="button"  aria-expanded="false" style="padding-right: 13px !important; padding-left: 13px !important;">
         Let's talk? 
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="mailto:hello@Blockspector.io?subject=How%20can%20we%20help%3F%20(YOUR%20REQUEST%20HERE!)&body=Are%20you%20looking%20to%20collaborate%20on%20a%20new%20project%3F%20Y%2FN">✉️ Email</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="./ScheduleACall.html">🏄‍♂️ Schedule a Call</a></li>
        </ul>
                      <li class="nav-item dropdown justify-content-center">
                        <a class="nav-link justify-content-center" href="#" role="button"  aria-expanded="false" style="padding-right: 13px !important;padding-left: 13px !important;">
                          Support
                        </a>
                        <ul class="dropdown-menu justify-content-center">
                          <li><a class="dropdown-item" href="./Support.html">🧰 Need Help?</a></li>
                        </ul>
                        
                </div>
            </div>
        </div>
    </nav>
</div>


  <!-- End of Navbar  -->

  <title>Blockspector.io</title>



  <!-- Nav 2 TEST! -->
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><a class="menu__item" href="mailto:hello@Blockspector.io?subject=How%20can%20we%20help%3F%20(YOUR%20REQUEST%20HERE!)&body=Are%20you%20looking%20to%20collaborate%20on%20a%20new%20project%3F%20Y%2FN">✉️ Email</a></li>
      <li><a class="menu__item" href="./CurrentProjects.html">🪐 Current Projects</a></li>
      <li><a class="menu__item" href="./Integrations.html">🧬 Integrations</a></li>
      <li><a class="menu__item" href="./ScheduleACall.html">🏄‍♂️ Schedule a Call</a></li>
      <li><a class="menu__item" href="./About.html">💿 About</a></li>
      <li><a class="menu__item" href="./Index.html">🌍 Home</a></li>
      <li><a class="menu__item" href="./Support.html">🧰 Need Help?</a></li>
    </ul>
  </div>

  <!-- Nav 2 TEST! -->
</head>
<body>  <!--BODY START  -->
  <div class="hamburger-menu">
    <pre>  
    </pre>
  </div>
`
document.body.insertAdjacentHTML("afterbegin", navbarItems);