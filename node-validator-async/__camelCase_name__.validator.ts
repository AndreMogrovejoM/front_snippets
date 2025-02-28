// {{name}} validator
import Validator from "validatorjs";

import { {{pascalCase name}}Payload } from "../../types/entity.types";
import { ValidatorRes } from "../../types/common.types";
import { Errors } from "../../utils/errors/errors.utils.helpers";
import { getAsyncValidationResponse } from "../../utils/common/common.utils";

export const {{camelCase name}}Validator = (payload: {{pascalCase name}}Payload) => {
  return new Promise<ValidatorRes>((resolve, reject) => {
    const rules = {};
    const validation = new Validator(payload, rules);
    const errorCode = Errors.operationEntity.code;
    const sendResponse = () => getAsyncValidationResponse(validation, errorCode, resolve, reject);
    validation.checkAsync(sendResponse, sendResponse);
  });
};
