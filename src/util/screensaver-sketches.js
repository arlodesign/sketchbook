import { sketch as sketch20190709 } from "../pages/sketch/2019/07/09";
import { sketch as sketch20191016 } from "../pages/sketch/2019/10/16";
import { sketch as sketch20191118 } from "../pages/sketch/2019/11/18";
import { sketch as sketch20191126 } from "../pages/sketch/2019/11/26";
import { sketch as sketch20191130 } from "../pages/sketch/2019/11/30";
import { sketch as sketch20200113 } from "../pages/sketch/2020/01/13";
import { sketch as sketch20200204 } from "../pages/sketch/2020/02/04";
import { sketch as sketch20200217 } from "../pages/sketch/2020/02/17";

import shuffle from "~lib/shuffle";

const sketches = shuffle([
  sketch20190709,
  sketch20191016,
  sketch20191118,
  sketch20191126,
  sketch20191130,
  sketch20200113,
  sketch20200204,
  sketch20200217,
]);

export default sketches;
