const getTestingElement = (container, selector) => container.find(`[data-test="${selector}"]`);

export default getTestingElement;
