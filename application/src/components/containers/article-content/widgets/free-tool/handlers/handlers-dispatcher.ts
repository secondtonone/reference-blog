const handlersDispatcher = <T extends {[key: string]:(e:Event) => void}>(
  selector: string,
  handlers: T
) => {
  document
    .querySelector(selector)
    .addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      const attribute = button?.dataset?.test;

      if (attribute && handlers[attribute]) handlers[attribute](e);
    });
};

export default handlersDispatcher;
