const morarchCats = ["Garfield", "Felix"];

export const morningGreet = (name: string) => {
  let greet = "Good morning ";

  if (morarchCats.includes(name)) {
    greet = "Good morning, you MAJESTY ";
  }
  return `${greet} ${name}`;
};
