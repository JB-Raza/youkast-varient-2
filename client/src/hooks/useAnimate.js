import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useAnimate = () => {
    ScrollTrigger.refresh()

    function animateElem(target = "", props = {}) {
        const elements = document.querySelectorAll(target)
        elements.forEach((elem) => {
            gsap.from(elem, {
                x: props.x || "0",
                y: props.y || "0",
                opacity: props.opacity || 0,
                duration: props.duration || "0.3",
                scale: props.scale || 1,
                rotate: props.rotate || 0,
                ease: props.ease || "power2.out",
                stagger: props.stagger || 0.3,

                scrollTrigger: {
                    scroller: "body",
                    trigger: elem,
                    start: props.start || "top 80%",
                    toggleActions: "play none none none",
                },

            })

        })
    }

    return animateElem
}