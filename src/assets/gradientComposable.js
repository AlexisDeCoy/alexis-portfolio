import { inject, watchEffect } from 'vue';

//NO CHANGES AS OF 04.29.24

export default function animationActive(stop0, stop1, stop2, stop3, stop4, stop5) {
  const { animationActive, animationSpeed, colorActive } = inject('decorations', { animationActive: false, animationSpeed: 50, colorActive: false });

  const sC = 'stopColor', c0 = '#E057F2', c1 = '#F2490C', c2 = '#F28705', c3 = '#04d94b', c4 = '#04C4D9', c5 = '#5D04D9';
  const gradientColor0 = [{ [sC]: c0 }, { [sC]: c5 }, { [sC]: c4 }, { [sC]: c3 }, { [sC]: c2 }, { [sC]: c1 }, { [sC]: c0 }];
  const gradientColor1 = [{ [sC]: c1 }, { [sC]: c0 }, { [sC]: c5 }, { [sC]: c4 }, { [sC]: c3 }, { [sC]: c2 }, { [sC]: c1 }];
  const gradientColor2 = [{ [sC]: c2 }, { [sC]: c1 }, { [sC]: c0 }, { [sC]: c5 }, { [sC]: c4 }, { [sC]: c3 }, { [sC]: c2 }];
  const gradientColor3 = [{ [sC]: c3 }, { [sC]: c2 }, { [sC]: c1 }, { [sC]: c0 }, { [sC]: c5 }, { [sC]: c4 }, { [sC]: c3 }];
  const gradientColor4 = [{ [sC]: c4 }, { [sC]: c3 }, { [sC]: c2 }, { [sC]: c1 }, { [sC]: c0 }, { [sC]: c5 }, { [sC]: c4 }];
  const gradientColor5 = [{ [sC]: c5 }, { [sC]: c4 }, { [sC]: c3 }, { [sC]: c2 }, { [sC]: c1 }, { [sC]: c0 }, { [sC]: c5 }];
  const gradientTiming = { duration: 5000, iterations: Number.MAX_SAFE_INTEGER };

  const animationStop0 = stop0.value.animate(gradientColor0, gradientTiming);
  const animationStop1 = stop1.value.animate(gradientColor1, gradientTiming);
  const animationStop2 = stop2.value.animate(gradientColor2, gradientTiming);
  const animationStop3 = stop3.value.animate(gradientColor3, gradientTiming);
  const animationStop4 = stop4.value.animate(gradientColor4, gradientTiming);
  const animationStop5 = stop5.value.animate(gradientColor5, gradientTiming);

  animationStop0.currentTime = Number.MAX_SAFE_INTEGER / 2;
  animationStop1.currentTime = Number.MAX_SAFE_INTEGER / 2;
  animationStop2.currentTime = Number.MAX_SAFE_INTEGER / 2;
  animationStop3.currentTime = Number.MAX_SAFE_INTEGER / 2;
  animationStop4.currentTime = Number.MAX_SAFE_INTEGER / 2;
  animationStop5.currentTime = Number.MAX_SAFE_INTEGER / 2;

  watchEffect(() => {
    const playBack = animationSpeed.value;
    animationStop0.playbackRate = playBack;
    animationStop1.playbackRate = playBack;
    animationStop2.playbackRate = playBack;
    animationStop3.playbackRate = playBack;
    animationStop4.playbackRate = playBack;
    animationStop5.playbackRate = playBack;

    if (animationActive.value && colorActive.value) {
      animationStop0.play()
      animationStop1.play()
      animationStop2.play()
      animationStop3.play()
      animationStop4.play()
      animationStop5.play()
    }
    else {
      animationStop0.pause()
      animationStop1.pause()
      animationStop2.pause()
      animationStop3.pause()
      animationStop4.pause()
      animationStop5.pause()
    };
  })
};

// COMPOSABLE LAYOUT
//   IMPORT: inject, watchEffect
//   EXPORT: animationActive(stop0-stop5) - SVG GRADIENT ANIMATION, TAKES STOP REFS AS PARAMETERS
      // INJECT: animationActive, animationSpeed, colorActive
      // CONST: gradientColor0-gradientColor5 - JS ANIMATION OBJECT FOR GIVEN STOP-COLOR SHIFT
      // CONST: gradientTiming - DEFAULT ANIMATION SPEED 5s, MAX SAFE NUM ITERATIONS
      // CONST: animationStop0-animationStop5 - VARIABLES FOR GIVEN STOP ANIMATION
      // animationStop0.currentTime-animationStop5.currentTime - SET TIMING IN MIDDLE TO ALLOW FOR REVERSING OF ANIMATION
      // watchEffect - TRIGGERS ON CHANGES TO animationActive, animationSpeed, colorActive
        // CONST: playback - LOCAL VALUE FOR animationSpeed, MULTIPLIER OF DEFAULT (5s, FORWARD) FROM -5x TO 5x, WHERE NEGATIVE IS PLAYED BACKWARDS
          // animationStop0.playbackRate-animationStop0.playbackRate - SET ANIMATION SPEED TO playback MULTIPLIER
        // IF: animationActive && colorActive - PLAY ANIMATION FOR animationStop0-animationStop5
        // ELSE - PAUSE ANIMATION FOR animationStop0-animationStop5
