import { createPinia } from "pinia";
import debounce from "lodash/debounce";
const pinia = createPinia();

type ObjType = {
  [key: string]: any;
};
// 참고
// https://velog.io/@yyeonjju/TypeScript-Index-Signature-string-key%EB%A1%9C-%EA%B0%9D%EC%B2%B4%EC%97%90-%EC%A0%91%EA%B7%BC%ED%95%98%EA%B8%B0

pinia.use(({ options, store }) => {
  // * Subscribing to actions
  if (store) {
    store.$onAction(({ name, args, after, onError }) => {
      console.log(
        `%c 🍍 Event Name: ${name}`,
        "background: #222; color: #bada55"
      );
      const startTime = Date.now();
      console.log(
        `%c 🍍 Start: '${name}' with params [${args.join(", ")}].`,
        "background: #222; color: #bada55"
      );
      after((result) => {
        console.log(
          `%c 🍍 Finished: '${name}' after ${
            Date.now() - startTime
          }ms.\nResult: ${result}.`,
          "background: #222; color: #bada55"
        );
      });
      onError((error) => {
        console.log(
          `%c 🍍 Failed "${name}" after ${
            Date.now() - startTime
          }ms.\nError: ${error}.`,
          "background: red; color: white"
        );
      });
    });
  }

  // * Debounce
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
