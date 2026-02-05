import Fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";

const App = Fastify({ logger: true });

const start = async () => {
  await App.register(cors, {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
  });
  await App.register(routes);

  try {
    await App.listen({ port: 3333 });
  } catch (err) {
    process.exit(1);
  }
};

start();
