// context
import { AuthContext } from "context/auth-context";

// merge_components utils
import merge_components from "./merge-components-utils";


// array of context (manually write all the context here..)
const providers = [
  AuthContext
]


export const ALL_CONTEXTS_PROVIDER = merge_components(...providers)