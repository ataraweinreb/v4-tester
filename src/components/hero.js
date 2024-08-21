// import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
// import styled, { keyframes } from 'styled-components';
// import { theme, mixins, media, Section } from '@styles';
// const { colors, fontSizes } = theme;

// const HeroContainer = styled(Section)`
//   ${mixins.flexCenter};
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   width: 100%;
//   ${media.tablet`padding-top: 150px;`};
// `;

// const CanvasWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   z-index: -1;
// `;

// const spin = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const ChangeColorButton = styled.button`
//   ${mixins.smallButton}; /* Apply smallButton mixin */
//   position: absolute;
//   bottom: 20px;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   background-color: ${colors.green}; /* Match the theme's color */
//   color: white;
//   font-size: ${fontSizes.smallish}; /* Match the font size from ResumeLink */
//   font-weight: bold;
//   z-index: 10;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   animation: ${spin} 4s linear infinite; /* Keep the spinning animation */
//   text-decoration: none; /* Remove underline for link styling */
//   &:hover {
//     background-color: ${colors.blue}; /* Change color on hover */
//   }
// `;

// const SpiralText = styled.span`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   display: flex;
//   flex-wrap: wrap;
//   width: 90px;
//   height: 90px;
//   border-radius: 50%;
//   justify-content: center;
//   align-items: center;
//   font-size: 10px;
//   color: white;
// `;

// const Hero = ({ data }) => {
//   const canvasRef = useRef(null);
//   const particles = useRef([]);
//   const backgroundParticles = useRef([]);
//   const currentThemeIndex = useRef(0);
//   const colorThemes = useRef([
//     () => `hsl(${Math.random() * 360}, 100%, 50%)`, // Rainbow (default)
//     () => `hsl(${Math.random() * 30 + 330}, 100%, ${Math.random() * 50 + 50}%)`, // Shades of Pink
//     () => `hsl(${Math.random() * 240 + 180}, 100%, ${Math.random() * 50 + 50}%)`, // Shades of Blue
//     () => `hsl(${Math.random() * 120}, 100%, ${Math.random() * 50 + 50}%)`, // Shades of Green
//     () => `hsl(${Math.random() * 60 + 270}, 100%, ${Math.random() * 50 + 50}%)`, // Shades of Purple
//     () => ['#FF0000', '#FFFFFF', '#0000FF'][Math.floor(Math.random() * 3)], // Red, White, and Blue
//     () => ['#FF4500', '#FF6347', '#FFD700'][Math.floor(Math.random() * 3)], // Sunset (Orange, Red, Yellow)
//     // () => `hsl(${Math.random() * 360}, 100%, 50%)` // Neon (Bright Colors)
//   ]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const mouse = { x: null, y: null };
//     let textCoordinates = [];
//     let fontSize, text, subText;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       if (window.innerWidth >= 1024) {
//         // For desktop
//         fontSize = Math.min(canvas.width * 0.45, canvas.height * 0.45);
//       } else {
//         // For mobile and tablet
//         fontSize = Math.min(canvas.width * 0.3, canvas.height * 0.3);
//       }

//       text = "Atara";
//       subText = "Eng + Design @ 👻";

//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.font = `bold ${fontSize}px Gilroy`;
//       ctx.fillStyle = "white";
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";

//       const textX = canvas.width / 2;
//       const textY = canvas.height / 2;

//       ctx.fillText(text, textX, textY);

//       ctx.font = `bold ${fontSize * 0.3}px Gilroy`;
//       ctx.fillText(subText, textX, textY + fontSize / 2 + 10);

//       textCoordinates = [];
//       const textData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//       for (let y = 0; y < textData.height; y += 3) { // Slightly increase spacing between particles
//         for (let x = 0; x < textData.width; x += 3) { // Slightly increase spacing between particles
//           const index = (y * textData.width + x) * 4;
//           if (textData.data[index + 3] > 128) {
//             textCoordinates.push({ x, y });
//           }
//         }
//       }

//       particles.current = [];
//       for (let i = 0; i < textCoordinates.length; i++) {
//         let x = textCoordinates[i].x;
//         let y = textCoordinates[i].y;
//         particles.current.push(new Particle(x, y));
//       }

//       initBackgroundParticles();
//     };

