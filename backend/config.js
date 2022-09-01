export default {
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://quintadocabril:B22ldqg53vefxBUJ@cluster0.zr2pdzi.mongodb.net/?retryWrites=true&w=majority",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
};
