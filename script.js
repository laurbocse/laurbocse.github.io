document.addEventListener('DOMContentLoaded', () => {

    const mobileMenu = document.querySelector('#mobile-menu');
    const openMobileMenuBtn = document.querySelector('#open-mobile-menu');
    const closeMobileMenuBtn = document.querySelector('#close-mobile-menu');
    
    if (!mobileMenu || !openMobileMenuBtn || !closeMobileMenuBtn) {
        return;
    }

    const mobileMenuWrapper = document.querySelector(
        '#mobile-menu-wrapper'
    );
    
    const menuLinks = document.querySelectorAll('#menu-link');

    openMobileMenuBtn.addEventListener('click', function () {
        gsap.to(mobileMenu, {
            autoAlpha: 1
        });

        gsap.to(mobileMenuWrapper, {
            x: 0
        });

        gsap.from('#menu-link', {
            delay: 0.3,
            duration: 0.5,
            x: 250,
            stagger: 0.4,
        });
    });

    closeMobileMenuBtn.addEventListener('click', function () {
        gsap.to(mobileMenu, {
            autoAlpha: 0
        });

        gsap.to(mobileMenuWrapper, {
            x: 100
        });
    });

    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("click", function () {
            gsap.to(mobileMenu, {
                autoAlpha: 0
            });

            gsap.to(mobileMenuWrapper, {
                x: 100
            });
        });
    }

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

    const resumeSection = {
        trigger: '#section_resume',
        start: 'top 70%',
        end: '20% 80%',
        scrub: false,
        markers: false
    };

    gsap.from('#resume_title', {
        duration: 1,
        autoAlpha: 0,
        y: -50,
        stagger: 0.4,
        scrollTrigger: resumeSection
    });

    gsap.from('#resume_experience', {
        delay: 0.5,
        duration: 1,
        autoAlpha: 0,
        x: -150,
        stagger: 0.4,
        scrollTrigger: resumeSection
    });

    gsap.from('#resume_education', {
        delay: 1.5,
        duration: 1,
        autoAlpha: 0,
        x: 150,
        stagger: 0.4,
        scrollTrigger: resumeSection
    });

    const resumeGithub = {
        trigger: '#resume_github',
        start: 'top 70%',
        end: '20% 80%',
        scrub: false,
        markers: false
    };

    gsap.from('#resume_github', {
        duration: 1,
        autoAlpha: 0,
        y: 150,
        stagger: 0.4,
        scrollTrigger: resumeGithub
    });
});