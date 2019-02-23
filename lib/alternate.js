function alternate(functionA, functionB) {
  if (frameCount % 2) {
    functionA();
    functionB();
  } else {
    functionB();
    functionA();
  }
}
