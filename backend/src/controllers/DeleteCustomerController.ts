import { DeleteCustomerService } from "../services/DeleteCustomer";
import { FastifyRequest, FastifyReply } from "fastify";

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    console.log("DeleteCustomerController called", {
      query: request.query,
      params: request.params,
    });
    const { id } = request.query as { id: string };

    const customerService = new DeleteCustomerService();

    const customer = await customerService.execute({ id });

    reply.send(customer);
  }
}

export { DeleteCustomerController };
