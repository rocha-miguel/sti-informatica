import { isPlatformBrowser } from '@angular/common'
import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID, signal } from '@angular/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NavbarComponent } from './components/shared/navbar-component/navbar-component'
import { FooterComponent } from './components/shared/footer-component/footer-component'

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('stionline-web')
  private context?: gsap.Context

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return

    gsap.registerPlugin(ScrollTrigger)

    this.context = gsap.context(() => {
      const hero = gsap.timeline({
        defaults: {
          duration: 0.9,
          ease: 'power3.out'
        }
      })

      hero
        .from('#inicio span', {
          y: 20,
          opacity: 0
        })
        .from('#inicio h1', {
          y: 35,
          opacity: 0
        }, '-=0.55')
        .from('#inicio p', {
          y: 25,
          opacity: 0
        }, '-=0.45')
        .from('#inicio a', {
          y: 20,
          opacity: 0,
          stagger: 0.12
        }, '-=0.35')
        .from('#inicio .rounded-2xl', {
          y: 25,
          opacity: 0,
          stagger: 0.12
        }, '-=0.3')
        .from('#inicio .relative.rounded-4xl', {
          x: 60,
          opacity: 0,
          scale: 0.96
        }, '-=0.75')

      gsap.utils.toArray<HTMLElement>('section:not(#inicio)').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            toggleActions: 'play none none reverse'
          },
          y: 45,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out'
        })
      })

      gsap.utils.toArray<HTMLElement>('#servicos .mt-14.grid > div').forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none reverse'
          },
          y: 45,
          opacity: 0,
          scale: 0.96,
          duration: 0.75,
          delay: index * 0.04,
          ease: 'power3.out'
        })
      })

      gsap.utils.toArray<HTMLElement>('#clientes .mt-14.grid > div').forEach((logo, index) => {
        gsap.from(logo, {
          scrollTrigger: {
            trigger: logo,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          y: 35,
          opacity: 0,
          scale: 0.92,
          duration: 0.7,
          delay: index * 0.05,
          ease: 'back.out(1.7)'
        })
      })

      gsap.from('#servicos .mt-14.rounded-4xl', {
        scrollTrigger: {
          trigger: '#servicos .mt-14.rounded-4xl',
          start: 'top 82%',
          toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        scale: 0.97,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from('#contato .rounded-4xl', {
        scrollTrigger: {
          trigger: '#contato',
          start: 'top 78%',
          toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out'
      })
    })
  }

  ngOnDestroy(): void {
    this.context?.revert()
  }
}