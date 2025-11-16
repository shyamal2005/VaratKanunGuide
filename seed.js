import connectDB from "./database.js";
import Law from "./models/Law.js";
import lawsData from "./importData.js";

const seed = async () => {
  await connectDB();
  await Law.deleteMany();
  await Law.insertMany(lawsData);
  console.log("✅ Data seeded");
  process.exit();
};

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
