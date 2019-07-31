import { IHubspotObject } from "../interfaces/hubspot.interface";

const parseHSBody = (body: any) => {
	let hubspotObject: Array<IHubspotObject> = new Array();
	for (var key in body) {
		hubspotObject.push({ property: key, value: body[key] });
	}
	return hubspotObject;
};

export default parseHSBody;

// {
//   "properties": [
//     {
//       "property": "email",
//       "value": "testingapis@hubspot.com"
//     },
//     {
//       "property": "firstname",
//       "value": "Adrian"
//     },
//     {
//       "property": "lastname",
//       "value": "Mott"
//     },
//     {
//       "property": "website",
//       "value": "http://hubspot.com"
//     },
//     {
//       "property": "company",
//       "value": "HubSpot"
//     },
//     {
//       "property": "phone",
//       "value": "555-122-2323"
//     },
//     {
//       "property": "address",
//       "value": "25 First Street"
//     },
//     {
//       "property": "city",
//       "value": "Cambridge"
//     },
//     {
//       "property": "state",
//       "value": "MA"
//     },
//     {
//       "property": "zip",
//       "value": "02139"
//     }
//   ]
// }