//     class Particle {
//       constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.baseX = x;
//         this.baseY = y;
//         this.size = 1.5; // Smaller particle size for elegance
//         this.color = this.randomColor();
//         this.velocityX = Math.random() * 2 - 1;
//         this.velocityY = Math.random() * 2 - 1;
//       }

//       randomColor() {
//         return colorThemes.current[currentThemeIndex.current]();
//       }

//       draw() {
//         ctx.fillStyle = this.color;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.fill();
//       }

//       update() {
//         let dx = mouse.x - this.x;
//         let dy = mouse.y - this.y;
//         let distance = Math.sqrt(dx * dx + dy * dy);
//         let forceDirectionX = dx / distance;
//         let forceDirectionY = dy / distance;
//         let force = (150 - distance) / 150;
//         let directionX = forceDirectionX * force * 15;
//         let directionY = forceDirectionY * force * 15;

//         if (distance < 150) {
//           this.x -= directionX;
//           this.y -= directionY;
//           this.x += this.velocityX * 2;
//           this.y += this.velocityY * 2;
//         } else {
//           if (this.x !== this.baseX) {
//             let dx = this.x - this.baseX;
//             this.x -= dx / 10;
//           }
//           if (this.y !== this.baseY) {
//             let dy = this.y - this.baseY;
//             this.y -= dy / 10;
//           }
//         }

//         if (this.x < 0 || this.x > canvas.width) this.velocityX = -this.velocityX;
//         if (this.y < 0 || this.y > canvas.height) this.velocityY = -this.velocityY;
//       }

//       changeColor() {
//         this.color = this.randomColor();
//       }
//     }

//     class BackgroundParticle extends Particle {
//       constructor(x, y) {
//         super(x, y);
//         this.size = Math.random() * 2 + 1; // Smaller background particles
//       }
//     }

