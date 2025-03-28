import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

export function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: {
          opacity: 0
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: ['#FF6F61', '#6366f1', '#2B3A67']
          },
          links: {
            color: '#FF6F61',
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1
          },
          move: {
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 0.8,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 1000
            },
            value: 100
          },
          opacity: {
            value: 0.15
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true
      }}
    />
  );
}