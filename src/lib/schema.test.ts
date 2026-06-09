import { describe, expect, it } from "vitest";

import { buildFaqSchema, buildOrganizationSchema, buildProductSchema } from "./schema";

describe("schema builders", () => {
  it("creates organization schema with contact details", () => {
    const schema = buildOrganizationSchema();

    expect(schema["@type"]).toBe("Organization");
    expect(schema.contactPoint.telephone).toContain("800");
  });

  it("creates product schema with aggregate offer", () => {
    const schema = buildProductSchema();

    expect(schema.offers["@type"]).toBe("AggregateOffer");
    expect(schema.offers.lowPrice).toBe("1454");
  });

  it("creates faq schema with multiple answers", () => {
    const schema = buildFaqSchema();

    expect(schema.mainEntity).toHaveLength(3);
    expect(schema.mainEntity[0].acceptedAnswer.text.length).toBeGreaterThan(10);
  });
});
