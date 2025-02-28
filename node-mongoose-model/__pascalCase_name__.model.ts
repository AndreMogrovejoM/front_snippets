import mongoose, { Schema } from "mongoose";

import { I{{ pascalCase name }}Model } from "./{{ pascalCase name }}.types";

const {{ camelCase name }}Schema: Schema<I{{ pascalCase name }}Model> = new mongoose.Schema({
  
});

const {{ pascalCase name }} = mongoose.model<I{{ pascalCase name }}Model>(
  "{{pascalCase name}}",
  {{ camelCase name }}Schema
);

export default {{ pascalCase name }};