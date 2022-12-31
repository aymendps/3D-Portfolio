/*
auto-generated by: https://github.com/pmndrs/gltfjsx
author of gltf: RussianV0dka123 (https://sketchfab.com/russianv0dka123)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/detectives-office-in-noir-style-929e20ad5edf43c2963e778d95b03100
title: Detective's office in Noir style
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import OfficePaper from "./OfficePaper";
import { useThree } from "@react-three/fiber";
import { QUESTS } from "../MainCanvas";

export default function Office({
  showDeskMenu,
  completeQuest,
  addQuest,
  setShowThisPage,
  allowActionControls,
  isQuestFinished,
}) {
  const { nodes, materials } = useGLTF("/assets/models/office/scene.gltf");
  const roof = materials.bookshelf.clone();
  roof.color.set("grey");
  roof.roughness = 1;
  materials.wood_floor.roughness = 1;
  const group = useRef(null);
  const { gl } = useThree();

  return (
    <group ref={group} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-2.46, 1.3, -4.44]} scale={[1.13, 1.17, 0.68]}>
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.drawers}
            />
          </group>
          {/* About me */}
          <group position={[0, 0, 0.4]}>
            <group position={[2.03, 1.14, 0.5]}>
              <mesh
                castShadow
                geometry={nodes.Object_16.geometry}
                material={materials.bookshelf}
              />
            </group>
            <OfficePaper
              showDeskMenu={showDeskMenu}
              allowActionControls={allowActionControls}
              node={nodes.Object_8.geometry}
              material={materials.paper.clone()}
              position={[0.55, 1.76, -3.9]}
              spritePosition={[0.8, 0.7, 5.42]}
              spriteURL="/assets/images/portfolio.png"
              gl={gl}
              completeQuest={() => {
                completeQuest(QUESTS.me_portfolio);
                if (
                  isQuestFinished(QUESTS.me_about) === true &&
                  isQuestFinished(QUESTS.me_skills) === true
                ) {
                  addQuest(QUESTS.end);
                }
              }}
              setShowThisPage={() => {
                setShowThisPage("portfolio");
              }}
            />
            <OfficePaper
              showDeskMenu={showDeskMenu}
              allowActionControls={allowActionControls}
              node={nodes.Object_8.geometry}
              material={materials.paper.clone()}
              position={[0.55, 1.76, -5.05]}
              spritePosition={[0.8, 0.7, 5.58]}
              spriteURL="/assets/images/about.png"
              gl={gl}
              completeQuest={() => {
                completeQuest(QUESTS.me_about);
                if (
                  isQuestFinished(QUESTS.me_portfolio) === true &&
                  isQuestFinished(QUESTS.me_skills) === true
                ) {
                  addQuest(QUESTS.end);
                }
              }}
              setShowThisPage={() => {
                setShowThisPage("about");
              }}
            />
            <OfficePaper
              showDeskMenu={showDeskMenu}
              allowActionControls={allowActionControls}
              node={nodes.Object_8.geometry}
              material={materials.paper.clone()}
              position={[0.55, 1.76, -6.2]}
              spritePosition={[0.8, 0.7, 5.75]}
              spriteURL="/assets/images/skills.png"
              gl={gl}
              completeQuest={() => {
                completeQuest(QUESTS.me_skills);
                if (
                  isQuestFinished(QUESTS.me_about) === true &&
                  isQuestFinished(QUESTS.me_portfolio) === true
                ) {
                  addQuest(QUESTS.end);
                }
              }}
              setShowThisPage={() => {
                setShowThisPage("skills");
              }}
            />
          </group>
          <group scale={5.2}>
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.wall_green}
            />
            <mesh
              geometry={nodes.Object_11.geometry}
              material={materials.wall_wood}
            />
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.dark_wood}
            />
          </group>
          <group rotation={[0, Math.PI, 0]} scale={5.2}>
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.wall_green}
            />
            <mesh
              geometry={nodes.Object_11.geometry}
              material={materials.wall_wood}
            />
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.dark_wood}
            />
          </group>
          <group position={[5.03, 5.81, 0.91]} scale={[0.03, 0.11, 1]}>
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials.grey_metal}
            />
          </group>
          <group scale={1}>
            <mesh
              geometry={nodes.Object_18.geometry}
              material={materials.carpet}
            />
          </group>
          <group scale={5.2}>
            <mesh
              geometry={nodes.Object_23.geometry}
              material={materials.wood_floor}
            />
          </group>
          <group position={[0, 7.5, 0]} scale={5.2}>
            <mesh geometry={nodes.Object_23.geometry} material={roof} />
          </group>
          <group scale={5.2}>
            <mesh
              geometry={nodes.Object_34.geometry}
              material={materials.dark_wood}
            />
          </group>
          {/*DRAWER KNOBS 1.12*/}
          {/* <group
            position={[-3.09, 2.77, -3.68]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1.12}
          >
            <mesh
              geometry={nodes.Object_43.geometry}
              material={materials.dark_wood}
            />
          </group> */}
          {/* <group
            position={[-1.71, 2.77, -3.68]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1.12}
          >
            <mesh
              geometry={nodes.Object_45.geometry}
              material={materials.dark_wood}
            />
          </group> */}
          {/* <group
            position={[-1.71, 2.77, -3.68]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1.12}
          >
            <mesh
              geometry={nodes.Object_47.geometry}
              material={materials.dark_wood}
            />
          </group> */}
          <group
            position={[-3.09, 2.1, -3.68]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1.12}
          >
            <mesh
              geometry={nodes.Object_49.geometry}
              material={materials.dark_wood}
            />
          </group>
          <group
            position={[-1.71, 2.1, -3.68]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1.12}
          >
            <mesh
              geometry={nodes.Object_51.geometry}
              material={materials.dark_wood}
            />
          </group>
          <group
            position={[-3.09, 1.02, -3.68]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1.12}
          >
            <mesh
              geometry={nodes.Object_53.geometry}
              material={materials.dark_wood}
            />
          </group>
          <group
            position={[-1.71, 1.02, -3.68]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1.12}
          >
            <mesh
              geometry={nodes.Object_55.geometry}
              material={materials.dark_wood}
            />
          </group>
          <group position={[3.5, 0.56, 0.9]} scale={0.05}>
            <mesh
              geometry={nodes.Object_57.geometry}
              material={materials.chair_wood}
            />
          </group>
          <group position={[0, 0, -2.5]} scale={[1, 1.1, 0.5]}>
            <group position={[1.87, 2.59, -3.93]} scale={[2, 2.62, 1]}>
              <mesh
                geometry={nodes.Object_4.geometry}
                material={materials.bookshelf}
              />
            </group>
            <group position={[1.87, 2.59, -3.93]} scale={[2, 2.62, 1]}>
              <mesh
                geometry={nodes.Object_59.geometry}
                material={materials.book}
              />
            </group>
            <group position={[4.09, 2.59, -3.93]} scale={[2, 2.62, 1]}>
              <mesh
                geometry={nodes.Object_61.geometry}
                material={materials.book}
              />
            </group>
            <group
              position={[3.37, 2.05, -3.34]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[1.34, 1.76, 0.67]}
            >
              <mesh
                geometry={nodes.Object_63.geometry}
                material={materials.book}
              />
            </group>
            <group
              position={[2.68, 2.05, -3.34]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[1.34, 1.76, 0.67]}
            >
              <mesh
                geometry={nodes.Object_65.geometry}
                material={materials.book}
              />
            </group>
            <group position={[1.86, 5.77, -3.93]} scale={[2, 2.62, 1]}>
              <mesh
                geometry={nodes.Object_67.geometry}
                material={materials.book}
              />
            </group>
            <group position={[-0.09, 3.03, -3.34]} scale={[1.63, 2.14, 0.82]}>
              <mesh
                geometry={nodes.Object_69.geometry}
                material={materials.book}
              />
            </group>
            <group
              position={[2.78, 4.15, -3.34]}
              rotation={[0, 0, -0.22]}
              scale={[1.91, 2.51, 0.96]}
            >
              <mesh
                geometry={nodes.Object_71.geometry}
                material={materials.book}
              />
            </group>
            <group
              position={[2.96, 4.15, -3.34]}
              rotation={[0, 0, -0.22]}
              scale={[1.91, 2.51, 0.96]}
            >
              <mesh
                geometry={nodes.Object_73.geometry}
                material={materials.book}
              />
            </group>
            <group
              position={[3.16, 4.15, -3.34]}
              rotation={[0, 0, -0.22]}
              scale={[1.91, 2.51, 0.96]}
            >
              <mesh
                geometry={nodes.Object_75.geometry}
                material={materials.book}
              />
            </group>
            <group
              position={[3.38, 4.15, -3.34]}
              rotation={[0, 0, -0.22]}
              scale={[1.91, 2.51, 0.96]}
            >
              <mesh
                geometry={nodes.Object_77.geometry}
                material={materials.book}
              />
            </group>
            <group
              position={[1.85, 0.99, -3.34]}
              rotation={[0, 0, -0.22]}
              scale={[1.91, 2.51, 0.96]}
            >
              <mesh
                geometry={nodes.Object_79.geometry}
                material={materials.book}
              />
            </group>
            <group
              position={[2.04, 0.99, -3.34]}
              rotation={[0, 0, -0.22]}
              scale={[1.91, 2.51, 0.96]}
            >
              <mesh
                geometry={nodes.Object_81.geometry}
                material={materials.book}
              />
            </group>
            <group
              position={[0.69, 3.06, -3.34]}
              rotation={[0, 0, 0.53]}
              scale={[1.91, 2.51, 0.96]}
            >
              <mesh
                geometry={nodes.Object_83.geometry}
                material={materials.book}
              />
            </group>
            <group
              position={[0.92, 3.07, -3.34]}
              rotation={[0, 0, 0.53]}
              scale={[1.91, 2.51, 0.96]}
            >
              <mesh
                geometry={nodes.Object_85.geometry}
                material={materials.book}
              />
            </group>
            <group
              position={[1.15, 3.07, -3.34]}
              rotation={[0, 0, 0.53]}
              scale={[1.91, 2.51, 0.96]}
            >
              <mesh
                geometry={nodes.Object_87.geometry}
                material={materials.book}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
