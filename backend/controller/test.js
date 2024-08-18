import { RESPONSE_CODE } from "../constants/response-code.js";
import { response } from "../utils/response.js";

export const test = async (_, res) => {
  try {
    console.log("Recived request to test API.");
    return res
      .status(RESPONSE_CODE.OK)
      .json(response(true, "Test API working."));
  } catch (error) {
    console.error(`Failed to test API: ${error}`);
    return res
      .status(RESPONSE_CODE.INTERNAL_SERVER_ERROR)
      .json(response(false, "Some error occurred. Please try again.", {}));
  }
};
