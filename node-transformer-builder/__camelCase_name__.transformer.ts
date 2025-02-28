// {{pascalCase name}} model transformer
import { I{{pascalCase name}}Model } from "../../models/{{camelCase name}}/{{pascalCase name}}.types";

// Returns a clean document of a {{camelCase name}} according to its permissions
export const {{camelCase name}}Transformer = (
  {{camelCase name}}Doc: Partial<I{{pascalCase name}}Model>,
  authLevel: number
) => {
  if (authLevel === 0) {
    return {{camelCase name}}TransformerDefault({{camelCase name}}Doc);
  }
  if (authLevel === 1) {
    return {{camelCase name}}TransformerAdmin({{camelCase name}}Doc);
  } else if (authLevel === 2) {
    return {{camelCase name}}TransformerSuperAdmin({{camelCase name}}Doc);
  }
};

export const {{camelCase name}}TransformerDefault = ({{ camelCase name}}Doc: Partial<I{{ pascalCase name}}Model>) => {
  // Destruct wanted data
  const { _id } = {{camelCase name}}Doc;
  // Return transformed doc;
  return {
    id: _id
  };
};

export const {{camelCase name}}TransformerAdmin = ({{ camelCase name}}Doc: Partial<I{{ pascalCase name }}Model>) => {
  const partialDoc = {{camelCase name}}TransformerDefault({{ camelCase name}}Doc);
  // Destruct wanted data
  const { createdAt, updatedAt } = {{camelCase name}}Doc;
  // Return transformed doc;
  return {
    ...partialDoc,
    createdAt,
    updatedAt
  };
};

export const {{camelCase name}}TransformerSuperAdmin = ({{camelCase name}}Doc: Partial<I{{pascalCase name}}Model>) => {
  const partialDoc = {{camelCase name}}TransformerAdmin({{ camelCase name}}Doc);
  // Destruct wanted data
  const { deleted } = {{camelCase name}}Doc;
  // Return transformed doc;
  return {
    ...partialDoc,
    deleted
  };
};