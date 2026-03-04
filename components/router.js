export function normalizeRoute(input) {
    const raw = (input || "").trim();

    try {
        const u = new URL(raw);
        return u.pathname.replace(/^\/+/, "").replace(/\/+$/, "").toLowerCase(); // "kary"
    } catch (_) { }

    const cleaned = raw.replace(/^https?:\/\/[^/]+\/?/, "");

    return cleaned
        .replace(/^\/+/, "")
        .replace(/\/+$/, "")
        .toLowerCase();
}

export function toExplorerAddress(origin = "curriculum") {
    return `${origin}/explorer`;
}

export function toPersonAddress(personId, origin = "curriculum") {
    return `${origin}/${personId}`;
}