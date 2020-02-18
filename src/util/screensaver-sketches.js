import { sketch as sketch20191016 } from "../pages/sketch/2019/10/16";
import { sketch as sketch20191118 } from "../pages/sketch/2019/11/18";
import { sketch as sketch20191130 } from "../pages/sketch/2019/11/30";
import { sketch as sketch20200113 } from "../pages/sketch/2020/01/13";
import { sketch as sketch20200217 } from "../pages/sketch/2020/02/17";

import shuffle from "~lib/shuffle";

const sketches = shuffle([
  sketch20191016,
  sketch20191118,
  sketch20191130,
  sketch20200113,
  sketch20200217,
]);

export default sketches;
