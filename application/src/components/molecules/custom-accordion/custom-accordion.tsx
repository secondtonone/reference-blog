import Accordion from '@semcore/accordion';

interface Props {
  items: {
    title: React.ReactNode
    content: React.ReactNode
  }[]
}

const CustomAccordion: React.FC<Props> = ({ items }) => (
  <Accordion data-test="accordion-block">
    {items.map(({ title, content }, index: number) => (
      <Accordion.Item data-test="accordion-item" value={index} key={`accordion-item-${title}`}>
        {() => (
          <>
            <Accordion.Item.Toggle data-test="accordion-item-toggle">
              {title}
            </Accordion.Item.Toggle>
            <Accordion.Item.Collapse data-test="accordion-item-content">
              {content}
            </Accordion.Item.Collapse>
          </>
        )}
      </Accordion.Item>
    ))}
  </Accordion>
);
export default CustomAccordion;
