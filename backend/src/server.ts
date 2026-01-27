import Fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";

const App = Fastify({ logger: true });

const start = async () => {
  await App.register(cors);
  await App.register(routes);

  try {
    await App.listen({ port: 3333 });
  } catch (err) {
    process.exit(1);
  }
};

start();
