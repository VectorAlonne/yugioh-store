<template>
    <header>
        <div>
            <nav id="navbar">
                <div id="header">
                    <a href="http://localhost:5173">
                        <img class="logo" src="../../assets/logo.png" />
                    </a>
                    <div id="navbarSupportedContent">
                        <ul id="ul" class="grid grid-cols-3 gap-3">
                            <li class="nav-item">
                                <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link active" aria-current="page" to="/contact">Contact Us
                                </RouterLink>
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