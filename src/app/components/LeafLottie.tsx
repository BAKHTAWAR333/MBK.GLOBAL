import { Lottie } from "lottie-react";

const leafAnimation = {
  v: "5.7.4", fr: 24, ip: 0, op: 72, w: 120, h: 120, nm: "leaf pulse", ddd: 0,
  layers: [{ ddd: 0, ind: 1, ty: 4, nm: "leaf", ks: { o: { a: 0, k: 100 }, r: { a: 1, k: [{ t: 0, s: [-12] }, { t: 72, s: [12] }] }, p: { a: 0, k: [60, 60, 0] }, a: { a: 0, k: [0, 0, 0] }, s: { a: 1, k: [{ t: 0, s: [85, 85, 100] }, { t: 36, s: [110, 110, 100] }, { t: 72, s: [85, 85, 100] }] } }, shapes: [{ ty: "gr", it: [{ ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [32, 70] }, nm: "Leaf body" }, { ty: "fl", c: { a: 0, k: [0.11, 0.37, 0.24, 1] }, o: { a: 0, k: 100 } }, { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: [-35] }, o: { a: 0, k: 100 } }], nm: "Leaf group" }], ip: 0, op: 72, st: 0, bm: 0 }], markers: []
};

export function LeafLottie({ className = "" }: { className?: string }) {
  return <Lottie animationData={leafAnimation} loop className={className} aria-hidden="true" />;
}
