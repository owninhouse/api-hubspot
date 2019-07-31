import { Router, Request, Response, NextFunction } from "express";
import axios from "axios";
import erroMiddleware from "../../helpers/middlewares/error-middleware";
import parseHSBody from "../../services/hubspot-create-contact.service";
import * as config from "../../config";

class HubspotController {
	public path = "/hubspot";
	public router = Router();

	constructor() {
		this.intializeRoutes();
	}

	private intializeRoutes() {
		this.router.post(this.path, this.addUser);
	}

	private addUser = async (
		request: Request,
		response: Response,
		next: NextFunction,
	) => {
		try {
			const bodyHS = parseHSBody(request.body);

			const contact = await axios.post(
				`${config.HURL}/contacts/v1/contact/?hapikey=${config.HUBSPOT_API_KEY}`,
				{ properties: bodyHS },
			);
			response.send(contact.data);
		} catch (error) {
			erroMiddleware(error, request, response, next);
		}
	};
}

export default HubspotController;
