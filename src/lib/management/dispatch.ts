import type { Action } from "./Actions";
import { stateManager } from "./stateManager";

export const dispatch = (action: Action) => stateManager(action)