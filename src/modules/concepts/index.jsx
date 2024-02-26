import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "./core/index.jsx";

const Concepts = () => {
  return (
    <>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item, _) => (
            <li key={item.title}>
              <CoreConcept {...item} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Concepts;
