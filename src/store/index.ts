import { createPinia } from "pinia";
import debounce from "lodash/debounce";
const pinia = createPinia();

type ObjType = {
  [key: string]: any;
};

pinia.use(({ options, store }) => {
  if (options.debounce) {
    return Object.keys(options.debounce).reduce(
      (debouncedActions, action: string) => {
        if (debouncedActions) {
          const d = options.debounce as ObjType;
          debouncedActions[action] = debounce(store[action], d[action]);
        }
        return debouncedActions;
      },
      {} as ObjType
    );
  }
});

export default pinia;
