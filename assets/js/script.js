// use a script tag or an external JS file
     document.addEventListener("DOMContentLoaded", (event) => {

      var menu = document.querySelector('#menuToggle');
      var close = document.querySelector('.closeMenu')
      var tl = gsap.timeline();

      tl.to('.menu', {
        right: 0,
        duration: 1
      })
      tl.from('.menu a',{
        x:100,
        duration: .5,
        opacity: 0,
        stagger: .2
      }, "-=.3")
      tl.from('.menu .closeMenu',{
        opacity: 0
      })
      tl.pause();

      menu.addEventListener('click', ()=>{
        tl.play();
      })
      close.addEventListener('click',()=>{
        tl.reverse();
      })

      // text animation

      var h1 = document.querySelector('.hero-site h1');
      var h1Text = h1.textContent;

      var splitedText = h1Text.split("");
      var halfVal = splitedText.length/2;
      
      var cluster = "";
      splitedText.forEach((elem, idx)=>{
        if(elem == " "){
          elem = "&nbsp;";
        }
        if(idx<halfVal){
          cluster += `<span class="leftText">${elem}</span>`
        }else{
          cluster += `<span class="rightText">${elem}</span>`
        }
      })

      h1.innerHTML = cluster;

      gsap.from('h1 .leftText',{
        y:50,
        duration:0.6,
        delay:0.5,
        stagger: 0.15,
        opacity:0
      })
      gsap.from('h1 .rightText',{
        y:50,
        duration:0.6,
        delay: 0.5,
        stagger: -0.15,
        opacity:0
      })

      gsap.from('.airdopesImg1',{
        y:100,
        duration:2,
        stagger: 0.5,
        opacity:0
      })
      gsap.from('.musicWave',{
        y:100,
        duration:2,
        stagger: 0.5,
        scale: .3,
        opacity:0
      })

      const tl2 = gsap.timeline({scrollTrigger:{
          trigger:'.hero-site',
          start:'40% 30%',
          end:'150% 50%',
          duration: 2,
          stagger: 1,
          scrub: 2,
          // markers: true,
        }
      })
      tl2.to('.airdopesImg1', {
        y: '300%',
        x: '-125%',
        rotation: 200,
        scale: 1.6,
      },"anim1")
      tl2.to('.musicWave', {
        y: '220%',
        x: '-100%',
        scale: .8,
      },"anim1")
      gsap.to('.musicWave', {
        rotation: 360, 
        duration: 16,    
        repeat: -1, 
        ease: "linear"
      },"anim1")
      tl2.to('.scroll_box',{
        y: -100,
        opacity:0,        
      },"anim1")
      tl2.to('h1',{
        y: -100,
        opacity:0,        
      },"anim1")

      const tl3 = gsap.timeline({scrollTrigger:{
          trigger:".about_section",
          start:'40% 30%',
          end:'150% 50%',
          duration: 2,
          stagger: 1,
          scrub: 2,
          // markers: true,
        }
      })      
      tl3.to('.musicWave', {
        y: '360%',
        x: '-10%',
        scale: 1.8,
        zIndex:1,
        opacity:.5,
      })
      
      const tl4 = gsap.timeline({scrollTrigger:{
          trigger:".video_section",
          start:'40% 90%',
          end:'70% 50%',
          duration: 1,
          stagger: 1,
          scrub: 2,
          // markers: true,
        }
      })
      tl4.to('.earbuds_1_img', {
        opacity: 1,
        scale: 1,
      }, "bud_anim")

      tl4.from('.earbuds_2_img', {
        y:'-80%',
        x:'-150%',
        opacity: 1,
        scale: .5,
      }, "bud_anim")

      tl4.from('.earbuds_3_img', {
        x:'90%',
        y:'80%',
        opacity: 1,
        scale: .5,
      }, "bud_anim")


      gsap.to('.slide_inner',{
        x:'-75%',
        scrollTrigger:{
          trigger:".slide_inner",
          start: '60% 60%',
          end:'100% 10%',
          pin: true,
          duration: 1,
          scrub: 1,
          // markers: true,
        }
      }, "sl")
      gsap.to('.circle_anim2',{
        rotation: 2360,
        scrollTrigger:{
          trigger:".circle_anim2",
          start: '0% 80%',
          end:'100% 0%',
          pin: true,
          duration: 1,
          scrub: 1,
          // markers: true,
        }
      }, "sl")


      // const boll = document.querySelector('.boll');

      // setInterval(function(){   
      //   const rendx = Math.floor((Math.random()*1000)+100);
      //   const rendy = Math.floor((Math.random()*1000)+100);
      //   gsap.to('.boll',{
      //   x: rendx + '%',
      //   y:rendy + '%',
      //   duration: 2,
      //   ease: "power1.out",
      // })

      // }, 1800);

       const mybtn = document.querySelector('.mybtn');
      mybtn.addEventListener('mouseover',()=>{   
        const rendx = Math.floor((Math.random()*800)+100);
        const rendy = Math.floor((Math.random()*800)+100);
        gsap.to('.mybtn',{
          x: rendx + '%',
          y:rendy + '%',
          duration: 2,
          ease: "power1.out",
        })
        gsap.to('.mybtn2',{
          x: rendx + '%',
          y:rendy + '%',
          duration: 3,
          delay:1,
          ease: "power1.out",
        })

      }, 1800); 
      // setInterval(function(){ 
      //   const rendx = Math.floor((Math.random()*800)+100);
      //   const rendy = Math.floor((Math.random()*800)+100);
      //   gsap.to('.mybtn',{
      //     x: rendx + '%',
      //     y:rendy + '%',
      //     duration: 2,
      //     ease: "power1.out",
      //   })
      //   gsap.to('.mybtn2',{
      //     x: rendx + '%',
      //     y:rendy + '%',
      //     duration: 2.5,
      //     delay:.2,
      //     ease: "power1.out",
      //   })

      // }, 1800); 
      


      const servicesSec = document.querySelector('.services-sec');      
      const circleicon = document.querySelector('.circleAnim');
      var offsetT = document.querySelector('.services-sec').offsetTop;
      
        servicesSec.addEventListener('mousemove', (sr)=>{    
          const yval = sr.y - offsetT + window.scrollY;
          gsap.to('.circleAnim',{
            x: sr.x,
            y: yval,
            duration:'1', 
            opacity:1
          })          
        })            


      

     });