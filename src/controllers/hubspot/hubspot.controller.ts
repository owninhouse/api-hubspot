import { Router, Request, Response, NextFunction } from "express";
import axios from 'axios';
import * as config from "../../config";

class HubspotController {
  public path = "/hubspot";
  public router = Router();

  constructor() {
    this.intializeRoutes();
  }

  private intializeRoutes() {
    this.router.post(this.path, this.getAllUsers);
  }

  private getAllUsers = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const body = { "properties":
      [
        {
          "property": "email",
          "value": "testingapis2@hubspot.com"
        },
        {
          "property": "firstname",
          "value": "Adrian"
        },
        {
          "property": "lastname",
          "value": "Mott"
        },
        {
          "property": "website",
          "value": "http://hubspot.com"
        },
        {
          "property": "company",
          "value": "HubSpot"
        },
        {
          "property": "phone",
          "value": "555-122-2324"
        },
        {
          "property": "address",
          "value": "25 First Street"
        },
        {
          "property": "city",
          "value": "Cambridge"
        },
        {
          "property": "state",
          "value": "MA"
        },
        {
          "property": "zip",
          "value": "02139"
        }
      ]}
      const contact = await axios.post(`${config.HURL}/contacts/v1/contact/?hapikey=${config.HUBSPOT_API_KEY}`, body);
      response.send(contact.data);
    } catch (error) {
      console.log(error)
    }
  };
}

export default HubspotController;
