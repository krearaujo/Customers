import { FastifyRequest, FastifyReply } from "fastify";
import { ListCostumersService } from "../services/ListCustomersService";

class ListCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomersService = new ListCostumersService();
    const customers = await listCustomersService.execute();
    reply.send(customers);
  }
}

export { ListCustomersController };
