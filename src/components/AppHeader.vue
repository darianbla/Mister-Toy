<template>
    <header>
        <svg class="logo-train" @mouseover="hover = true" @mouseleave="hover = false" fill="#000000" height="70px"
            width="70px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496.565 496.565" xml:space="preserve">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <g class="train-container">
                    <path style="" fill="var(--clr1)"
                        d="M495.442,369.213l-95.17-123.279c-1.111-1.439-3.014-2.012-4.736-1.426c-1.721,0.587-2.878,2.204-2.878,4.022v85.863 h-6.584V202.88c0-12.724-10.085-23.131-22.681-23.66v-54.25c0-10.865-7.356-20.038-17.347-22.817l22.548-31.368 c0.52-0.723,0.799-1.59,0.799-2.48c0-13.061-10.625-23.686-23.685-23.686h-35.791c-13.06,0-23.685,10.625-23.685,23.686 c0,0.891,0.279,1.758,0.799,2.48l22.548,31.368c-9.991,2.779-17.347,11.952-17.347,22.817v54.225h-60.559V69.868 c0-12.82-10.43-23.25-23.25-23.25H56.837c-12.82,0-23.25,10.43-23.25,23.25v111.818c-7.774,3.89-13.127,11.926-13.127,21.193 v131.514h-4.463C7.176,334.394,0,341.57,0,350.39s7.176,15.996,15.997,15.996h4.658c0.968,7.854,5.851,14.736,12.869,18.277 c-1.335,4.632-2.065,9.518-2.065,14.572c0,29.064,23.646,52.711,52.711,52.711c29.065,0,52.711-23.647,52.711-52.711 c0-4.137-0.494-8.158-1.4-12.023h8.182c-0.906,3.865-1.4,7.887-1.4,12.023c0,29.064,23.646,52.711,52.71,52.711 c29.065,0,52.711-23.647,52.711-52.711c0-4.137-0.494-8.158-1.4-12.023h8.182c-0.906,3.865-1.4,7.887-1.4,12.023 c0,29.064,23.646,52.711,52.711,52.711s52.711-23.647,52.711-52.711c0-4.137-0.494-8.158-1.4-12.023h5.301 c12.092,0,22.09-9.11,23.507-20.826h6.763v5.705c0,2.348,1.903,4.25,4.25,4.25h95.387c0.006,0,0.012,0,0.02,0 c2.347,0,4.25-1.902,4.25-4.25C496.565,370.981,496.139,369.97,495.442,369.213z M309.918,53.118h35.791 c7.938,0,14.472,6.122,15.13,13.893l-24.636,34.273h-16.779l-24.636-34.273C295.445,59.24,301.98,53.118,309.918,53.118z M300.733,124.97c0-8.373,6.812-15.186,15.185-15.186h23.791c8.373,0,15.185,6.813,15.185,15.186v54.225h-54.161V124.97z M42.087,69.868c0-8.133,6.617-14.75,14.75-14.75h151.587c8.133,0,14.75,6.617,14.75,14.75v109.326H44.146 c-0.694,0-1.379,0.036-2.059,0.095V69.868z M28.96,307.784h90.01c2.347,0,4.25-1.902,4.25-4.25c0-2.348-1.903-4.25-4.25-4.25H28.96 v-67.637h30.465c2.347,0,4.25-1.902,4.25-4.25c0-2.348-1.903-4.25-4.25-4.25H28.96V202.88c0-8.373,6.812-15.186,15.186-15.186 h318.243c8.373,0,15.186,6.813,15.186,15.186v131.514H28.96V307.784z M29.235,366.386h13.757c-2.518,3.15-4.688,6.588-6.439,10.266 C32.771,374.454,30.072,370.698,29.235,366.386z M84.17,443.447c-24.378,0-44.211-19.833-44.211-44.211 c0-24.378,19.833-44.211,44.211-44.211c24.378,0,44.211,19.833,44.211,44.211C128.381,423.614,108.548,443.447,84.17,443.447z M132.72,378.712c-1.891-4.457-4.389-8.594-7.372-12.326h28.447c-2.984,3.732-5.481,7.869-7.372,12.326H132.72z M194.973,443.447 c-24.377,0-44.21-19.833-44.21-44.211c0-24.378,19.833-44.211,44.21-44.211c24.378,0,44.211,19.833,44.211,44.211 C239.184,423.614,219.351,443.447,194.973,443.447z M243.523,378.712c-1.891-4.457-4.389-8.594-7.372-12.326h28.447 c-2.983,3.732-5.481,7.869-7.372,12.326H243.523z M305.776,443.447c-24.378,0-44.211-19.833-44.211-44.211 c0-24.378,19.833-44.211,44.211-44.211s44.211,19.833,44.211,44.211C349.987,423.614,330.154,443.447,305.776,443.447z M362.389,378.712h-8.062c-1.891-4.457-4.389-8.594-7.372-12.326h30.35C375.963,373.397,369.785,378.712,362.389,378.712z M381.824,357.886h-43.416c-8.983-7.104-20.316-11.361-32.632-11.361s-23.648,4.257-32.632,11.361h-45.54 c-8.983-7.104-20.316-11.361-32.632-11.361s-23.648,4.257-32.631,11.361h-45.54c-8.983-7.104-20.316-11.361-32.632-11.361 c-12.315,0-23.648,4.257-32.632,11.361H24.71h-8.713c-4.134,0-7.497-3.362-7.497-7.496s3.363-7.496,7.497-7.496h8.713h357.114 h10.834v14.992H381.824z M401.158,367.841v-5.705v-23.492V260.99l82.487,106.851H401.158z">
                    </path>
                    <path style="" fill="var(--clr0)"
                        d="M78.425,165.118h108c12.82,0,23.25-10.43,23.25-23.25V91.2c0-12.82-10.43-23.25-23.25-23.25h-108 c-12.82,0-23.25,10.43-23.25,23.25v50.668C55.175,154.689,65.605,165.118,78.425,165.118z M63.675,91.2 c0-8.133,6.617-14.75,14.75-14.75h108c8.133,0,14.75,6.617,14.75,14.75v50.668c0,8.133-6.617,14.75-14.75,14.75h-108 c-8.133,0-14.75-6.617-14.75-14.75V91.2z">
                    </path>
                    <path style="" fill="var(--clr0)"
                        d="M308.298,213.585c-21.826,0-39.583,17.757-39.583,39.584c0,21.825,17.757,39.582,39.583,39.582 c21.827,0,39.584-17.757,39.584-39.582C347.882,231.342,330.125,213.585,308.298,213.585z M308.298,284.251 c-17.139,0-31.083-13.943-31.083-31.082c0-17.14,13.944-31.084,31.083-31.084c17.14,0,31.084,13.944,31.084,31.084 C339.382,270.308,325.438,284.251,308.298,284.251z">
                    </path>
                    <g id="layer1" class="bubles" :class="{ hover }">
                        <ellipse
                            style="fill:#fefefe;stroke:var(--clr0);stroke-width:2.179;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:markers fill stroke"
                            id="path234" cx="103.80487" cy="143.42307" rx="10" ry="10" />
                        <rect
                            style="fill:#fefefe;stroke:var(--clr0);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:markers fill stroke"
                            id="rect950" width="4" height="4" x="105.53429" y="137.611206" ry="5.9230771" rx="5.9230771" />
                    </g>
                    <g id="layer1" class="bubles1" :class="{ hover }">
                        <ellipse
                            style="fill:#fefefe;stroke:var(--clr0);stroke-width:2.179;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:markers fill stroke"
                            id="path234" cx="103.80487" cy="143.42307" rx="10" ry="10" />
                        <rect
                            style="fill:#fefefe;stroke:var(--clr0);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:markers fill stroke"
                            id="rect950" width="4" height="4" x="105.53429" y="137.611206" ry="5.9230771" rx="5.9230771" />
                    </g>
                    <g id="layer1" class="bubles2" :class="{ hover }">
                        <ellipse
                            style="fill:#fefefe;stroke:var(--clr0);stroke-width:2.179;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:markers fill stroke"
                            id="path234" cx="103.80487" cy="143.42307" rx="10" ry="10" />
                        <rect
                            style="fill:#fefefe;stroke:var(--clr0);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:markers fill stroke"
                            id="rect950" width="4" height="4" x="105.53429" y="137.611206" ry="5.9230771" rx="5.9230771" />
                    </g>
                    <!-- <g class="wheel-container" >
                        <path class="wheel"  fill="var(--clr0)"
                            d="M308.298,213.585c-21.826,0-39.583,17.757-39.583,39.584c0,21.825,17.757,39.582,39.583,39.582 c21.827,0,39.584-17.757,39.584-39.582C347.882,231.342,330.125,213.585,308.298,213.585z M308.298,284.251 c-17.139,0-31.083-13.943-31.083-31.082c0-17.14,13.944-31.084,31.083-31.084c17.14,0,31.084,13.944,31.084,31.084 C339.382,270.308,325.438,284.251,308.298,284.251z">
                        </path>
                    </g> -->
                    <path style="" fill="var(--clr0)"
                        d="M194.973,299.284h-48.46c-2.347,0-4.25,1.902-4.25,4.25c0,2.348,1.903,4.25,4.25,4.25h48.46c2.347,0,4.25-1.902,4.25-4.25 C199.223,301.187,197.32,299.284,194.973,299.284z">
                    </path>
                </g>
            </g>
        </svg>
        <h1 class="h-logo">Mister-Toy</h1>
        <AppNav />
    </header>
