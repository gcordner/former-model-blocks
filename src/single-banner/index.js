import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import save from "./save";
import "./style.css";

registerBlockType("fm/single-banner", {
  edit: Edit,
  save,
});
