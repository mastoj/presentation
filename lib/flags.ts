import { get } from "@vercel/edge-config";
import { FlagOverridesType, decrypt } from "@vercel/flags";
import { flag } from "@vercel/flags/next";
import { createEdgeConfigAdapter } from "./edge-config-adapter";

export const getFlags = async (overrideString?: string) => {
  const flags = (await get("flags")) as Record<string, boolean>;
  if (!overrideString) return flags;
  const overrides = overrideString
    ? (await decrypt<FlagOverridesType>(overrideString)) ?? {}
    : {};
  return { ...flags, ...overrides };
};

const edgeConfigAdapter = createEdgeConfigAdapter(process.env.EDGE_CONFIG!, {
  teamSlug: "mastojs-projects",
});

export const showNotesFlag = flag<boolean>({
  key: "show-notes",
  adapter: edgeConfigAdapter(),
});