</template>

<script>
import AppNav from './AppNav.vue';
export default {
    name: 'AppHeader',
    data() {
        return {
            hover: false,
        }
    },
    components: {
        AppNav
    }
}
</script>

<style>
.h-logo {
    font-size: 1.4em;
    padding: 0;
}

.wheel-container {
    /* position: absolute;
    bottom: 10%; */
    /* transform-origin: 0px, 0px; */
    transition: transform .7s ease-in-out;
    transform-origin: 0%, 0%;
}

.bubles {
    opacity: 0;
    transition: .4s;
    transform: translate(200px, -129px);
}

.bubles1 {
    opacity: 0;
    transition: .6s;
    transform: translate(220px, -110px);
}

.bubles2 {
    opacity: 0;
    transition: .7s;
    transform: translate(250px, -133px);
}

.wheel {
    transform: translate(-3px, 145px);
    /* position: absolute; */
    /* bottom: 10%; */
    /* stroke: var(--clr1); */
    /* color: var(--clr1); */
}

.train-container {
    position: relative;
}

.hover {
    opacity: 1;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
    /* transform: rotateZ(3deg); */
    /* transform: translate(-3px, 145px); */
    /* transform: rotateX(305deg); */
    /* transform: rotateZ(5deg); */
}

/* @keyframes move {
    0% {
        transform: scale(1) translate(10px, -30px);
    }

    38% {
        transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
    }

    40% {
        transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
    }

    78% {
        transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
    }

    80% {
        transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
    }

    100% {
        transform: scale(1) translate(10px, -30px);
    }
} */
</style>