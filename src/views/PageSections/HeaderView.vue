<template>
    <header class="card">
        <div class="card-body">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <img class="logo" src="../../assets/logo.png"/>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                            <li class="nav-item">
                                <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/">Store</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/">Contact Us</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/">Sing In</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<style>
.logo {
  width: 15rem;
}
</style>