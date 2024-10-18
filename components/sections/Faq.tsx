import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="mb-32" id="faq">
      <div className="container">
        <div className="flex gap-20 max-lg:flex-col max-lg:text-center">
          <div className="w-2/5 max-lg:w-full">
            <h2 className="text-4xl font-bold mb-5">Frequently Asqued Questions</h2>
            <p>piente optio repellendus atque illum odio! Fugiat at expedita deserunt dolorum molestias.</p>
          </div>
          <div className="w-3/5 max-lg:w-full">
            <Accordion type="single" collapsible className="text-start">
              <AccordionItem value="item-1">
                <AccordionTrigger>How to customize the template ?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatibus explicabo voluptatum
                  praesentium laboriosam? Facilis consequatur doloremque omnis ad libero.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How many times can I use the template ?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magnam!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>FAQ 3</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, nemo repudiandae quasi quis
                  reprehenderit eos?
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
