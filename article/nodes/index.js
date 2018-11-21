"use strict";

module.exports = {
  /* basic/abstract node types */
  "node": require("./node"),
  "capitalize": require("./capitalize"),
  "composite": require("./composite"),
  "annotation": require("./annotation"),
  /* Annotation types */
  "emphasis": require("./emphasis"),
  "strong": require("./strong"),
  "subscript": require("./subscript"),
  "superscript": require("./superscript"),
  "underline": require("./underline"),
  "code": require("./code"),
  "author_callout": require("./author_callout"),
  "custom_annotation": require("./custom_annotation"),
  "inline-formula": require("./inline_formula"),
  /* Reference types */
  "resource_reference": require("./resource_reference"),
  "contributor_reference": require("./contributor_reference"),
  "figure_reference": require("./figure_reference"),
  "citation_reference": require("./citation_reference"),
  "footnote_reference": require("./footnote_reference"),
  "definition_reference": require("./definition_reference"),
  "cross_reference": require("./cross_reference"),
  "publication_info": require("./publication_info"),
  /* Annotation'ish content types */
  "link": require("./link"),
  "inline_image": require("./inline_image"),
  /* Content types */
  "abstract": require("./abstract"),
  "document": require("./document"),
  "text": require("./text"),
  "paragraph": require("./paragraph"),
  "heading": require("./heading"),
  "box": require("./box"),
  "cover": require("./cover"),
  "figure": require("./figure"),
  "caption": require("./caption"),
  "image": require("./image"),
  "webresource": require("./web_resource"),
  "table": require("./table"),
  "supplement": require("./supplement"),
  "video": require("./video"),
  "contributor": require("./contributor"),
  "definition": require("./definition"),
  "citation": require("./citation"),
  "mixed_citation": require("./mixed_citation"),
  "formula": require('./formula'),
  "list": require("./list"),
  "codeblock": require("./codeblock"),
  "affiliation": require("./_affiliation"),
  "footnote": require("./footnote"),
  "quote": require("./quote"),
  "speech": require("./speech"),
  "strike": require("./strike"),
  "sec_meta": require("./sec_meta")
};