//     const initBackgroundParticles = () => {
//       backgroundParticles.current = [];
//       for (let i = 0; i < 100; i++) {
//         let x = Math.random() * canvas.width;
//         let y = Math.random() * canvas.height;
//         backgroundParticles.current.push(new BackgroundParticle(x, y));
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       backgroundParticles.current.forEach(particle => {
//         particle.draw();
//         particle.update();
//       });
//       particles.current.forEach(particle => {
//         particle.draw();
//         particle.update();
//       });
//       requestAnimationFrame(animate);
//     };

//     window.addEventListener("mousemove", (event) => {
//       mouse.x = event.clientX;
//       mouse.y = event.clientY;
//     });

//     window.addEventListener("resize", resizeCanvas);

//     resizeCanvas();
//     animate();

//     // Set interval to change colors every 2 seconds
//     const colorChangeInterval = setInterval(changeColor, 800);

//     return () => {
//       window.removeEventListener("mousemove", () => {});
//       window.removeEventListener("resize", resizeCanvas);
//       clearInterval(colorChangeInterval); // Clean up the interval on component unmount
//     };
//   }, []);

//   const changeColor = () => {
//     currentThemeIndex.current = (currentThemeIndex.current + 1) % colorThemes.current.length;
//     particles.current.forEach(particle => particle.changeColor());
//     backgroundParticles.current.forEach(particle => particle.changeColor());
//   };

//   return (
//     <HeroContainer>
//       <CanvasWrapper>
//         <canvas ref={canvasRef} />
//       </CanvasWrapper>
//       {/* <ChangeColorButton onClick={changeColor}>
//         <SpiralText>
//           Change Color Change Color Change Color
//         </SpiralText>
//       </ChangeColorButton> */}
//     </HeroContainer>
//   );
// };

// Hero.propTypes = {
//   data: PropTypes.array.isRequired,
// };

// export default Hero;

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';
const { colors, fontSizes } = theme;

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  ${media.tablet`padding-top: 150px;`};
`;

const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

const Hero = ({ data }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const backgroundParticles = useRef([]);
  const currentThemeIndex = useRef(0);
  const colorThemes = useRef([
    () => `hsl(${Math.random() * 360}, 100%, 50%)`, // Rainbow (default)
    () => `hsl(${Math.random() * 30 + 330}, 100%, ${Math.random() * 50 + 50}%)`, // Shades of Pink
    () => `hsl(${Math.random() * 240 + 180}, 100%, ${Math.random() * 50 + 50}%)`, // Shades of Blue
    () => `hsl(${Math.random() * 120}, 100%, ${Math.random() * 50 + 50}%)`, // Shades of Green
    () => `hsl(${Math.random() * 60 + 270}, 100%, ${Math.random() * 50 + 50}%)`, // Shades of Purple
    () => ['#FF0000', '#FFFFFF', '#0000FF'][Math.floor(Math.random() * 3)], // Red, White, and Blue
    () => ['#FF4500', '#FF6347', '#FFD700'][Math.floor(Math.random() * 3)], // Sunset (Orange, Red, Yellow)
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const mouse = { x: null, y: null };
    let textCoordinates = [];
    let fontSize, text, subText;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (window.innerWidth >= 1024) {
        // For desktop
        fontSize = Math.min(canvas.width * 0.45, canvas.height * 0.45);
      } else {
        // For mobile and tablet
        fontSize = Math.min(canvas.width * 0.3, canvas.height * 0.3);
      }

      text = 'Atara';
      subText = 'Eng + Design @ 👻';

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `bold ${fontSize}px Gilroy`;
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const textX = canvas.width / 2;
      const textY = canvas.height / 2;

      ctx.fillText(text, textX, textY);

      ctx.font = `bold ${fontSize * 0.3}px Gilroy`;
      ctx.fillText(subText, textX, textY + fontSize / 2 + 10);

      textCoordinates = [];
      const textData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (let y = 0; y < textData.height; y += 3) {
        // Slightly increase spacing between particles
        for (let x = 0; x < textData.width; x += 3) {
          // Slightly increase spacing between particles
          const index = (y * textData.width + x) * 4;
          if (textData.data[index + 3] > 128) {
            textCoordinates.push({ x, y });
          }
        }
      }

      particles.current = [];
      for (let i = 0; i < textCoordinates.length; i++) {
        let x = textCoordinates[i].x;
        let y = textCoordinates[i].y;
        particles.current.push(new Particle(x, y));
      }

      initBackgroundParticles();
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = 1.5; // Smaller particle size for elegance
        this.color = this.randomColor();
        this.velocityX = Math.random() * 2 - 1;
        this.velocityY = Math.random() * 2 - 1;
      }

      randomColor() {
        return colorThemes.current[currentThemeIndex.current]();
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let force = (150 - distance) / 150;
        let directionX = forceDirectionX * force * 15;
        let directionY = forceDirectionY * force * 15;

        if (distance < 150) {
          this.x -= directionX;
          this.y -= directionY;
          this.x += this.velocityX * 2;
          this.y += this.velocityY * 2;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }

        if (this.x < 0 || this.x > canvas.width) this.velocityX = -this.velocityX;
        if (this.y < 0 || this.y > canvas.height) this.velocityY = -this.velocityY;
      }

      changeColor() {
        this.color = this.randomColor();
      }
    }

    class BackgroundParticle extends Particle {
      constructor(x, y) {
        super(x, y);
        this.size = Math.random() * 2 + 1; // Smaller background particles
      }
    }

    const initBackgroundParticles = () => {
      backgroundParticles.current = [];
      for (let i = 0; i < 100; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        backgroundParticles.current.push(new BackgroundParticle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath(); // Batch drawing for better performance
      backgroundParticles.current.forEach(particle => {
        particle.draw();
        particle.update();
      });
      particles.current.forEach(particle => {
        particle.draw();
        particle.update();
      });
      ctx.closePath(); // End batch drawing
      requestAnimationFrame(animate);
    };

    // Throttle mouse move events to avoid excessive calculations
    let lastMouseMove = 0;
    window.addEventListener('mousemove', event => {
      const now = Date.now();
      if (now - lastMouseMove > 30) {
        // throttle to 30ms intervals
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        lastMouseMove = now;
      }
    });

    // Debounce resize event
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 150);
    });

    resizeCanvas();
    animate();

    // Set interval to change colors every 0.8 seconds
    const colorChangeInterval = setInterval(changeColor, 1000);

    return () => {
      window.removeEventListener('mousemove', () => {});
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(colorChangeInterval); // Clean up the interval on component unmount
    };
  }, []);

  const changeColor = () => {
    currentThemeIndex.current = (currentThemeIndex.current + 1) % colorThemes.current.length;
    particles.current.forEach(particle => particle.changeColor());
    backgroundParticles.current.forEach(particle => particle.changeColor());
  };

  return (
    <HeroContainer>
      <CanvasWrapper>
        <canvas ref={canvasRef} />
      </CanvasWrapper>
    </HeroContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
