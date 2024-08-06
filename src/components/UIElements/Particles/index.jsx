import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import {DARK_THEME_PARTICLES, LIGHT_THEME_PARTICLES} from "./ParticleType";
import {useThemeContext} from "../../../hooks/themeHook/themeHook";
import {useCallback} from "react";
import {loadSlim} from "@tsparticles/slim";
const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  const {dark} = useThemeContext();
  const particlesOptions = dark ? DARK_THEME_PARTICLES : LIGHT_THEME_PARTICLES;

  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      // await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          // init={particlesInit}
          options={{
            particles: particlesOptions,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  quantity: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
      )}
    </>
  );
};

export default ParticlesComponent;
