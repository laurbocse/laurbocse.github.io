document.addEventListener('DOMContentLoaded', () => {

    new Typewriter('.dynamic-text', {
        strings: ['<span class="text-yellow-500">Laur Bocse.</span>', 'a <span class="text-yellow-500">Software Developer.</span>'],
        autoStart: true,
        loop: true,
        
    });

    gsap.from('#header_subtitle', {
        delay: 0.5,
        duration: 1,
        autoAlpha: 0,
        y: -50,
        stagger: 0.4,
    });

    gsap.from('#header_button', {
        delay: 1.5,
        duration: 1,
        autoAlpha: 0,
        y: 50,
        stagger: 0.4,
    });

    gsap.from('#header_socials', {
        delay: 2.5,
        duration: 1,
        autoAlpha: 0,
        y: 50,
        stagger: 0.4,
    });

    const aboutSection = {
        trigger: '#section_about',
        start: 'top 70%',
        end: '20% 80%',
        scrub: false,
        markers: false
    };

    gsap.from('#about_description', {
        duration: 1,
        autoAlpha: 0,
        x: -150,
        stagger: 0.4,
        scrollTrigger: aboutSection
    });

    const aboutSectionSkills = {
        trigger: '#section_about-skills',
        start: 'top 70%',
        end: '20% 80%',
        scrub: false,
        markers: false,
    };

    gsap.from('#about_skills-content', {
        duration: 1,
        autoAlpha: 0,
        x: -150,
        stagger: 0.4,
        scrollTrigger: aboutSectionSkills
    });

    gsap.from('#percentage', {
        delay: 1,
        duration: 1.5,
        autoAlpha: 0,
        width: 0,
        stagger: 0.4,
        scrollTrigger: aboutSectionSkills
    });
});