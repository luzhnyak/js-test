function isValidWalk(walk) {
  const countN = walk.filter((direction) => direction === "n").length;
  const countS = walk.filter((direction) => direction === "s").length;
  const countE = walk.filter((direction) => direction === "e").length;
  const countW = walk.filter((direction) => direction === "w").length;
  return countN === countS && countE === countW && walk.length === 10;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // Output: true
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
