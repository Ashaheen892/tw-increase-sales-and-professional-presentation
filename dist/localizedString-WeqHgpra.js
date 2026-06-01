function f(o, t = "") {
  var e, l, c;
  if (o == null)
    return t;
  if (typeof o == "string")
    return o.trim() || t;
  if (typeof o == "number")
    return String(o);
  if (typeof o == "object") {
    const r = typeof Salla < "u" ? (l = (e = Salla == null ? void 0 : Salla.lang) == null ? void 0 : e.getLocale) == null ? void 0 : l.call(e) : void 0, a = (c = document.documentElement.lang) == null ? void 0 : c.split("-")[0], s = r || a || "ar";
    console.log("--------------------"), console.log("Salla locale:", r), console.log("html lang:", document.documentElement.lang), console.log("resolved locale:", s), console.log("value:", o);
    const i = o, d = [
      s,
      "ar",
      "en",
      ...Object.keys(i)
    ];
    for (const g of d) {
      const n = i[g];
      if (typeof n == "string" && n.trim())
        return console.log("selected:", g, "=>", n), n.trim();
    }
  }
  return t;
}
export {
  f as l
};
