import { Model } from "./model";
import { Questions } from "./model";
import { View } from "./view";
import { Controller } from "./controller";
const task = new Controller(new View(), new Model(), new Questions());
