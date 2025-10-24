let pos = 0;

console.log(gsap)

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Observer)

gsap.from('.img-large', {
    y: 40,
    x: 10,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
})

gsap.from('.img-container.top', {
    y: 15,
    x: -10,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
})

gsap.from('.img-container.left', {
    y: 15,
    x: -10,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
})

gsap.from('.img-container.right', {
    y: 15,
    x: -10,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
})

gsap.from('.content__title', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
})

gsap.from('.content__preview, .content__info', {
    opacity: 0,
    y: -5,
    duration: 1,
    ease: 'power3.out',
})

gsap.from('.most-recent', {
    opacity: 0,
    y: -15,
    duration: 1,
    ease: 'power3.out',
})

gsap.fromTo('.location', {
    opacity: 0,
    x: -100,
}, {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out',
})

gsap.from('.button-text', {
    opacity: 0,
    y: -10,
    duration: 1,
    ease: 'power3.out',
})

function animateDown() {
    gsap.to('.img-large', {
        y: -window.innerHeight,
        duration: 1.5,
        ease: 'power3.inOut',
    })
    gsap.to('.article .img-large', {
        scale: 0.5,
        duration: 1,
        ease: 'power2.inOut',
    })
    gsap.fromTo('.article-hidden .img-large', {
        scale: 0.5,
    }, {
        scale: 1,
        delay: 0.5,
        duration: 1,
        ease: 'power2.inOut',
    })
    gsap.to('.article .img-container', {
        y: -window.innerHeight,
        duration: 1.2,
        ease: 'power3.inOut',
    })
    gsap.to('.article-hidden .img-container', {
        y: -window.innerHeight,
        delay: 0.2,
        duration: 1.2,
        ease: 'power3.inOut',
    })
    gsap.to('.article .img-container', {
        scale: 0.7,
        duration: 0.8,
        ease: 'power3.inOut',
    })
    gsap.fromTo('.article-hidden .img-container', {
        scale: 0.7,
    }, {
        scale: 1,
        delay: 0.6,
        duration: 0.8,
        ease: 'power3.inOut',
    })
    gsap.fromTo('.article-hidden .content__title', {
        y: -window.innerHeight + 22,
        opacity: 0,
    }, {
        y: -window.innerHeight - 28,
        opacity: 1,
        duration: 0.7,
        delay: 0.8,
        ease: 'power1.out',
    })
    gsap.to('.article .content__title', {
        y: -50,
        opacity: 0,
        duration: 0.7,
        ease: 'power1.in',
    })
    gsap.fromTo('.article-hidden .content__preview, .article-hidden .content__info', {
        y: -window.innerHeight - 28,
        opacity: 0,
    }, {
        y: -window.innerHeight - 28,
        opacity: 1,
        duration: 0.4,
        delay: 1.1,
    })
    gsap.to('.article .content__preview, .article .content__info', {
        opacity: 0,
        delay: 0.4,
        duration: 0.4,
    })
    gsap.to('.article .article__location', {
        opacity: 0,
        y: -window.innerHeight,
        delay: 0.6,
        duration: 0,
        ease: 'power3.inOut',
    })
    gsap.to('.article .location', {
        opacity: 0,
        x: -100,
        duration: 0.8,
        ease: 'power2.inOut',
    })
    gsap.to('.article-hidden .article__location', {
        opacity: 1,
        y: -window.innerHeight + 60,
        delay: 0.8,
        duration: 0,
        ease: 'power3.inOut',
    })
    gsap.fromTo('.article-hidden .location', {
        opacity: 0,
        x: -100,
    }, {
        opacity: 1,
        x: 0,
        delay: 0.6,
        duration: 0.8,
        ease: 'power2.inOut',
    })
    gsap.to('.most-recent', {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.inOut',
    })
    gsap.to('.button-text', {
        opacity: 0,
        y: -100,
        duration: 1,
        delay: 0.1,
        ease: 'power3.inOut',
    })
    gsap.to('.button-text-hidden', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.inOut',
    })
}

function animateUp() {
    gsap.to('.img-large', {
        y: 0,
        duration: 1.5,
        ease: 'power3.inOut',
    })
    gsap.to('.article .img-large', {
        scale: 1,
        delay: 0.5,
        duration: 1,
        ease: 'power2.inOut',
    })
    gsap.to('.article-hidden .img-large', {
        scale: 0.5,
        duration: 1,
        ease: 'power2.inOut',
    })
    gsap.to('.article .img-container', {
        y: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.inOut',
    })
    gsap.to('.article-hidden .img-container', {
        y: 0,
        duration: 1.2,
        ease: 'power3.inOut',
    })
    gsap.fromTo('.article .img-container', {
        scale: 0.7,
    }, {
        scale: 1,
        delay: 0.6,
        duration: 0.8,
        ease: 'power3.inOut',
    })
    gsap.to('.article-hidden .img-container', {
        scale: 0.7,
        duration: 0.8,
        ease: 'power3.inOut',
    })
    gsap.timeline().to('.article-hidden .content__title', {
        y: -window.innerHeight + 22,
        opacity: 0,
        duration: 0.7,
        ease: 'power1.in',
    }).to('.article-hidden .content__title', {
        y: 0,
        duration: 0.1,
    })
    gsap.to('.article .content__title', {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.8,
        ease: 'power1.out',
    })
    gsap.timeline().to('.article-hidden .content__preview, .article-hidden .content__info', {
        opacity: 0,
        delay: 0.4,
        duration: 0.4,
    }).to('.article-hidden .content__preview, .article-hidden .content__info', {
        y: 0,
        duration: 0.1,
    })
    gsap.to('.article .content__preview, .article .content__info', {
        opacity: 1,
        duration: 0.4,
        delay: 1.1,
    })
    gsap.to('.article .article__location', {
        opacity: 1,
        y: 60,
        duration: 0,
        delay: 0.6,
        ease: 'power3.inOut',
    })
    gsap.to('.article .location', {
        opacity: 1,
        x: 0,
        delay: 0.6,
        duration: 0.8,
        ease: 'power2.inOut',
    })
    gsap.to('.article-hidden .article__location', {
        opacity: 0,
        y: 0,
        delay: 0.8,
        duration: 0,
        ease: 'power3.inOut',
    })
    gsap.to('.article-hidden .location', {
        opacity: 0,
        x: -100,
        duration: 0.8,
        ease: 'power2.inOut',
    })
    gsap.to('.most-recent', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.inOut',
    })
    gsap.to('.button-text', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.inOut',
    })
    gsap.to('.button-text-hidden', {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: 0.1,
        ease: 'power3.inOut',
    })
}

const handleDown = () => {
    if (pos < 1) {
        animateDown();
        pos++;
    }
}

const handleUp = () => {
    if (pos > 0) {
        animateUp();
        pos--;
    }
}

Observer.create({
    target: window,
    type: 'wheel,touch,scroll',
    onUp: handleUp,
    onDown: handleDown,
})

document.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowUp') {
        handleUp();
    } else if (e.key == 'ArrowDown') {
        handleDown();
    }
})