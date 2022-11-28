import Dexie from "dexie";

export const db = new Dexie("colorFactory");
db.version(1).stores({
  newColors: "++id, colorName, colorCode",
});
