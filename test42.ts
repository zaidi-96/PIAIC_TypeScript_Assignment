function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (let magician of magicians) {
      great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
  }
  
  const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  const great_magicians: string[] = make_great([...magicians]);
  console.log(magicians);
  console.log(great_magicians);
  