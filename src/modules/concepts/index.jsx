import { CORE_CONCEPTS } from "../../data.js";
import Section from "../section/index.jsx";
import CoreConcept from "./core/index.jsx";

const Concepts = () => {
  return (
    <>
      <Section title="Core Concepts" id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((item, _) => (
            <li key={item.title}>
              <CoreConcept {...item} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default Concepts;
