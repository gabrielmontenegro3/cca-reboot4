import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
const fieldImg = "/assets/field-CVNL-Tsb.jpg";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export {
  cn as c,
  fieldImg as f
};
