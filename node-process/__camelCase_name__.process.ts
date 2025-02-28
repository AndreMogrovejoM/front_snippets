// {{ name }} process
import { Request } from "express";

import { Process } from "../process.types";
import { {{camelCase name }}Validator } from "../../validators/entity/{{camelCase name}}.validator";
import { {{camelCase name }}Repository } from "../../repositories/entity/{{camelCase name}}.repository";
import { {{camelCase name }}Transformer } from "../../transformers/entity/{{camelCase name}}.transformer";
import { {{pascalCase name }}Payload, IEntity } from "../../types/entity.types";

export const {{camelCase name }}Process: Process<IEntity> = async (req: Request) => {
  const { }: {{pascalCase name }}Payload = req.body;
  const { auth } = req;

  // Validate body
  {{camelCase name }}Validator(req.body);
  // Build entity
  const entityData: {{pascalCase name }}Payload = {};
  // Send to repository
  const { document } = await {{camelCase name }}Repository(entityData);
  // Send to transformer & return success
  const authLevel = auth?.role?.level || 0;
  return {{camelCase name }}Transformer(document, authLevel);
};
