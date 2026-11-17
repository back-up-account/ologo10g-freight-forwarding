import { processSteps } from "@/lib/site";

export function ProcessList() {
  return (
    <ol className="process-list">
      {processSteps.map((step) => (
        <li className="process-step" key={step.number}>
          <span className="process-number">{step.number}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
