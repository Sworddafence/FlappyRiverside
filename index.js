import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Bird from "./Bird/Bird.js";
import Pipes from "./Pipes/Pipes.js";
import Ground from "./Ground/Ground.js";
import Logo from "./Logo/Logo.js";
import BeginSign from "./BeginSign/BeginSign.js";
import Leaderboard from "./Leaderboard/Leaderboard.js";
import Twitter from "./Twitter/Twitter.js";
import Mode from "./Mode/Mode.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Bird: new Bird({
    x: 110,
    y: 100,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: true
  }),
  Pipes: new Pipes({
    x: 112,
    y: 39,
    direction: 90,
    costumeNumber: 2,
    size: 150,
    visible: false
  }),
  Ground: new Ground({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: true
  }),
  Logo: new Logo({
    x: -20,
    y: 100,
    direction: 90,
    costumeNumber: 2,
    size: 60,
    visible: true
  }),
  BeginSign: new BeginSign({
    x: 0,
    y: -15,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true
  }),
  Leaderboard: new Leaderboard({
    x: 0,
    y: 50,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Twitter: new Twitter({
    x: 180,
    y: -150,
    direction: 90,
    costumeNumber: 2,
    size: 50,
    visible: true
  }),
  Mode: new Mode({
    x: 0,
    y: 50,
    direction: 90,
    costumeNumber: 4,
    size: 170,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
