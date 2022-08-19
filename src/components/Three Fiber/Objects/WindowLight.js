// import { useFrame } from "@react-three/fiber";
// import { Color } from "three";
// import { useHelper } from "@react-three/drei/core";
// import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
// import { PointLightHelper } from "three";
import { useEffect, useRef, useState } from "react";
import { randFloat } from "three/src/math/MathUtils";

function WindowLight({ startIntro, thunderAudioRef, musicVolume }) {
  const rectAreaLightRef = useRef(null);
  const pointLightRef = useRef(null);

  const [thunderTimer, setThunderTimer] = useState(0);

  const musicVolumeRef = useRef(musicVolume);
  musicVolumeRef.current = musicVolume;

  useEffect(() => {
    if (startIntro === true) {
      setThunderTimer(15000);
    }
  }, [startIntro]);

  useEffect(() => {
    let timeout;

    if (thunderTimer) {
      timeout = setTimeout(() => {
        rectAreaLightRef.current.color.set("white");
        timeout = setTimeout(() => {
          rectAreaLightRef.current.intensity = 20;
          timeout = setTimeout(() => {
            rectAreaLightRef.current.intensity = 10;
            timeout = setTimeout(() => {
              rectAreaLightRef.current.intensity = 15;
              timeout = setTimeout(() => {
                rectAreaLightRef.current.intensity = 10;
                timeout = setTimeout(() => {
                  rectAreaLightRef.current.intensity = 5;
                  rectAreaLightRef.current.color.set("pink");
                  timeout = setTimeout(() => {
                    if (musicVolumeRef.current !== 0) {
                      thunderAudioRef.current.play();
                    }
                    setThunderTimer(randFloat(10000, 25000));
                  }, 100);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, thunderTimer);
    }

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thunderTimer]);

  // useHelper(rectAreaLightRef, RectAreaLightHelper, "#222222");
  // useHelper(pointLightRef, PointLightHelper, 1, "red");

  return (
    <>
      {
        <rectAreaLight
          position={[5.15, 4.2, 0.9]}
          rotation={[0, Math.PI / 2, 0]}
          width={2.55}
          height={4}
          intensity={5}
          ref={rectAreaLightRef}
          color={"pink"}
        />
      }
      <pointLight
        position={[3, 4.2, 0.9]}
        intensity={0.15}
        ref={pointLightRef}
        color={"pink"}
      />
    </>
  );
}

export default WindowLight;
