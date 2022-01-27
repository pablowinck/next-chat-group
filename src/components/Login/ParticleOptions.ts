import type { ISourceOptions } from 'tsparticles';
export const ParticleOptions: ISourceOptions = {
    fullScreen: {
        enable: true,
        zIndex: 1
    },
    particles: {
        number: {
            value: 150,
            limit: 150,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: 'images/github.svg',
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
                sync: false
            }
        },
        size: {
            value: 20,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 10,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 80,
            color: '#ffffff',
            opacity: 1,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onHover: {
                enable: true,
                mode: 'repulse',
                parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10
                }
            },
            onClick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                lineLinked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 100,
                duration: 2,
                opacity: 1
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    }
};
