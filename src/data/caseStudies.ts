export interface CaseStudy {
  id: string;
  shortTitle: string;
  title: string;
  sector: string;
  /** Headline proof — leads the card. */
  metric: { value: string; label: string };
  /** What the situation was and what got built. Two sentences. */
  context: string;
  /** My role, one compact statement. */
  role: string;
  /** How it was built — concrete bullets. */
  approach: string[];
  /** The one non-obvious thing that made this engagement work. */
  insight: string;
  /** Outcomes first, verifiable, no padding. */
  results: string[];
  /** Which schematic to render. */
  diagram: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "message-generation",
    shortTitle: "Message generation",
    title: "AI message generation for sales advisors",
    sector: "Global luxury group",
    metric: { value: "3×", label: "productivity on client outreach" },
    context:
      "Sales advisors wrote client outreach by hand: slow, uneven, and impossible to scale what worked. This system gives every advisor personalised, on-brand messages, deployed at global scale.",
    role:
      "AI lead. Owned architecture and LLM strategy, the evaluation framework, and pilot-to-rollout coordination between business and tech teams.",
    approach: [
      "Generation grounded in client history, advisor-provided context and brand voice guidelines",
      "Claude-powered generation microservice on GCP (Vertex AI, Cloud Run)",
      "Tone, formats and guardrails shaped with field teams across use-cases and languages",
    ],
    insight:
      "Field teams shaped tone, format and guardrails from the first prototype, so advisors trusted the tool by the time it reached their stores. Each eval cycle handed leadership a defensible quality score, and that score is what unlocked sponsorship for every next stage.",
    results: [
      "3× productivity on message creation",
      "Eval framework adopted as the group-wide standard for production readiness",
    ],
    diagram: "message-generation",
  },
  {
    id: "novelties-recommendation",
    shortTitle: "Recommendation engine",
    title: "Novelties recommendation engine",
    sector: "Luxury fashion retailer",
    metric: { value: "+1pt", label: "conversion uplift in live A/B campaigns" },
    context:
      "New arrivals drive fashion retail, yet classic recommenders ignore products with no purchase history. This engine finds the right novelties for each client, feeding both in-store curation and targeted campaigns.",
    role:
      "Lead data scientist, end to end: scoping and business case, data pipelines, model development, A/B test design, production deployment on GCP.",
    approach: [
      "Two-tower model: RNN and attention over omnichannel purchase history on one side, multi-modal product attributes on the other",
      "Marketing business rules embedded in the ranking logic",
      "SQL pipelines unifying in-store and e-commerce transactions",
    ],
    insight:
      "Most of the value came from unglamorous work: unifying fragmented product and transaction data. The model then had to earn its place next to marketing's business rules, and that took joint, data-driven iterations with the marketing team rather than a better algorithm.",
    results: [
      "Conversion, value uplift and novelties turnover measured in live A/B campaigns",
      "Coverage and hit@k tracked release over release",
      "Drift monitoring and scheduled retraining running in production",
    ],
    diagram: "novelties-recommendation",
  },
  {
    id: "stock-optimization",
    shortTitle: "Stock optimization",
    title: "Stock optimization and reporting tool",
    sector: "French hypermarket group",
    metric: { value: "−30%", label: "shrinkage in test stores" },
    context:
      "A retail chain had no systematic view of stock performance and no way to optimize in-store inventory. This tool paired network-wide reporting with an optimization model that sizes every store's inventory to its real needs.",
    role:
      "Product Owner and Tech Lead for a team of five — three developers, a business analyst, a DevOps engineer. Set the roadmap and the architecture, and still wrote code.",
    approach: [
      "Data pipelines forecasting demand and setting safety-stock levels per product and store",
      "Linear programming model sizing each store's inventory on top, with inter-store transfers to rebalance",
      "Web app and dashboards keeping the rules configurable by HQ and regional teams",
      "GCP architecture bridging legacy systems (BigQuery, Cloud Functions, GCS)",
    ],
    insight:
      "Holding both the PO and Tech Lead roles kept business priorities and technical execution in one conversation. Operational teams got full visibility, configurable rules, and the power to override the model: that trust in the product is what genuinely changed the stock processes.",
    results: [
      "−10% stock value held in store: working capital freed",
      "−30% shrinkage: fewer losses to expiry, damage and theft",
    ],
    diagram: "stock-optimization",
  },
  {
    id: "job-search-engine",
    shortTitle: "Job search ranking",
    title: "Job search ranking for a public employment platform",
    sector: "Public sector",
    metric: { value: "+20%", label: "consultations per user, A/B vs control" },
    context:
      "Geo-based queries made up 60% of search volume and returned the worst results, with heavy drop-off. This ranking model surfaces relevant job offers where the old engine failed.",
    role:
      "Sole data scientist and project lead: model, data pipeline, A/B test design, and the results case presented to leadership.",
    approach: [
      "Relevancy model trained on search logs and click tracking",
      "Python/Dask pipeline on AWS — S3, SageMaker, Redshift",
      "Deployment via Dataiku on the client's Hadoop stack",
    ],
    insight:
      "The hard part was institutional: persuading a risk-averse public organisation to run its first real A/B test. Framing it as a contained, evidence-based experiment won the sign-off, and gave the organisation its first objective measure of search quality.",
    results: [
      "+20% consultations per user in the A/B test",
      "Relevancy tracked by query type, with a dedicated view on the geo segment",
      "First statistically rigorous A/B test run by the search product team",
    ],
    diagram: "job-search-engine",
  },
  {
    id: "client-knowledge-agent",
    shortTitle: "Client knowledge agent",
    title: "Client knowledge agent for sales advisors",
    sector: "Global luxury group",
    metric: { value: "Weekly", label: "releases through the pilot — advisor feedback landed within days" },
    context:
      "Sales advisors had rich client data on record but couldn't reach it in the flow of a conversation. This agent serves instant client summaries plus a conversational assistant for deeper questions, on desktop and mobile.",
    role:
      "Sole AI engineer, alongside a business counterpart and client IT. Owned the product end to end: architecture, UI, PII policy, pilot iteration, integration.",
    approach: [
      "Client summaries covering history, lifestyle, preferences and personalisation cues",
      "LangGraph agent over BigQuery, Cloud SQL and enterprise APIs",
      "Secured web app linked into the advisors' existing toolkit",
    ],
    insight:
      "Legal, tech and business had to move in parallel rather than one after another. Two things held that together: weekly releases, so advisors saw their feedback land within days, and privacy guarantees built into the architecture itself.",
    results: [
      "Client context available mid-conversation for the first time, on desktop and mobile",
      "Zero new tools to learn — integrated into the app advisors already used",
      "PII protection guaranteed by the architecture, which is what unlocked legal sign-off",
    ],
    diagram: "client-knowledge-agent",
  },
];
