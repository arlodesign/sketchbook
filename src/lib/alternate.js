export default function alternate(frameCount, functionA, functionB) {
  if (frameCount % 2) {
    functionA();
    functionB();
  } else {
    functionB();
    functionA();
  }
}
