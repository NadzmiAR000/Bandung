const words = ["adalah kota metropolitan terbesar di provinsi jawa barat,sekaligus menjadi ibu kota provinsi tersebut."]      


let cursor = gsap.to('.cursor', {opacity: 0, ease:"power2.inOut", repeat: -1})

let masterTl = gsap.timeline({repeat: -1})

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1.5, yoyo: true, repeatDelay: 2})
    tl.to('.text', {duration: 10, text: word})
    masterTl.add(tl)
})